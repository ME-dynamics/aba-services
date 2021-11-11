import { types } from "aba-node";
import { controllerTypes } from "../types";
import { getPatient } from "../controllers";

export async function retrievePatient(
  request: controllerTypes.tGetPatient,
  reply: types.tReply
) {
  try {
    const response = await getPatient(request);
    reply.code(response.code);
    return response;
  } catch (error) {
    reply.code(500);
    return error;
  }
}
