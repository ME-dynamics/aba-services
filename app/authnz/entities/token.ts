import { entityTypes } from "../types";
export function buildMakeToken(args: entityTypes.IBuildMakeToken) {
  const { hoursFromNow, nanoid } = args;
  const errorPath = "authnz, entities, token";
  function isPermanentlyBlocked(tokenReCreateCount: number) {
    return tokenReCreateCount > 9;
  }
  const tempBlockSkew = 3e4; // 30 seconds
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
    // due to silent refresh technique on client side, 30 second time threshold is applied
    // request might be out of time
    if (
      tokenTempBlock &&
      tokenTempBlock.getTime() + tempBlockSkew > Date.now()
    ) {
      ++tokenReCreateCount;
    }
    // if token is refresh at correct time, reset token generation count
    if (tokenTempBlock && tokenTempBlock.getTime() < Date.now()) {
      tokenReCreateCount = 0;
    }

    // check if it's blocked
    permanentBlock = isPermanentlyBlocked(tokenReCreateCount);

    // can create 9 token within five hours
    // jwt is valid for 313 minutes
    tokenTempBlock = new Date(hoursFromNow(5, errorPath));

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
