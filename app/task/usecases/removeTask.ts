import { httpResult } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRemoveTask(args: usecaseTypes.IBuildRemoveTask) {
  const { findTaskById, deleteTask } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function removeTask(info: usecaseTypes.IRemoveTask) {
    const { taskId, userId } = info;
    const taskFound = await findTaskById(taskId);
    if (!taskFound) {
      return notFound({ error: "task not found" });
    }
    if (taskFound.userId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    await deleteTask({
      userId: taskFound.userId,
      providerId: taskFound.providerId,
      createdAt: taskFound.createdAt,
    });
    return ok<string>({
      payload: "task is removed",
    });
  };
}
