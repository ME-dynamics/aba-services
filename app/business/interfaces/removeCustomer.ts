import { deleteCustomer } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function removeCustomer(
  request: controllerTypes.tDeleteCustomer,
  reply: types.tReply
) {
  try {
    const response = await deleteCustomer(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
