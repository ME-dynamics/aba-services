import { types } from "aba-node";
import { postSubmitFormStruct } from "../controllers";
import { controllerTypes } from "../types";

export async function submitFormStruct(
  request: controllerTypes.tPostSubmitFormStruct,
  reply: types.tReply
) {
  try {
    const response = await postSubmitFormStruct(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
