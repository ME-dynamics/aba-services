import { types } from "aba-node";
import { postCreateTask } from "../controllers";
import { controllerTypes } from "../types";

export async function createTask(
  request: controllerTypes.tPostCreateTask,
  reply: types.tReply
) {
  try {
    const response = await postCreateTask(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
