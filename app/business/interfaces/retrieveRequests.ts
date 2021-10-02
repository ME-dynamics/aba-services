import { getRetrieveRequests } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveRequests(request: any, reply: types.tReply) {
  try {
    const response = await getRetrieveRequests();
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
