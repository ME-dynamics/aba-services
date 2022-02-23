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
  findDeviceIdByPhone,
  insertToken,
  signJwt,
  tokenGen,
  findRole,
  insertRole,
  insertDeviceId,
  findSecretKeys,
  findAdmins,
  deleteAdmin,
  sha512,
  validatePhoneNumber,
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
  insertDeviceId,
  otpGen,
  sendOtpBySms: fetchSendOtpBySms,
  sha512,
});

export const passwordlessVerify = buildPasswordlessVerify({
  findRole,
  insertRole,
  findDeviceIdByPhone,
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
  validatePhoneNumber,
});

export const retrieveRoleByOtpId = buildRetrieveRoleByOtpId({ findRole });
