import { types } from "aba-node";
import { getTestDataById } from "../controllers";
import { controllerTypes } from "../types";
export async function retrieveTestDataById(
  request: controllerTypes.tGetTestDataById,
  reply: types.tReply
) {
  try {
    const response = await getTestDataById(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
