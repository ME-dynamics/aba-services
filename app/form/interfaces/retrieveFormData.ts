import { types } from "aba-node";
import { getFormData } from "../controllers";
import { controllerTypes } from "../types";
export async function retrieveFormData(
  request: controllerTypes.tGetFormData,
  reply: types.tReply
) {
  try {
    const response = await getFormData(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    reply.send("unknown error");
  }
}
