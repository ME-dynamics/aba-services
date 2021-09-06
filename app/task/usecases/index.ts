import { findTaskById, findTasksByUserId, insertTask } from "../adapters";

import { buildCreateTask } from "./createTask";
import { buildRetrieveTasksByUserId } from "./retrieveTasksByUserId";
import { buildRetrieveTaskById } from "./retrieveTaskById";
import { buildTaskDone } from "./taskDone";
import { buildTaskUndone } from "./taskUndone";
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

export const removeTask = buildRemoveTask({ findTaskById, insertTask });
