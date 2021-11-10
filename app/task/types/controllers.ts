import { types } from "aba-node";
import { tFetchCustomerProviderFunc } from "./adapters";

export interface IBuildPostCreateTask {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IPostCreateTask {
  Body: {
    userId: string | undefined;
    content: string;
  };
}

export type tPostCreateTask = types.tRequest<IPostCreateTask>;

export interface IBuildGetUserTasks {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IGetUserTasks {
  Params: {
    userId: string | undefined;
  };
}

export type tGetUserTasks = types.tRequest<IGetUserTasks>;

export interface IBuildPatchTaskDone {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IPatchTaskDone {
  Body: {
    taskId: string;
    userId: string | undefined;
  };
}

export type tPatchTaskDone = types.tRequest<IPatchTaskDone>;

export interface IBuildPatchTaskUndone {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IPatchTaskUndone {
  Body: {
    taskId: string;
    userId: string | undefined;
  };
}
export type tPatchTaskUndone = types.tRequest<IPatchTaskUndone>;

export interface IBuildPatchUpdateTask {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}

interface IPatchUpdateTask {
  Body: {
    taskId: string;
    content: string;
    userId: string | undefined;
  };
}

export type tPatchUpdateTask = types.tRequest<IPatchUpdateTask>;
export interface IBuildRemoveTask {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IRemoveTask {
  Params: {
    taskId: string;
    userId: string | undefined;
  };
}

export type tDeleteTask = types.tRequest<IRemoveTask>;
