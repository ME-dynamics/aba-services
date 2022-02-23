import { auth, types, httpResult } from "aba-node";

import { updateUser } from "../usecases";

import { controllerTypes } from "../types";

export function buildPutUpdateUser(args: controllerTypes.IBuildPutUpdateUser) {
  const { parseStoragePublicUrl, fetchImageInfo } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResult.clientError;
  return async function putUpdateUser(
    httpRequest: controllerTypes.tPutUpdateUser
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { id } = httpRequest.params;
    const userInfo = httpRequest.body;
    const { role, userId } = payload;
    if (role === "admin") {
      if (!id) {
        return badRequest({ error: "id must be defined" });
      }
      return await updateUser(id, userInfo);
    }
    const profileUrl = userInfo.profilePictureUrl;
    if (profileUrl) {
      const { id, valid } = parseStoragePublicUrl(profileUrl);
      if (!valid) {
        return forbidden({ error: "profile url is not valid" });
      }
      const imageOwnerId = await fetchImageInfo(id);
      if (!imageOwnerId) {
        return forbidden({ error: "profile url is not valid" });
      }
      if (imageOwnerId !== userId) {
        return forbidden({ error: "profile url is not valid" });
      }
    }
    return await updateUser(userId, userInfo);
  };
}
