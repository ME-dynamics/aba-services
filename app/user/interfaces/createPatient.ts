import { types } from "aba-node";
import { postCreatePatient } from "../controllers";
import { controllerTypes } from "../types";

export async function createPatient(
  request: controllerTypes.tPostCreatePatient,
  reply: types.tReply
) {
  try {
    const response = await postCreatePatient(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
