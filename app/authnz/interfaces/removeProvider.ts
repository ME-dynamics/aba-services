import { types } from "aba-node";
import { deleteProvider } from "../controllers";
import { controllerTypes } from "../types";

export async function removeProvider(
  request: controllerTypes.tDeleteProvider,
  reply: types.tReply
) {
  try {
    const response = await deleteProvider(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
