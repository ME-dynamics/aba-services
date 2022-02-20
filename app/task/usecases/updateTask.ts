import { httpResult } from "aba-node";
import { makeTask } from "../entities";
import { usecaseTypes } from "../types";

export function buildUpdateTask(args: usecaseTypes.IBuildUpdateTask) {
  const { findTaskById, insertTask } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function updateTask(info: usecaseTypes.IUpdateTask) {
    const { userId, taskId, content } = info;

    const taskFound = await findTaskById(taskId);
    if (!taskFound) {
      return notFound({ error: "task not found" });
    }
    if (taskFound.userId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    const task = makeTask(taskFound);
    task.set.content(content);
    await insertTask(task.object());
    return ok({
      payload: task.object(),
    });
  };
}
