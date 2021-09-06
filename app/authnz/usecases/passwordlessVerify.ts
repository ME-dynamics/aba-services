import { makeOtp, makeToken, makeRole } from "../entities";
import { httpResultSuccess, httpResultClientError } from "aba-node";
import {
  IBuildPasswordlessVerify,
  IPasswordlessVerify,
  IPasswordlessVerifyResult,
  IRole,
} from "../types";

export function buildPasswordlessVerify(args: IBuildPasswordlessVerify) {
  const {
    findOtpByToken,
    signJwt,
    verifyHash,
    createUser,
    tokenGen,
    insertToken,
    findToken,
    insertOtp,
    findRole,
    insertRole,
  } = args;
  const { ok } = httpResultSuccess;
  const { badRequest, forbidden } = httpResultClientError;
  function roleRawObj(otpId: string): IRole {
    return {
      otpId,
      admin: false,
      provider: false,
      assistant: false,
      customer: true,
      support: false,
      accountant: false,
      adminAL: 0,
      providerAL: 0,
      assistantAL: 0,
      customerAL: 0,
      supportAL: 0,
      accountantAL: 0,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function passwordlessVerify(info: IPasswordlessVerify) {
    const { otpCode, otpToken } = info;
    const otpFound = await findOtpByToken(otpToken);
    if (!otpFound) {
      return badRequest({ error: "otp token or code are not valid" });
    }
    if (otpFound.permanentBlock) {
      return forbidden({
        error: "your number is permanently blocked",
      });
    }
    const otp = makeOtp(otpFound);
    // check if it's not blocked

    // check if otp code was generated
    const otpCodeHash = otp.get.otpCode();
    if (!otpCodeHash) {
      return badRequest({
        error: "you should start verification process first",
      });
    }
    // check if code matches
    const otpVerification = await verifyHash(otpCodeHash, `${otpCode}`);
    if (!otpVerification) {
      return badRequest({ error: "otp token or code are not valid" });
    }
    otp.set.phoneConfirmed();
    const roleExists = await findRole(otp.get.id());
    if (!roleExists) {
      const role = makeRole(roleRawObj(otp.get.id()));
      await insertRole(role.object());
    }
    // // check if user is already created
    // if (!otp.get.userId()) {
    //   // if no user was created, create a new user;
    //   const { userId } = await createUser();
    //   otp.set.userId(userId);
    // }
    const userCreated = await createUser(otp.get.id());
    // const userId = otp.get.userId() || "none";
    // if (userId === "none") {
    //   return internalServerError({ error: "internal error" });
    // }

    const tokenFound = await findToken({ otpId: otp.get.id() });
    if (tokenFound?.permanentBlock) {
      return forbidden({ error: "your number is permanently blocked" });
    }
    const { jwt, jwtExp, jwtKey } = await signJwt({
      userId: otp.get.id(),
      admin: roleExists ? roleExists.admin : false,
      provider: roleExists ? roleExists.provider : false,
      assistant: roleExists ? roleExists.assistant : false,
      customer: roleExists ? roleExists.customer : false,
      accountant: roleExists ? roleExists.accountant : false,
      support: roleExists ? roleExists.support : false,
    });
    const { hashedJwt, hashedRefreshToken, refreshExpiresAt, refreshToken } =
      await tokenGen(jwt);
    const token = makeToken({
      otpId: otp.get.id(),
      jwt: hashedJwt,
      jwtExpiresAt: new Date(jwtExp),
      jwtKey,
      refreshToken: hashedRefreshToken,
      refreshExpiresAt: new Date(refreshExpiresAt),
      permanentBlock: tokenFound?.permanentBlock || false,
      tokenTempBlock: tokenFound?.tokenTempBlock,
      tokenReCreateCount: tokenFound?.tokenReCreateCount || 0,
      createdAt: tokenFound?.createdAt,
      modifiedAt: undefined,
      softDeleted: false,
    });

    // TODO: check for database integrity later
    // TODO: probably best to batch these queries
    await insertOtp(otp.object());
    await insertToken(token.object());

    return ok<IPasswordlessVerifyResult>({
      payload: {
        jwtToken: jwt,
        refreshToken,
        jwtTokenExpiresAt: jwtExp,
        refreshTokenExpiresAt: refreshExpiresAt
      },
    });
  };
}
