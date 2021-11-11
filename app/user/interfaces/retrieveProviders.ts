import { types } from "aba-node";
import { getProviders } from "../controllers";
import { controllerTypes } from "../types";

export async function retrieveProviders(
  request: controllerTypes.tGetProviders,
  reply: types.tReply
) {
  try {
    const response = await getProviders(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
