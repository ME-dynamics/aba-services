import { types } from "aba-node";
import { postCreateProvider } from "../controllers";
import { controllerTypes } from "../types";

export async function createProvider(
  request: controllerTypes.tPostCreateProvider,
  reply: types.tReply
) {
  try {
    const response = await postCreateProvider(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
