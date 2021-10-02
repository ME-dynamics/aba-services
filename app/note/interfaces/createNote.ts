import { types } from "aba-node";
import { postCreateNote } from "../controllers";
import { controllerTypes } from "../types";

export async function createNote(
  request: controllerTypes.tPostCreateNote,
  reply: types.tReply
) {
  try {
    const response = await postCreateNote(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
