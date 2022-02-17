import { verify } from "argon2";
import {
  tFindOtpByPhoneFunc,
  tInsertOtpFunc,
  tSendOtpSms,
  tFindOtpByTokenFunc,
  tSignJwtFunc,
  tCreateUserFunc,
  tTokenGenFunc,
  tInsertTokenFunc,
  tFindTokenByUserIdFunc,
  tInsertRoleFunc,
  tFindRoleFunc,
  tFindSecretKeysFunc,
  tDeleteAdminFunc,
  tFindAdminsFunc,
  tFindDeviceIdByPhoneFunc,
  tInsertDeviceIdFunc,
} from "./adapters";
import { otpGen } from "../adapters";
import { tRole, tDeviceInfo } from "./entities";

// passwordless start
export interface IBuildPasswordlessStart {
  findOtpByPhone: tFindOtpByPhoneFunc;
  insertOtp: tInsertOtpFunc;
  sendOtpBySms: tSendOtpSms;
  otpGen: typeof otpGen;
  sha512: (value: string) => string;
  insertDeviceId: tInsertDeviceIdFunc;
}
export interface IPasswordlessStart extends tDeviceInfo {
  phoneNumber: string;
}
export interface IPasswordlessStartResult {
  otpToken: string;
  deviceId: string;
}

// passwordless verify

export interface IBuildPasswordlessVerify {
  findOtpByToken: tFindOtpByTokenFunc;
  findDeviceIdByPhone: tFindDeviceIdByPhoneFunc;
  signJwt: tSignJwtFunc;
  verifyHash: typeof verify;
  findTokenByUserId: tFindTokenByUserIdFunc;
  findRole: tFindRoleFunc;
  tokenGen: tTokenGenFunc;
  createUser: tCreateUserFunc;
  insertToken: tInsertTokenFunc;
  insertOtp: tInsertOtpFunc;
  insertRole: tInsertRoleFunc;
}

export interface IPasswordlessVerify {
  otpCode: number;
  otpToken: string;
  deviceId: string;
}

export interface IPasswordlessVerifyResult {
  deviceId: string;
  refreshToken: string;
  jwtToken: string;
  refreshTokenExpiresAt: number;
  jwtTokenExpiresAt: number;
  role: tRole;
  userId: string;
}

// refresh

export interface IBuildRefresh {
  insertToken: tInsertTokenFunc;
  findTokenByUserId: tFindTokenByUserIdFunc;
  findRole: tFindRoleFunc;
  verifyHash: typeof verify;
  signJwt: tSignJwtFunc;
  tokenGen: tTokenGenFunc;
}

export interface IRefresh {
  deviceId: string;
  userId: string;
  xRefreshToken: string;
  xJwtToken: string;
}
export interface IRefreshResult {
  refreshToken: string;
  jwtToken: string;
  refreshTokenExpiresAt: number;
  jwtTokenExpiresAt: number;
}

// retrieve public key

export interface IBuildRetrieveSecretKeys {
  findSecretKeys: tFindSecretKeysFunc;
}

interface IKeyStruct {
  alg: "EdDSA";
  kty: string;
  crv: string;
  x: string;
  d: string | undefined;
}
export interface IPublicKey {
  keys: IKeyStruct[];
}

// create provider

export interface IBuildCreateProvider {
  findOtpByPhone: tFindOtpByPhoneFunc;
  findRole: tFindRoleFunc;
  insertOtp: tInsertOtpFunc;
  insertRole: tInsertRoleFunc;
}

export interface ICreateProvider {
  providerPhoneNumber: string;
}

export interface ICreateProviderResult {
  otpId: string;
  phoneNumber: string;
}

// initialize admin

export interface IBuildInitAdmin {
  findOtpByPhone: tFindOtpByPhoneFunc;
  insertOtp: tInsertOtpFunc;
  insertRole: tInsertRoleFunc;
  deleteAdmin: tDeleteAdminFunc;
  findAdmins: tFindAdminsFunc;
}

export interface IBuildRetrieveRoleByOtpId {
  findRole: tFindRoleFunc;
}
