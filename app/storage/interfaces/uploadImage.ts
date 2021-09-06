import { types } from "aba-node";
import { postUploadImage } from "../controllers";
import { controllerTypes } from "../types";

export async function uploadImage(
  request: controllerTypes.tPostUploadImage,
  reply: types.tReply
) {
  try {
    const response = await postUploadImage(request);
    reply.status(response.code);
    reply.send(response);
  } catch (error) {
    reply.status(500);
    reply.send(error);
  }
}
