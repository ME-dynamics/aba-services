import { entityTypes } from "../types";
export function buildMakeToken(args: entityTypes.IBuildMakeToken) {
  const { hoursFromNow, nanoid } = args;
  const errorPath = "authnz, entities, token";
  function isPermanentlyBlocked(tokenReCreateCount: number) {
    return tokenReCreateCount > 6;
  }
  return function makeToken(token: entityTypes.IToken) {
    const {
      otpId,
      deviceId = nanoid(32),
      createdAt = new Date(),
      modifiedAt = new Date(),
      refreshToken,
      jwt,
      jwtKey,
      refreshExpiresAt,
      jwtExpiresAt,
    } = token;
    let {
      tokenReCreateCount = 0,
      tokenTempBlock,
      permanentBlock = false,
    } = token;

    // increase token generation count per otp id
    // due to silent refresh technique on client side, 10 second time threshold is applied
    if (tokenTempBlock && tokenTempBlock.getTime() - 1e4 > Date.now()) {
      ++tokenReCreateCount;
    }

    // check if it's blocked
    permanentBlock = isPermanentlyBlocked(tokenReCreateCount);

    // can create 6 token within two hours
    tokenTempBlock = new Date(hoursFromNow(2, errorPath));

    // * Setters

    const madeToken: Readonly<entityTypes.IMadeToken> = {
      get: {
        otpId: () => otpId,
        deviceId: () => deviceId,
        refreshToken: () => refreshToken,
        jwt: () => jwt,
        jwtKey: () => jwtKey,
        refreshExpiresAt: () => refreshExpiresAt,
        jwtExpiresAt: () => jwtExpiresAt,
        tokenReCreateCount: () => tokenReCreateCount,
        permanentBlock: () => permanentBlock,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      object: () => {
        return {
          otpId,
          deviceId,
          refreshToken,
          jwt,
          jwtKey,
          jwtExpiresAt,
          refreshExpiresAt,
          permanentBlock,
          tokenReCreateCount,
          tokenTempBlock,
          createdAt,
          modifiedAt,
        };
      },
    };

    return madeToken;
  };
}
