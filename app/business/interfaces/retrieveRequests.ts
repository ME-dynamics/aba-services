import { getRequests } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveRequests(request: controllerTypes.tGetRequests, reply: types.tReply) {
  try {
    const response = await getRequests(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
