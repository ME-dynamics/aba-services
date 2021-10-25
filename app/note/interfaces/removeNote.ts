import { types } from "aba-node";
import { deleteNote } from "../controllers";
import { controllerTypes } from "../types";


export async function removeNote(
    request: controllerTypes.tDeleteNote,
    reply: types.tReply
  ) {
    try {
      const response = await deleteNote(request);
      reply.code(response.code);
      return response;
    } catch (error) {
      reply.code(500);
      reply.send(error);
    }
  }