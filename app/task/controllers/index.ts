import { fetchCustomerProvider } from "../adapters";

import { buildPostCreateTask } from "./postCreateTask";
import { buildGetUserTasks } from "./getUserTasks";
import { buildDeleteTask } from "./deleteTask";
import { buildPostTaskDone } from "./postTaskDone";
import { buildPostTaskUndone } from "./postTaskUndone";

export const postCreateTask = buildPostCreateTask({ fetchCustomerProvider });
export const postTaskDone = buildPostTaskDone({ fetchCustomerProvider });
export const postTaskUndone = buildPostTaskUndone({ fetchCustomerProvider });

export const getUserTasks = buildGetUserTasks({ fetchCustomerProvider });

export const deleteTask = buildDeleteTask({ fetchCustomerProvider });
