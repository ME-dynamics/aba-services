import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeTask } from "../entities";
import { usecaseTypes } from "../types";

export function buildTaskUndone(args: usecaseTypes.IBuildTaskUndone) {
  const { findTaskById, insertTask } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function taskUndone(info: usecaseTypes.ITaskUndone) {
    const { taskId, userId } = info;
    const taskFound = await findTaskById(taskId);
    if (!taskFound || taskFound.softDeleted) {
      return notFound({ error: "task not found" });
    }
    if (taskFound.userId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    const task = makeTask(taskFound);
    task.set.undone();
    await insertTask(task.object());
    return ok<string>({
      payload: "task is marked as undone",
    });
  };
}
