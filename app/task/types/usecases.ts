// create task

import { tFindTaskById, tFindTasksByUserId, tInsertTaskFunc } from "./adapters";

export interface IBuildCreateTask {
  insertTask: tInsertTaskFunc;
}

export interface ICreateTask {
  userId: string;
  content: string;
}


// retrieve tasks by user id


export interface IBuildRetrieveTasksByUserId {
    findTasksByUserId: tFindTasksByUserId
}

// retrieve task by id

export interface IBuildRetrieveTaskById {
  findTaskById: tFindTaskById
}

// task done

export interface IBuildTaskDone {
  findTaskById: tFindTaskById
  insertTask: tInsertTaskFunc;
}

// task undone
export interface IBuildTaskUndone {
  findTaskById: tFindTaskById
  insertTask: tInsertTaskFunc;
}

// remove task

export interface IBuildRemoveTask {
  findTaskById: tFindTaskById
  insertTask: tInsertTaskFunc;
}