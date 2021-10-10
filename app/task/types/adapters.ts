import { types } from "aba-node";
import { IMadeTaskObject } from "./entities";

// db
export interface IBuildInitDb {
  init: types.tDbInitFunc;
}

export interface IBuildFindTasksByUserId {
  select: types.tDbSelectFunc;
  rowToTask: tRowTask;
}
export type tFindTasksByUserId = (
  userId: string
) => Promise<IMadeTaskObject[] | undefined>;
export interface IBuildFindTaskById {
  select: types.tDbSelectFunc;
  rowToTask: tRowTask;
}
export type tFindTaskById = (
  id: string
) => Promise<IMadeTaskObject | undefined>;
export interface IBuildInsertTask {
  insert: types.tDbUpsertFunc;
}

export type tInsertTaskFunc = (task: IMadeTaskObject) => Promise<void>;
// utils

export type tRowTask = (row: types.tRow) => IMadeTaskObject;

// network

export type tFindUserProviderFunc = (
  customerId: string
) => Promise<string | undefined>;
