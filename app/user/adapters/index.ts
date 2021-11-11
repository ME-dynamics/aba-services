import { scyllaClient } from "aba-node";
import {
  scyllaContactPoint,
  applicationName,
  applicationVersion,
} from "../config";

import {
  buildInitDb,
  buildFindUserById,
  buildFindUserByPhoneNumber,
  buildInsertUser,
  buildFindPatientByUserId,
  buildInsertPatient,
  buildFindProviders,
} from "./db";
import { rowToUser, rowToPatient } from "./utils";

const dbClient = scyllaClient({
  applicationName,
  applicationVersion,
  id: undefined,
  contactPoints: [scyllaContactPoint],
  errorPath: "user service, adapters",
  keyspace: "user",
  localDataCenter: "datacenter1",
});
// db
export const initDb = buildInitDb({ init: dbClient.init });

export const findUserById = buildFindUserById({
  select: dbClient.select,
  rowToUser,
});
export const findUserByPhoneNumber = buildFindUserByPhoneNumber({
  select: dbClient.select,
  rowToUser,
});
export const findPatientByUserId = buildFindPatientByUserId({
  select: dbClient.select,
  rowToPatient,
});
export const findProviders = buildFindProviders({
  select: dbClient.select,
  rowToUser,
});
export const insertUser = buildInsertUser({ insert: dbClient.insert });
export const insertPatient = buildInsertPatient({ insert: dbClient.insert });
export { parseStoragePublicUrl } from "./utils";

// network

export { fetchCustomerProvider, fetchImageInfo } from "./network";
