import { scyllaClient } from "aba-node";

import {
  buildInitDb,
  buildInsertNotification,
  buildFindNotificationToken,
  buildInsertNotificationToken,
} from "./db";
import { rowToNotificationToken } from "./utils";

// TODO: move all this to config file
const dbClient = scyllaClient({
  id: undefined,
  applicationName: "notification",
  applicationVersion: "v1",
  keyspace: "notification",
  localDataCenter: "datacenter1",
  contactPoints: ["127.0.1.1"],
  errorPath: "notification, adapters",
});

export const initDb = buildInitDb({ init: dbClient.init });

export const insertNotification = buildInsertNotification({
  insert: dbClient.insert,
});
export const insertNotificationToken = buildInsertNotificationToken({
  insert: dbClient.insert,
});

export const findNotificationToken = buildFindNotificationToken({
  select: dbClient.select,
  rowToNotificationToken,
});

export * from "./network";
