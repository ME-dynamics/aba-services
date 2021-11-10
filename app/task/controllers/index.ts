import { fetchCustomerProvider } from "../adapters";

import { buildPostCreateTask } from "./postCreateTask";
import { buildGetUserTasks } from "./getUserTasks";
import { buildDeleteTask } from "./deleteTask";
import { buildPatchTaskDone } from "./patchTaskDone";
import { buildPatchTaskUndone } from "./patchTaskUndone";
import { buildPatchUpdateTask } from "./patchUpdateTask";
export const postCreateTask = buildPostCreateTask({ fetchCustomerProvider });
export const patchTaskDone = buildPatchTaskDone({ fetchCustomerProvider });
export const patchTaskUndone = buildPatchTaskUndone({ fetchCustomerProvider });
export const patchUpdateTask = buildPatchUpdateTask({ fetchCustomerProvider });
export const getUserTasks = buildGetUserTasks({ fetchCustomerProvider });

export const deleteTask = buildDeleteTask({ fetchCustomerProvider });
