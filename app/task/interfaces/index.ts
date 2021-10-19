import { types, routeGen } from "aba-node";
import { createTask } from "./createTask";
import { retrieveUserTasks } from "./retrieveUserTasks";
import { taskDone } from "./taskDone";
import { taskUndone } from "./taskUndone";
import { removeTask } from "./removeTask";
import { sCreateTask } from "../schemas";
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
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", "done"],
    }),
    taskDone
  );
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", "undone"],
    }),
    taskUndone
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", ":userId"],
    }),
    retrieveUserTasks
  );
  app.delete(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["tasks", ":taskId", ":userId"],
    }),
    removeTask
  );
}
