import { auth, types } from "aba-node";
import { removeNote } from "../usecases";
import { controllerTypes } from "../types";

// args: controllerTypes.IBuildDeleteNote
export function buildDeleteNote() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function deleteNote(httpRequest: controllerTypes.tDeleteNote) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }

    const { userId } = payload;
    const { noteId } = httpRequest.params;

    return await removeNote({ providerId: userId, id: noteId });
  };
}
