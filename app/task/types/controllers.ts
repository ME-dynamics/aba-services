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

export interface IBuildPostTaskDone {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IPostTaskDone {
  Body: {
    taskId: string;
    userId: string | undefined;
  };
}

export type tPostTaskDone = types.tRequest<IPostTaskDone>;

export interface IBuildPostTaskUndone {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IPostTaskUndone {
  Body: {
    taskId: string;
    userId: string;
  };
}
export type tPostTaskUndone = types.tRequest<IPostTaskUndone>;

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
