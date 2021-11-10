import { types } from "aba-node";
import { patchTaskDone } from "../controllers";
import { controllerTypes } from "../types";

export async function taskDone(
  request: controllerTypes.tPatchTaskDone,
  reply: types.tReply
) {
  try {
    const response = await patchTaskDone(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
