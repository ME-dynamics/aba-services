import { auth, types } from "aba-node";
import { updateNote } from "../usecases";
import { controllerTypes } from "../types";

export function buildPutUpdateNote() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function putUpdateNote(
    httpRequest: controllerTypes.tPutUpdateNote
  ) {
    const { success, payload, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { userId } = payload;
    const { id, title, content, imageIds } = httpRequest.body;

    return await updateNote({
      providerId: userId,
      id,
      title,
      content,
      imageIds,
    });
  };
}
