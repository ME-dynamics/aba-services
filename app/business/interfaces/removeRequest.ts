import { deleteRemoveRequest } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function removeRequest(
  request: any,
  reply: types.tReply
) {
  try {
    const response = await deleteRemoveRequest();
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
