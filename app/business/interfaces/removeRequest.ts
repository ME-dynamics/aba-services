import { deleteRemoveRequest } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function removeRequest(
  request: controllerTypes.tDeleteRequest,
  reply: types.tReply
) {
  try {
    const response = await deleteRemoveRequest(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
