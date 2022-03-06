import { types } from "aba-node";
import { getTests } from "../controllers";
import { controllerTypes } from "../types";
export function retrieveTests(
  request: controllerTypes.tGetTests,
  reply: types.tReply
) {
  try {
    const response = getTests(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
