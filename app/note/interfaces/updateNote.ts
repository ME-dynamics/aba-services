import { types } from "aba-node";
import { putUpdateNote } from "../controllers";
import { controllerTypes } from "../types";


export async function updateNote(
    request: controllerTypes.tPutUpdateNote,
    reply: types.tReply
  ) {
    try {
      const response = await putUpdateNote(request);
      reply.code(response.code);
      reply.send(response);
    } catch (error) {
      reply.code(500);
      reply.send(error);
    }
  }