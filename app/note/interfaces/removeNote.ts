import { types } from "aba-node";
import { deleteRemoveNote } from "../controllers";
import { controllerTypes } from "../types";


export async function removeNote(
    request: controllerTypes.tDeleteRemoveNote,
    reply: types.tReply
  ) {
    try {
      const response = await deleteRemoveNote(request);
      reply.code(response.code);
      return response;
    } catch (error) {
      reply.code(500);
      reply.send(error);
    }
  }