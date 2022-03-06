import { types } from "aba-node";
import { getTestById } from "../controllers";
import { controllerTypes } from "../types";
export function retrieveTestById(
  request: controllerTypes.tGetTestById,
  reply: types.tReply
) {
  try {
    const response = getTestById(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
