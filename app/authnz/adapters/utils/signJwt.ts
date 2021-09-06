import { adaptersTypes } from "../../types";
import { jwtIssuer, jwtExpires } from "../../config";

/**
 * jose signer to create a jwt
 * @description find private key from database and use that key to create a new jwt with given payload
 * for more information visit:
 * @link https://github.com/panva/jose/blob/main/docs/classes/jwt_sign.signjwt.md
 * @param args jwt payload
 * @returns
 */
export function buildSignJwt(args: adaptersTypes.IBuildSignJwt) {
  const { Signer, findPrivateKey, nanoid, minutesFromNow } = args;
  const errorPath = "authnz, adapters, utils, sign jwt";
  return async function signJwt(
    jwtPayload: adaptersTypes.IJwtPayload
  ): Promise<adaptersTypes.ISignJwtResult> {
    const { privateKey } = await findPrivateKey();
    const jwtKey = nanoid(6);
    const exp = minutesFromNow(jwtExpires, errorPath) 
    const {
      userId,
      admin,
      provider,
      assistant,
      accountant,
      customer,
      support,
    } = jwtPayload;
    const payload: Record<string, boolean> = {};
    if (admin) {
      payload["admin"] = admin;
    }
    if (provider) {
      payload["provider"] = provider;
    }
    if (assistant) {
      payload["assistant"] = assistant;
    }
    if (accountant) {
      payload["accountant"] = accountant;
    }
    if (customer) {
      payload["customer"] = customer;
    }
    if (support) {
      payload["support"] = support;
    }
    const now = Math.floor(Date.now() / 1000); // envoy uses seconds
    const jwt = await new Signer(payload)
      .setIssuer(jwtIssuer)
      .setSubject(userId)
      .setAudience("taskyn")
      .setJti(jwtKey)
      .setProtectedHeader({ alg: "EdDSA" })
      .setIssuedAt(now)
      .setNotBefore(now)
      .setExpirationTime(Math.floor(exp / 1000)) // envoy uses seconds
      .sign(privateKey);
    return {
      jwt,
      jwtKey,
      jwtExp: exp, // return milliseconds 
    };
  };
}
