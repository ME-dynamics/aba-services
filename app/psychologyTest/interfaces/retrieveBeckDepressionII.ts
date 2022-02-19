import { types } from "aba-node";
import { getBeckDepressionII } from "../controllers";
import { controllerTypes } from "../types";
export function retrieveBeckDepressionII(
  request: controllerTypes.tGetBeckDepressionII,
  reply: types.tReply
) {
  try {
    const response = getBeckDepressionII(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
