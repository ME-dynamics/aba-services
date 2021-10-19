import { types } from "aba-node";
import { deleteTask } from "../controllers";
import { controllerTypes } from "../types";

export async function removeTask(
  request: controllerTypes.tDeleteTask,
  reply: types.tReply
) {
  try {
    const response = await deleteTask(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
