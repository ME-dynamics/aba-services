import { types } from "aba-node";
import { tFindUserProviderFunc } from "./adapters";

export interface IBuildPostCreateTask {
  findUserProvider: tFindUserProviderFunc;
}
interface IPostCreateTask {
  Body: {
    userId: string | undefined;
    content: string;
  };
}

export type tPostCreateTask = types.tRequest<IPostCreateTask>;

export interface IBuildGetUserTasks {
  findUserProvider: tFindUserProviderFunc;
}
interface IGetUserTasks {
  Params: {
    userId: string | undefined;
  };
}

export type tGetUserTasks = types.tRequest<IGetUserTasks>;

export interface IBuildPostTaskDone {
  findUserProvider: tFindUserProviderFunc;
}
interface IPostTaskDone {
  Body: {
    taskId: string;
    userId: string | undefined;
  };
}

export type tPostTaskDone = types.tRequest<IPostTaskDone>;

export interface IBuildPostTaskUndone {
  findUserProvider: tFindUserProviderFunc;
}
interface IPostTaskUndone {
  Body: {
    taskId: string;
    userId: string;
  };
}
export type tPostTaskUndone = types.tRequest<IPostTaskUndone>;

export interface IBuildRemoveTask {
  findUserProvider: tFindUserProviderFunc;
}
interface IRemoveTask {
  Params: {
    taskId: string;
    userId: string | undefined;
  };
}

export type tDeleteTask = types.tRequest<IRemoveTask>;
