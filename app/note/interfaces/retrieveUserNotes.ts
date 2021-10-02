import { types } from "aba-node";
import { getRetrieveUserNotes } from "../controllers";
import { controllerTypes } from "../types";

export async function retrieveUserNotes(
  request: controllerTypes.tGetRetrieveUserNotes,
  reply: types.tReply
) {
  try {
    const response = await getRetrieveUserNotes(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
