import { types } from "aba-node";
import { getRetrieveUser } from "../controllers";
import { controllerTypes  } from "../types";
export async function retrieveUser(request: controllerTypes.tGetRetrieveUser, reply: types.tReply) {
  try {
    const response = await getRetrieveUser(request);
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.send(500);
    reply.send(error);
  }
}
