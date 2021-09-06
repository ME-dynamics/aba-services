import { scyllaClient, secureRandomNumber, time } from "aba-node";
import { hash } from "argon2";
import { nanoid } from "nanoid";
import SignJwt from "jose/jwt/sign";
import generateKeyPair from "jose/util/generate_key_pair";
import fromKeyLike from "jose/jwk/from_key_like";
import parseKey from "jose/jwk/parse";
import {
  buildFindOtpByPhone,
  buildFindOtpByToken,
  buildFindPrivateKey,
  buildFindSecretKeys,
  buildFindToken,
  buildFindTokenByUserId,
  buildInitDb,
  buildInsertOtp,
  buildInsertSecretKeys,
  buildInsertToken,
  buildFindRole,
  buildInsertRole,
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
import { buildCreateUser, buildSendOtpBySms } from "./network";
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
  parseKey,
});
export const findSecretKeys = buildFindSecretKeys({
  select: dbClient.select,
  rowToKey,
});
export const findToken = buildFindToken({
  select: dbClient.select,
  rowToToken,
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

// utils
export const signJwt = buildSignJwt({
  Signer: SignJwt,
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
  minutesFromNow: time.minutesFromNow,
});
// init secret

export const initSecret = buildInitSecret({
  findSecretKeys,
  fromKeyLike,
  generateKey: generateKeyPair,
  insertSecretKeys,
});

// network

export const createUser = buildCreateUser();
export const sendOtpBySms = buildSendOtpBySms();

