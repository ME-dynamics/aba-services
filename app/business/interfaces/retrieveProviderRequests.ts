import { getProviderRequests } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveProviderRequests(
  request: controllerTypes.tGetRequests,
  reply: types.tReply
) {
  try {
    const response = await getProviderRequests(request);
    reply.status(response?.code || 200); // TODO fix this
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
