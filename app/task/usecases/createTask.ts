import { httpResult } from "aba-node";
import { makeTask } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateTask(args: usecaseTypes.IBuildCreateTask) {
  const { insertTask } = args;
  const { created } = httpResult.success;
  function taskInput(info: usecaseTypes.ICreateTask): entityTypes.IMakeTask {
    const { userId, providerId, content } = info;
    return {
      userId,
      providerId,
      id: undefined,
      content,
      done: false,
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  return async function createTask(info: usecaseTypes.ICreateTask) {
    const task = makeTask(taskInput(info));
    await insertTask(task.object());
    return created<entityTypes.IMadeTaskObject>({
      payload: task.object(),
    });
  };
}
