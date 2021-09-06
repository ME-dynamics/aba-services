import { types } from "aba-node";
import { postCreateUser } from "../controllers";
import { controllerTypes  } from "../types";
export async function createUser(request: controllerTypes.tPostCreateUser, reply: types.tReply) {
  try {
    const response = await postCreateUser(request);
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.send(500);
    reply.send(error);
  }
}
