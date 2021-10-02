import { types } from "aba-node";
import { getNEOPIR } from "../controllers";

export function retrieveNEOPIR(request: any, reply: types.tReply) {
  try {
    const response = getNEOPIR();
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
