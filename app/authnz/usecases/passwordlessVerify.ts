import { makeOtp, makeToken, makeRole } from "../entities";
import { httpResult } from "aba-node";
import { strings } from "../config";
import { usecaseTypes, entityTypes } from "../types";

export function buildPasswordlessVerify(
  args: usecaseTypes.IBuildPasswordlessVerify
) {
  const {
    findOtpByToken,
    findDeviceIdByPhone,
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
  const { ok } = httpResult.success;
  const { badRequest, forbidden } = httpResult.clientError;
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
    };
  }
  return async function passwordlessVerify(
    info: usecaseTypes.IPasswordlessVerify
  ) {
    const { otpCode, otpToken, deviceId } = info;
    const otpFound = await findOtpByToken(otpToken);
    if (!otpFound) {
      // console.log({ otpFound: otpFound }); TODO: replace with logger
      return badRequest({ error: strings.tokenNotFoundOrValid.fa });
    }
    const deviceIdFound = await findDeviceIdByPhone({
      deviceId,
      phoneNumber: otpFound.phoneNumber,
    });
    if (!deviceIdFound) {
      // console.log({ deviceIdFound: deviceIdFound });
      return badRequest({ error: strings.tokenNotFoundOrValid.fa });
    }
    // check if it's not blocked
    if (otpFound.permanentBlock) {
      return forbidden({
        error: strings.numberPermanentlyBlocked.fa,
      });
    }
    const otp = makeOtp(otpFound);

    // check if otp code was generated
    const otpCodeHash = otp.get.otpCode();
    if (!otpCodeHash) {
      return badRequest({
        error: strings.startVerificationFirst.fa,
      });
    }
    // check if code matches
    const otpVerification = await verifyHash(otpCodeHash, `${otpCode}`);
    if (!otpVerification) {
      return badRequest({ error: strings.codeOrOtpTokenNotValid.fa });
    }
    otp.set.phoneConfirmed();
    const roleExists = await findRole(otp.get.id());
    const role = roleExists
      ? makeRole(roleExists)
      : makeRole(roleInput(otp.get.id()));

    await createUser({
      userId: otp.get.id(),
      role: role.get.role(),
      phoneNumber: otp.get.phoneNumber(),
    });

    const tokenFound = await findTokenByUserId({
      userId: otp.get.id(),
      deviceId: deviceIdFound.deviceId,
    });
    if (tokenFound?.permanentBlock) {
      return forbidden({ error: strings.numberPermanentlyBlocked.fa });
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
      deviceId: tokenFound?.deviceId || deviceIdFound.deviceId,
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
        deviceId: token.get.deviceId(),
        jwtToken: jwt,
        refreshToken,
        jwtTokenExpiresAt: jwtExp,
        refreshTokenExpiresAt: refreshExpiresAt,
        role: role.get.role(),
        userId: otp.get.id(),
      },
    });
  };
}
