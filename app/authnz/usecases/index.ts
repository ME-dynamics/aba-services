/* 
    inject and export use cases
*/
import { verify } from "argon2";
import {
  findOtpByPhone,
  insertOtp,
  otpGen,
  sendOtpBySms,
  createUser,
  findOtpByToken,
  findTokenByUserId,
  insertToken,
  signJwt,
  tokenGen,
  findRole,
  insertRole,
  findSecretKeys,
} from "../adapters";

import { buildPasswordlessStart } from "./passwordlessStart";
import { buildPasswordlessVerify } from "./passwordlessVerify";
import { buildRefresh } from "./refresh";
import { buildRetrievePublicKey } from "./retrievePublicKey";
import { buildCreateProvider } from "./createProvider";

export const passwordlessStart = buildPasswordlessStart({
  findOtpByPhone,
  insertOtp,
  otpGen,
  sendOtpBySms,
});

export const passwordlessVerify = buildPasswordlessVerify({
  findRole,
  insertRole,
  createUser,
  findOtpByToken,
  insertToken,
  signJwt,
  tokenGen,
  verifyHash: verify,
  findTokenByUserId,
  insertOtp,
});

export const refresh = buildRefresh({
  findRole,
  findTokenByUserId,
  insertToken,
  signJwt,
  tokenGen,
  verifyHash: verify,
});

export const retrievePublicKey = buildRetrievePublicKey({ findSecretKeys });

export const createProvider = buildCreateProvider({
  findOtpByPhone,
  findRole,
  insertOtp,
  insertRole,
});
