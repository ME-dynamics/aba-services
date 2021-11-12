import { getCustomerProviderInfo } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function retrieveCustomerProviderInfo(
  request: controllerTypes.tGetCustomerProviderInfo,
  reply: types.tReply
) {
  try {
    const response = await getCustomerProviderInfo(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
