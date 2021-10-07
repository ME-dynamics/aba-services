import { types } from "aba-node";
import { getPrivateImage } from "../controllers";
import { controllerTypes } from "../types";

export async function retrievePrivateImage(
  request: controllerTypes.tGetPrivateImage,
  reply: types.tReply
) {
  try {
    const response = await getPrivateImage(request);
    reply.status(response.code);
    return response;
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
