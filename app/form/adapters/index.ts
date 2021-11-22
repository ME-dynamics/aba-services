import { scyllaClient } from "aba-node";
import { applicationVersion } from "../config";
import {
  buildInitDb,
  buildInsertFormData,
  buildFindFormDataByUserId,
} from "./db";
import { rowToFormData } from "./utils";

const dbClient = scyllaClient({
  applicationName: "",
  applicationVersion,
  contactPoints: ["127.0.1.1"],
  errorPath: "form, adapters",
  id: undefined,
  keyspace: "form",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });
// export const insertFormStructure = buildInsertFormStructure({
//   insert: dbClient.insert,
// });
export const insertFormData = buildInsertFormData({ insert: dbClient.insert });
export const findFormDataByUserId = buildFindFormDataByUserId({
  select: dbClient.select,
  rowToFormData,
});
