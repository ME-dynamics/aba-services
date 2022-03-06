import { secureRandomNumber, time, types } from "aba-node";
import { hash } from "argon2";
import { SignJWT, generateKeyPair, importJWK, KeyLike, exportJWK } from "jose";
import {
  IMadeDeviceIdObject,
  IMadeOtpObject,
  IMadeRoleObject,
  IMadeTokenObject,
} from "./entities";

// initialize database

export interface IBuildInit {
  init: types.tDbInitFunc;
}

// find otp by phone | token

export type tFindOtpByPhoneFunc = (
  phoneNumber: string
) => Promise<IMadeOtpObject | undefined>;

export type tFindOtpByTokenFunc = (
  otpToken: string
) => Promise<IMadeOtpObject | undefined>;

export type tRowToOtpFunc = (row: types.tRow) => IMadeOtpObject;

export interface IBuildFindOtpBy {
  select: types.tDbSelectFunc;
  rowToOtp: tRowToOtpFunc;
}

export type tRowToDeviceIdFunc = (row: types.tRow) => IMadeDeviceIdObject;
export interface IBuildFindDeviceId {
  select: types.tDbSelectFunc;
  rowToDeviceId: tRowToDeviceIdFunc;
}
export type tFindDeviceIdByPhoneFunc = (
  info: IFindDeviceIdByPhone
) => Promise<IMadeDeviceIdObject | undefined>;

export interface IFindDeviceIdByPhone {
  deviceId: string;
  phoneNumber: string;
}

// insert otp
export type tInsertOtpFunc = (otpObject: IMadeOtpObject) => Promise<void>;

export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// find token
export interface IBuildFindTokenByUserId {
  select: types.tDbSelectFunc;
  rowToToken: tRowToTokenFunc;
}
export interface IFindTokenByUserId {
  userId: string;
  deviceId: string;
}

export type tRowToTokenFunc = (row: types.tRow) => IMadeTokenObject;

export type tInsertTokenFunc = (tokenObject: IMadeTokenObject) => Promise<void>;

// find admin role

export interface IBuildFindAdmins {
  select: types.tDbSelectFunc;
  rowToRole: tRowToRoleFunc;
}

export type tFindAdminsFunc = () => Promise<IMadeRoleObject[] | undefined>;

// delete admin

export interface IBuildDeleteAdmin {
  remove: types.tDbDeleteFunc;
  insert: types.tDbUpsertFunc;
}
export type tDeleteAdminFunc = (otpId: string) => Promise<void>;
// find private secret key
export interface ISecretKey {
  kty: string;
  crv: string;
  x: string;
  d: string | undefined;
}

export interface IKey extends ISecretKey {
  keyType: "private" | "public";
  kid: number;
}
export type tRowToKeyFunc = (row: types.tRow) => IKey;

export interface IBuildFindPrivateKey {
  select: types.tDbSelectFunc;
  rowToKey: tRowToKeyFunc;
  importJWK: typeof importJWK;
}
export interface IFindPrivateKeyResult {
  privateKey: KeyLike | Uint8Array;
}

// find secret keys

export interface IBuildFindSecretKeys {
  select: types.tDbSelectFunc;
  rowToKey: tRowToKeyFunc;
}
export interface IFindSecretKeysResult {
  privateKey: IKey;
  publicKey: IKey;
}
export type tFindSecretKeysFunc = (
  version: number
) => Promise<IFindSecretKeysResult | undefined>;

// insert device id

export type tInsertDeviceIdFunc = (
  deviceIdObject: IMadeDeviceIdObject
) => Promise<void>;

// insert secret keys

export interface IInsertSecretKeys {
  privateKey: IKey;
  publicKey: IKey;
}
export type tInsertSecretKeysFunc = (keys: IInsertSecretKeys) => Promise<void>;

// find role
export type tRowToRoleFunc = (row: types.tRow) => IMadeRoleObject;
export interface IBuildFindRole {
  select: types.tDbSelectFunc;
  rowToRole: tRowToRoleFunc;
}
export type tFindRoleFunc = (
  otpId: string
) => Promise<IMadeRoleObject | undefined>;

// insert role
export type tInsertRoleFunc = (roleObject: IMadeRoleObject) => Promise<void>;

// sign jwt

export interface IJwtPayload {
  userId: string;
  admin: boolean;
  provider: boolean;
  assistant: boolean;
  customer: boolean;
  support: boolean;
  accountant: boolean;
}

export type tFindPrivateKeyFunc = () => Promise<IFindPrivateKeyResult>;

export interface IBuildSignJwt {
  Signer: typeof SignJWT;
  findPrivateKey: tFindPrivateKeyFunc;
  nanoid: (size: number) => string;
  minutesFromNow: typeof time.minutesFromNow;
}

export interface ISignJwtResult {
  jwt: string;
  jwtKey: string;
  jwtExp: number;
}

export type tSignJwtFunc = (payload: IJwtPayload) => Promise<ISignJwtResult>;
// initialize secrets

export interface IBuildInitSecret {
  generateKey: typeof generateKeyPair;
  exportJWK: typeof exportJWK;
  findSecretKeys: tFindSecretKeysFunc;
  insertSecretKeys: tInsertSecretKeysFunc;
}
// utils - validate phone number

export interface IValidatePhoneNumberResult {
  isValid: boolean;
  phoneNumber: string;
}

// utils - otp gen

export interface IBuildOtpGen {
  nanoid: (size: number) => string;
  hash: typeof hash;
  minutesFromNow: typeof time.minutesFromNow;
  secureRandomNumber: typeof secureRandomNumber;
}

// utils - token gen
export interface IBuildTokenGen {
  nanoid: (size: number) => string;
  hash: typeof hash;
  daysFromNow: typeof time.daysFromNow;
}
export interface ITokenGenResult {
  hashedJwt: string;
  refreshToken: string;
  hashedRefreshToken: string;
  refreshExpiresAt: number;
}
export type tTokenGenFunc = (jwt: string) => Promise<ITokenGenResult>;

// find token by refresh

export type tFindTokenByUserIdFunc = (
  info: IFindTokenByUserId
) => Promise<IMadeTokenObject | undefined>;

// network
export interface ICreateUser {
  userId: string;
  phoneNumber: string;
  role: string;
}
export type tCreateUserFunc = (
  args: ICreateUser
) => Promise<string | undefined>;

export interface ISendOtpSms {
  phoneNumber: string;
  otpCode: number;
}
export type tSendOtpSms = (info: ISendOtpSms) => Promise<boolean>;
