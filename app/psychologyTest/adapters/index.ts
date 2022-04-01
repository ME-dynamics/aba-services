import { scyllaClient } from "aba-node";
import { applicationVersion, scyllaContactPoint } from "../config";
import {
  buildInitDb,
  buildFindTestsDataByUserId,
  buildFindTestById,
  buildInsertTestData,
} from "./db";
import { rowToTestData } from "./utils";

const dbClient = scyllaClient({
  applicationName: "",
  applicationVersion,
  contactPoints: [scyllaContactPoint],
  errorPath: "psychology test, adapters",
  id: undefined,
  keyspace: "psychology_test",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });
// export const insertFormStructure = buildInsertFormStructure({
//   insert: dbClient.insert,
// });
export const insertTestData = buildInsertTestData({ insert: dbClient.insert });
export const findTestsDataByUserId = buildFindTestsDataByUserId({
  select: dbClient.select,
  rowToTestData,
});
export const findTestById = buildFindTestById({
  select: dbClient.select,
  rowToTestData,
});

export * from "./network";
