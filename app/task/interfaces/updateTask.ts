import { types } from "aba-node";
import { patchUpdateTask } from "../controllers";
import { controllerTypes } from "../types";

export async function updateTask(
  request: controllerTypes.tPatchUpdateTask,
  reply: types.tReply
) {
  try {
    const response = await patchUpdateTask(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
