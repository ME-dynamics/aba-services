import { types } from "aba-node";
import { getBeckAnxiety } from "../controllers";
import { controllerTypes } from "../types";
export function retrieveBeckAnxiety(
  request: controllerTypes.tGetBeckAnxiety,
  reply: types.tReply
) {
  try {
    const response = getBeckAnxiety(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
