import { types } from "aba-node";
import { postRefresh } from "../controllers";
import { tPostRefresh } from "../types";
export async function refresh(request: tPostRefresh, reply: types.tReply) {
  try {
    const response = await postRefresh(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    // console.dir(error, {depth: null, colors: true})
    reply.send({ error });
  }
}
