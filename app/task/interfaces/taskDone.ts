import { types } from "aba-node";
import { postTaskDone } from "../controllers";
import { controllerTypes } from "../types";

export async function taskDone(
  request: controllerTypes.tPostTaskDone,
  reply: types.tReply
) {
  try {
    const response = await postTaskDone(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
