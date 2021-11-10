import { types } from "aba-node";
import { patchTaskUndone } from "../controllers";
import { controllerTypes } from "../types";

export async function taskUndone(
  request: controllerTypes.tPatchTaskUndone,
  reply: types.tReply
) {
  try {
    const response = await patchTaskUndone(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
