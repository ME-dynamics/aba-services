import { types } from "aba-node";
import { postPasswordlessStart } from "../controllers";
import { tPostPasswordlessStart } from "../types";
export async function passwordlessStart(
  request: tPostPasswordlessStart,
  reply: types.tReply
) {
  try {
    const response = await postPasswordlessStart(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send({ error });
  }
}
