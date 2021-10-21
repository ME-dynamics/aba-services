import { getRetrieveRequests } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveRequests(request: controllerTypes.tGetRequests, reply: types.tReply) {
  try {
    const response = await getRetrieveRequests(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
