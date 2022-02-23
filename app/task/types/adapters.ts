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

export interface IFindTasksByUserId {
  userId: string;
  providerId: string;
}

export type tFindTasksByUserId = (
  info: IFindTasksByUserId
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

export type tFetchCustomerProviderFunc = (
  customerId: string
) => Promise<string | undefined>;

// delete task
export interface IBuildDeleteTask {
  remove: types.tDbDeleteFunc;
  insert: types.tDbUpsertFunc;
}

export interface IDeleteTask {
  userId: string;
  providerId: string;
  createdAt: Date;
}

export type tDeleteTaskFunc = (info: IDeleteTask) => Promise<void>;
