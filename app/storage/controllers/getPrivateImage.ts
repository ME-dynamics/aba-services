import { auth, types } from "aba-node";
import { retrievePrivateImage } from "../usecases";

import { controllerTypes } from "../types";

export function buildGetPrivateImage() {
  const roles: types.IRoles = {
    admin: true,
    provider: true,
    customer: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return async function getPrivateImage(
    httpRequest: controllerTypes.tGetPrivateImage
  ) {
    const { success, payload, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { imageId } = httpRequest.params;
    const { userId } = payload;
    return await retrievePrivateImage({ imageId, userId });
  };
}
