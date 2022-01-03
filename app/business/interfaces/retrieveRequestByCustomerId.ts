import { getRequestByCustomerId } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveRequestByCustomerId(
  request: controllerTypes.tGetRequestByCustomerId,
  reply: types.tReply
) {
  try {
    const response = await getRequestByCustomerId(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    return error;
  }
}
