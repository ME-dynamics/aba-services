import { types } from "aba-node";
import { getTestHistory } from "../controllers";
import { controllerTypes } from "../types";
export async function retrieveTestHistory(
  request: controllerTypes.tGetTestsData,
  reply: types.tReply
) {
  try {
    const response = await getTestHistory(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
