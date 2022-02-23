import { types } from "aba-node";
import { getUser } from "../controllers";
import { controllerTypes } from "../types";
export async function retrieveUser(
  request: controllerTypes.tGetUser,
  reply: types.tReply
) {
  try {
    const response = await getUser(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
