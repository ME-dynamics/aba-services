import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeTask } from "../entities";
import { usecaseTypes } from "../types";

export function buildTaskDone(args: usecaseTypes.IBuildTaskDone) {
  const { findTaskById, insertTask } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function taskDone(id: string) {
    const taskFound = await findTaskById(id);
    if (!taskFound || taskFound.softDeleted) {
      return notFound({ error: "task not found" });
    }
    const task = makeTask(taskFound);
    task.set.done();
    await insertTask(task.object());
    return ok<string>({
      payload: "task is marked as done",
    });
  };
}
