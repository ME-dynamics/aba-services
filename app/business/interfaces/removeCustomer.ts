import { deleteRemoveCustomer } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function removeCustomer(
  request: controllerTypes.tDeleteRemoveCustomer,
  reply: types.tReply
) {
  try {
    const response = await deleteRemoveCustomer(request);
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.status(error.code);
    reply.send(error);
  }
}
