import { types, buildRouteGenerator } from "aba-node";
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
  const routeGen = buildRouteGenerator({
    service: "tasks",
    version: applicationVersion,
  });
  app.post(routeGen(["tasks"]), { schema: sCreateTask }, createTask);
  app.patch(routeGen(["tasks", "done"]), { schema: sTaskDone }, taskDone);
  app.patch(routeGen(["tasks", "undone"]), { schema: sTaskUndone }, taskUndone);
  app.patch(routeGen(["tasks"]), { schema: sUpdateTask }, updateTask);
  app.get(
    routeGen(["tasks", ":userId"]),
    { schema: sRetrieveUserTasks },
    retrieveUserTasks
  );
  app.delete(
    routeGen(["tasks", ":taskId", ":userId"]),
    { schema: sRemoveTask },
    removeTask
  );
}
