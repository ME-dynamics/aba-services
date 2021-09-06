import { httpResultSuccess } from "aba-node";
import { makeTask } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateTask(args: usecaseTypes.IBuildCreateTask) {
  const { insertTask } = args;
  const { ok } = httpResultSuccess;
  function taskInput(info: usecaseTypes.ICreateTask): entityTypes.IMakeTask {
    const { userId, content } = info;
    return {
      userId,
      id: undefined,
      content,
      done: false,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function createTask(info: usecaseTypes.ICreateTask) {
    const task = makeTask(taskInput(info));
    await insertTask(task.object());
    return ok<entityTypes.IMadeTaskObject>({
      payload: task.object(),
    });
  };
}
