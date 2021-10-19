import { types } from "aba-node";
import { postTaskUndone } from "../controllers";
import { controllerTypes } from "../types";

export async function taskUndone(
  request: controllerTypes.tPostTaskUndone,
  reply: types.tReply
) {
  try {
    const response = await postTaskUndone(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
