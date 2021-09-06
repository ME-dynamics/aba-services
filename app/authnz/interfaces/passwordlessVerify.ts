import { types } from "aba-node";
import { postPasswordlessVerify } from "../controllers";
import { tPostPasswordlessVerify } from "../types";
export async function passwordlessVerify(
  request: tPostPasswordlessVerify,
  reply: types.tReply
) {
  try {
    const response = await postPasswordlessVerify(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    // console.dir(error, {depth: null, colors: true})
    reply.send({ error });
  }
}
