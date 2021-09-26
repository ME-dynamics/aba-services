import { postCreateRequest } from "../controllers";
import { types } from "aba-node";
import { controllerTypes } from "../types";
export async function createRequest(
  request: controllerTypes.tPostCreateRequest,
  reply: types.tReply
) {
  try {
    const response = await postCreateRequest(request);
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.status(500);
    console.dir(error, { depth: null, colors: true });
  }
}
