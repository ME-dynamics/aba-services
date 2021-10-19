/* 
    inject and export use cases
*/
import { verify } from "argon2";
import {
  findOtpByPhone,
  insertOtp,
  otpGen,
  fetchCreateUser,
  fetchSendOtpBySms,
  findOtpByToken,
  findTokenByUserId,
  insertToken,
  signJwt,
  tokenGen,
  findRole,
  insertRole,
  findSecretKeys,
  findAdmins,
  deleteAdmin,
} from "../adapters";

import { buildPasswordlessStart } from "./passwordlessStart";
import { buildPasswordlessVerify } from "./passwordlessVerify";
import { buildRefresh } from "./refresh";
import { buildRetrievePublicKey } from "./retrievePublicKey";
import { buildCreateProvider } from "./createProvider";
import { buildInitAdmins } from "./initAdmins";
import { buildRetrieveRoleByOtpId } from "./retrieveRoleByOtpId";

export const passwordlessStart = buildPasswordlessStart({
  findOtpByPhone,
  insertOtp,
  otpGen,
  sendOtpBySms: fetchSendOtpBySms,
});

export const passwordlessVerify = buildPasswordlessVerify({
  findRole,
  insertRole,
  createUser: fetchCreateUser,
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

export const initAdmin = buildInitAdmins({
  deleteAdmin,
  findAdmins,
  findOtpByPhone,
  insertOtp,
  insertRole,
});

export const retrieveRoleByOtpId = buildRetrieveRoleByOtpId({ findRole });
