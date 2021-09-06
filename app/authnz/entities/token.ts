import { IBuildMakeToken, IMadeToken, IToken } from "../types";
export function buildMakeToken(args: IBuildMakeToken) {
  const { hoursFromNow } = args;
  const errorPath = "authnz, entities, token";
  function isPermanentlyBlocked(tokenReCreateCount: number) {
    return tokenReCreateCount > 3;
  }
  return function makeToken(token: IToken) {
    const {
      otpId,
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
      softDeleted,
    } = token;

    // increase token generation count per otp id
    if(tokenTempBlock && tokenTempBlock.getTime() > Date.now()) {
      ++tokenReCreateCount;
    }
  
    // check if it's blocked
    permanentBlock = isPermanentlyBlocked(tokenReCreateCount);

    tokenTempBlock = new Date(hoursFromNow(2, errorPath));

    // * Setters
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }

    const madeToken: Readonly<IMadeToken> = {
      get: {
        otpId: () => otpId,
        refreshToken: () => refreshToken,
        jwt: () => jwt,
        jwtKey: () => jwtKey,
        refreshExpiresAt: () => refreshExpiresAt,
        jwtExpiresAt: () => jwtExpiresAt,
        tokenReCreateCount: () => tokenReCreateCount,
        permanentBlock: () => permanentBlock,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        remove,
        restore,
      },
      object: () => {
        return {
          otpId,
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
          softDeleted,
        };
      },
    };

    return madeToken;
  };
}
