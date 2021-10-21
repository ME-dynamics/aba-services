import { scyllaClient, secureRandomNumber, time } from "aba-node";
import { hash } from "argon2";
import { nanoid } from "nanoid";
import {SignJWT, generateKeyPair, importJWK, exportJWK} from "jose";
import {
  buildFindOtpByPhone,
  buildFindOtpByToken,
  buildFindPrivateKey,
  buildFindSecretKeys,
  buildFindTokenByUserId,
  buildInitDb,
  buildInsertOtp,
  buildInsertSecretKeys,
  buildInsertToken,
  buildFindRole,
  buildInsertRole,
  buildDeleteAdmin,
  buildFindAdmins,
} from "./db";
import {
  buildSignJwt,
  rowToKey,
  rowToOtp,
  rowToToken,
  rowToRole,
  buildOtpGen,
  buildTokenGen,
} from "./utils";
import { buildInitSecret } from "./initSecret";
import {
  scyllaContactPoint,
  applicationName,
  applicationVersion,
  scyllaKeySpace,
} from "../config";

const dbClient = scyllaClient({
  id: undefined,
  applicationName,
  applicationVersion,
  keyspace: scyllaKeySpace,
  localDataCenter: "datacenter1",
  contactPoints: [scyllaContactPoint],
  errorPath: "authnz, adapters",
});
// db
export const initDb = buildInitDb({ init: dbClient.init });

export const findOtpByPhone = buildFindOtpByPhone({
  select: dbClient.select,
  rowToOtp,
});
export const findOtpByToken = buildFindOtpByToken({
  select: dbClient.select,
  rowToOtp,
});
export const findPrivateKey = buildFindPrivateKey({
  select: dbClient.select,
  rowToKey,
  importJWK,
});
export const findSecretKeys = buildFindSecretKeys({
  select: dbClient.select,
  rowToKey,
});
export const findTokenByUserId = buildFindTokenByUserId({
  select: dbClient.select,
  rowToToken,
});
export const findRole = buildFindRole({
  select: dbClient.select,
  rowToRole,
});
export const insertRole = buildInsertRole({
  insert: dbClient.insert,
});
export const insertOtp = buildInsertOtp({ insert: dbClient.insert });
export const insertSecretKeys = buildInsertSecretKeys({
  insert: dbClient.insert,
});
export const insertToken = buildInsertToken({ insert: dbClient.insert });

export const findAdmins = buildFindAdmins({
  select: dbClient.select,
  rowToRole,
});
export const deleteAdmin = buildDeleteAdmin({ remove: dbClient.delete });

// utils
export const signJwt = buildSignJwt({
  Signer: SignJWT,
  findPrivateKey,
  minutesFromNow: time.minutesFromNow,
  nanoid,
});

export const otpGen = buildOtpGen({
  hash: hash,
  minutesFromNow: time.minutesFromNow,
  nanoid: nanoid,
  secureRandomNumber: secureRandomNumber,
});

export const tokenGen = buildTokenGen({
  hash,
  nanoid,
  daysFromNow: time.daysFromNow,
});

export { validatePhoneNumber } from "./utils";
// init secret

export const initSecret = buildInitSecret({
  findSecretKeys,
  exportJWK,
  generateKey: generateKeyPair,
  insertSecretKeys,
});

// network

export { fetchCreateUser, fetchSendOtpBySms } from "./network";
