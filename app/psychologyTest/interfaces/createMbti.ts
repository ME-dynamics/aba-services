import { types } from "aba-node";
import { postCreateMbti } from "../controllers";
import { controllerTypes } from "../types";
export async function createMbti(
  request: controllerTypes.tPostCreateMbti,
  reply: types.tReply
) {
  try {
    const response = await postCreateMbti(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    console.log(error);
    reply.send("unknown error");
  }
}
