import { getRetrieveRequests } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveRequests(request: any, reply: types.tReply) {
  try {
    const response = await getRetrieveRequests();
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.status(error.code);
    reply.send(error);
  }
}
