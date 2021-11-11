import { types } from "aba-node";
import { putUpdateUser } from "../controllers";
import { controllerTypes } from "../types";

export async function updateUser(
  request: controllerTypes.tPutUpdateUser,
  reply: types.tReply
) {
  try {
    const response = await putUpdateUser(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
