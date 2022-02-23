import { deleteProvider } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";

export async function removeProvider(
  request: controllerTypes.tDeleteProvider,
  reply: types.tReply
) {
  try {
    const response = await deleteProvider(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
