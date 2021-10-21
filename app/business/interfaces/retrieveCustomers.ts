import { getRetrieveCustomers } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveCustomers(
  request: controllerTypes.tGetCustomers,
  reply: types.tReply
) {
  try {
    const response = await getRetrieveCustomers(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
