import { types } from "aba-node";
import { getTestsData } from "../controllers";
import { controllerTypes } from "../types";
export async function retrieveTestsData(
  request: controllerTypes.tGetTestsData,
  reply: types.tReply
) {
  try {
    const response = await getTestsData(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
