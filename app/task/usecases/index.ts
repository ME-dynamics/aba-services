import { findTaskById, findTasksByUserId, insertTask, deleteTask } from "../adapters";

import { buildCreateTask } from "./createTask";
import { buildRetrieveTasksByUserId } from "./retrieveTasksByUserId";
import { buildRetrieveTaskById } from "./retrieveTaskById";
import { buildTaskDone } from "./taskDone";
import { buildTaskUndone } from "./taskUndone";
import { buildUpdateTask } from "./updateTask";
import { buildRemoveTask } from "./removeTask";

export const createTask = buildCreateTask({
  insertTask,
});

export const retrieveTasksByUserId = buildRetrieveTasksByUserId({
  findTasksByUserId,
});

export const retrieveTaskById = buildRetrieveTaskById({ findTaskById });

export const taskDone = buildTaskDone({ findTaskById, insertTask });
export const taskUndone = buildTaskUndone({ findTaskById, insertTask });
export const updateTask = buildUpdateTask({ findTaskById, insertTask });

export const removeTask = buildRemoveTask({ findTaskById, deleteTask });
