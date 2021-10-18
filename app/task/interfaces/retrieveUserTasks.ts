import { types } from "aba-node";
import { getUserTasks } from "../controllers";
import { controllerTypes } from "../types";

export async function retrieveUserTasks(
  request: controllerTypes.tGetUserTasks,
  reply: types.tReply
) {
  try {
    const response = await getUserTasks(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
