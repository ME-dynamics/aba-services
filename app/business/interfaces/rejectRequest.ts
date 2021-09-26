import { deleteRejectRequest } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function rejectRequest(
  request: controllerTypes.tDeleteRejectRequest,
  reply: types.tReply
) {
  try {
    const response = await deleteRejectRequest(request);
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
