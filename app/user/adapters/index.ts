import { scyllaClient } from "aba-node";
import { scyllaContactPoint, applicationName, applicationVersion } from "../config";

import { buildInitDb, buildFindUserById, buildFindUserByPhoneNumber, buildInsertUser } from "./db";
import { rowToUser } from "./utils"

const dbClient = scyllaClient({
  applicationName,
  applicationVersion,
  id: undefined,
  contactPoints: [scyllaContactPoint],
  errorPath: "user service, adapters",
  keyspace: "user",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });


export const findUserById = buildFindUserById({select: dbClient.select, rowToUser})
export const findUserByPhoneNumber = buildFindUserByPhoneNumber({select: dbClient.select, rowToUser});
export const insertUser = buildInsertUser({insert: dbClient.insert});