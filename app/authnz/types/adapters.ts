import { secureRandomNumber, time, types } from "aba-node";
import { hash } from "argon2";
import SignJwt from "jose/jwt/sign";
import generateKeyPair from "jose/util/generate_key_pair";
import fromKeyLike from "jose/jwk/from_key_like";
import parseKey from "jose/jwk/parse";
import { KeyLike } from "jose/types";
import { IMadeOtpObject, IMadeRoleObject, IMadeTokenObject } from "./entities";

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

// insert otp
export type tInsertOtpFunc = (otpObject: IMadeOtpObject) => Promise<boolean>;

export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// find token
export interface IBuildFindTokeByUserId {
  select: types.tDbSelectFunc;
  rowToToken: tRowToTokenFunc;
}
export type tRowToTokenFunc = (row: types.tRow) => IMadeTokenObject;

export type tInsertTokenFunc = (
  tokenObject: IMadeTokenObject
) => Promise<boolean>;

// find admin role

export interface IBuildFindAdmins {
  select: types.tDbSelectFunc;
  rowToRole: tRowToRoleFunc;
}

export type tFindAdminsFunc = () => Promise<IMadeRoleObject[] | undefined>;

// delete admin

export interface IBuildDeleteAdmin {
  remove: types.tDbDeleteFunc;
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
  parseKey: typeof parseKey;
}
export interface IFindPrivateKeyResult {
  privateKey: KeyLike;
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

// insert secret keys

export interface IInsertSecretKeys {
  privateKey: IKey;
  publicKey: IKey;
}
export type tInsertSecretKeysFunc = (
  keys: IInsertSecretKeys
) => Promise<boolean>;

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
  Signer: typeof SignJwt;
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
  fromKeyLike: typeof fromKeyLike;
  findSecretKeys: tFindSecretKeysFunc;
  insertSecretKeys: tInsertSecretKeysFunc;
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
  userId: string
) => Promise<IMadeTokenObject | undefined>;

// network
interface IUser {
  userId: string;
}
export type tCreateUserFunc = (
  userId: string,
  phoneNumber: string
) => Promise<string | undefined>;

export interface ISendOtpSms {
  phoneNumber: string;
  otpCode: number;
}
export type tSendOtpSms = (info: ISendOtpSms) => Promise<boolean>;
