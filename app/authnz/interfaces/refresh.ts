import { types } from "aba-node";
import { postRefresh } from "../controllers";
import { controllerTypes } from "../types";
export async function refresh(request: controllerTypes.tPostRefresh, reply: types.tReply) {
  try {
    const response = await postRefresh(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    // console.dir(error, {depth: null, colors: true})
    reply.send({ error });
  }
}
