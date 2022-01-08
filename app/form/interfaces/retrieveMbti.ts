import { types } from "aba-node";
import { getMBTI } from "../controllers";
import { controllerTypes } from "../types";
export function retrieveMBTI(
  request: controllerTypes.tGetMBTI,
  reply: types.tReply
) {
  try {
    const response = getMBTI(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
