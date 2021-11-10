import { types, routeGen } from "aba-node";
import { createTask } from "./createTask";
import { retrieveUserTasks } from "./retrieveUserTasks";
import { taskDone } from "./taskDone";
import { taskUndone } from "./taskUndone";
import { updateTask } from "./updateTask";
import { removeTask } from "./removeTask";
import {
  sCreateTask,
  sTaskDone,
  sTaskUndone,
  sRetrieveUserTasks,
  sRemoveTask,
  sUpdateTask,
} from "../schemas";
import { applicationVersion } from "../config";

export function startTaskServer(app: types.tHttpInstance) {
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks"],
    }),
    { schema: sCreateTask },
    createTask
  );
  app.patch(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", "done"],
    }),
    { schema: sTaskDone },
    taskDone
  );
  app.patch(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", "undone"],
    }),
    { schema: sTaskUndone },
    taskUndone
  );
  app.patch(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks"],
    }),
    { schema: sUpdateTask },
    updateTask
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", ":userId"],
    }),
    { schema: sRetrieveUserTasks },
    retrieveUserTasks
  );
  app.delete(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", ":taskId", ":userId"],
    }),
    { schema: sRemoveTask },
    removeTask
  );
}
