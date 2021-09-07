import { verify } from "argon2";
import {
  tFindOtpByPhoneFunc,
  tInsertOtpFunc,
  tSendOtpSms,
  tFindOtpByTokenFunc,
  tSignJwtFunc,
  tCreateUserFunc,
  tFindTokenFunc,
  tTokenGenFunc,
  tInsertTokenFunc,
  tFindTokenByUserIdFunc,
  tInsertRoleFunc,
  tFindRoleFunc,
  tFindSecretKeysFunc,
} from "./adapters";
import { otpGen } from "../adapters";
import { tRole } from "./entities";

// passwordless start
export interface IBuildPasswordlessStart {
  findOtpByPhone: tFindOtpByPhoneFunc;
  insertOtp: tInsertOtpFunc;
  sendOtpBySms: tSendOtpSms;
  otpGen: typeof otpGen;
}
export interface IPasswordlessStart {
  phoneNumber: string;
  // role: tRole;
}
export interface IPasswordlessStartResult {
  otpToken: string;
  deviceId: string;
}

// passwordless verify

export interface IBuildPasswordlessVerify {
  findOtpByToken: tFindOtpByTokenFunc;
  signJwt: tSignJwtFunc;
  verifyHash: typeof verify;
  findToken: tFindTokenFunc;
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
}

export interface IPasswordlessVerifyResult {
  refreshToken: string;
  jwtToken: string;
  refreshTokenExpiresAt: number;
  jwtTokenExpiresAt: number;
  role: tRole;
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
  userId: string;
  xRefreshToken: string;
  xJwtToken: string;
}
export interface IRefreshResult {
  refreshToken: string;
  jwtToken: string;
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
