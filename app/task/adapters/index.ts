import { scyllaClient } from "aba-node";
import {
  buildFindTaskById,
  buildFindTasksByUserId,
  buildInitDb,
  buildInsertTask,
} from "./db";
import { rowToTask } from "./utils";

const dbClient = scyllaClient({
  id: undefined,
  applicationName: "tasks",
  applicationVersion: "v1",
  contactPoints: ["127.0.1.1"],
  errorPath: "tasks, adapters, db client",
  keyspace: "tasks",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });
export const findTasksByUserId = buildFindTasksByUserId({
  select: dbClient.select,
  rowToTask,
});
export const findTaskById = buildFindTaskById({
  select: dbClient.select,
  rowToTask,
});
export const insertTask = buildInsertTask({ insert: dbClient.insert });

// network
export { findUserProvider } from "./network";
