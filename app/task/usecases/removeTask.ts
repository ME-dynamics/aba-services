import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeTask } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveTask(args: usecaseTypes.IBuildRemoveTask) {
  const { findTaskById, insertTask } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function removeTask(id: string) {
    const taskFound = await findTaskById(id);
    if (!taskFound || taskFound.softDeleted) {
      return notFound({ error: "task not found" });
    }
    const task = makeTask(taskFound);
    task.set.remove();
    await insertTask(task.object());
    return ok<string>({
      payload: "task is removed",
    });
  };
}
