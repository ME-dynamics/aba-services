import { scyllaClient } from "aba-node";
import { scyllaContactPoint } from "../config"
import {
  buildFindTaskById,
  buildFindTasksByUserId,
  buildInitDb,
  buildInsertTask,
  buildDeleteTask,
} from "./db";
import { rowToTask } from "./utils";

const dbClient = scyllaClient({
  id: undefined,
  applicationName: "task",
  applicationVersion: "v1",
  contactPoints: [scyllaContactPoint],
  errorPath: "task, adapters, db client",
  keyspace: "task",
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

export const deleteTask = buildDeleteTask({
  insert: dbClient.insert,
  remove: dbClient.delete,
});
// network
export { fetchCustomerProvider } from "./network";
