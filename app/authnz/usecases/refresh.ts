import { makeToken } from "../entities";
import {
  httpResultClientError,
  httpResultServerError,
  httpResultSuccess,
} from "aba-node";
import { strings } from "../config";
import { usecaseTypes } from "../types";

export function buildRefresh(args: usecaseTypes.IBuildRefresh) {
  const {
    findTokenByUserId,
    findRole,
    insertToken,
    signJwt,
    tokenGen,
    verifyHash,
  } = args;
  const { ok } = httpResultSuccess;
  const { notFound, forbidden } = httpResultClientError;
  const { internalServerError } = httpResultServerError;
  return async function refresh(refresh: usecaseTypes.IRefresh) {
    const { userId, xJwtToken, xRefreshToken } = refresh;
    const tokenFound = await findTokenByUserId(userId);
    if (!tokenFound || tokenFound.softDeleted) {
      return notFound({ error: strings.tokenNotFoundOrValid.fa });
    }
    if (tokenFound.permanentBlock) {
      return forbidden({ error: strings.numberPermanentlyBlocked.fa });
    }
    const refreshVerified = await verifyHash(
      tokenFound.refreshToken,
      xRefreshToken
    );
    if (!refreshVerified) {
      return forbidden({ error: strings.tokenNotFoundOrValid.fa });
    }
    const jwtVerified = await verifyHash(tokenFound.jwt, xJwtToken);
    if (!jwtVerified) {
      return forbidden({ error: strings.tokenNotFoundOrValid.fa });
    }
    const roles = await findRole(userId);
    if (!roles) {
      return internalServerError({ error: strings.roleMustExists.fa });
    }
    const { admin, provider, assistant, customer, support, accountant } = roles;
    const { jwt, jwtExp, jwtKey } = await signJwt({
      userId,
      admin,
      provider,
      assistant,
      customer,
      support,
      accountant,
    });
    const { hashedJwt, hashedRefreshToken, refreshExpiresAt, refreshToken } =
      await tokenGen(jwt);
    const token = makeToken({
      otpId: userId,
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
    await insertToken(token.object());
    return ok<usecaseTypes.IRefreshResult>({
      payload: {
        jwtToken: jwt,
        refreshToken,
      },
    });
  };
}
