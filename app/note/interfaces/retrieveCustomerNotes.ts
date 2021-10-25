import { types } from "aba-node";
import { getCustomerNotes } from "../controllers";
import { controllerTypes } from "../types";

export async function retrieveCustomerNotes(
  request: controllerTypes.tGetCustomerNotes,
  reply: types.tReply
) {
  try {
    const response = await getCustomerNotes(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
