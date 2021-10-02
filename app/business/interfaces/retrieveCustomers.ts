import { getRetrieveCustomers } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveCustomers(
  request: any,
  reply: types.tReply
) {
  try {
    const response = await getRetrieveCustomers();
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
