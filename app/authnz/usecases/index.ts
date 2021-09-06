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
  findToken,
  findRole,
  insertRole,
  findSecretKeys,
} from "../adapters";

import { buildPasswordlessStart } from "./passwordlessStart";
import { buildPasswordlessVerify } from "./passwordlessVerify";
import { buildRefresh } from "./refresh";
import { buildRetrievePublicKey } from "./retrievePublicKey";

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
  findToken,
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
