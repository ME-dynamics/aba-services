import { types } from "aba-node";
import { postPasswordlessStart } from "../controllers";
import { controllerTypes } from "../types";
export async function passwordlessStart(
  request: controllerTypes.tPostPasswordlessStart,
  reply: types.tReply
) {
  try {
    const response = await postPasswordlessStart(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send({ error });
  }
}
