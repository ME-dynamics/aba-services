import { makeOtp, makeToken, makeRole } from "../entities";
import { httpResultSuccess, httpResultClientError } from "aba-node";
import { usecaseTypes, entityTypes } from "../types";

export function buildPasswordlessVerify(
  args: usecaseTypes.IBuildPasswordlessVerify
) {
  const {
    findOtpByToken,
    signJwt,
    verifyHash,
    createUser,
    tokenGen,
    insertToken,
    findTokenByUserId,
    insertOtp,
    findRole,
    insertRole,
  } = args;
  const { ok } = httpResultSuccess;
  const { badRequest, forbidden } = httpResultClientError;
  function roleInput(otpId: string): entityTypes.IRole {
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
  return async function passwordlessVerify(
    info: usecaseTypes.IPasswordlessVerify
  ) {
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
    const role = roleExists
      ? makeRole(roleExists)
      : makeRole(roleInput(otp.get.id()));

    const userCreated = await createUser(otp.get.id());
    // const userId = otp.get.userId() || "none";
    // if (userId === "none") {
    //   return internalServerError({ error: "internal error" });
    // }

    const tokenFound = await findTokenByUserId(otp.get.id());
    if (tokenFound?.permanentBlock) {
      return forbidden({ error: "your number is permanently blocked" });
    }
    const { jwt, jwtExp, jwtKey } = await signJwt({
      userId: otp.get.id(),
      admin: role.get.admin(),
      provider: role.get.provider(),
      assistant: role.get.assistant(),
      customer: role.get.customer(),
      accountant: role.get.accountant(),
      support: role.get.support(),
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
    await Promise.all([
      insertOtp(otp.object()),
      insertToken(token.object()),
      roleExists ? undefined : insertRole(role.object()),
    ]);

    return ok<usecaseTypes.IPasswordlessVerifyResult>({
      payload: {
        jwtToken: jwt,
        refreshToken,
        jwtTokenExpiresAt: jwtExp,
        refreshTokenExpiresAt: refreshExpiresAt,
        role: role.get.role(),
      },
    });
  };
}
