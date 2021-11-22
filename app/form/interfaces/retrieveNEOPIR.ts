import { types } from "aba-node";
import { getNEOPIR } from "../controllers";
import { controllerTypes } from "../types";
export function retrieveNEOPIR(request: controllerTypes.tGetNEOPIR, reply: types.tReply) {
  try {
    const response = getNEOPIR(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
