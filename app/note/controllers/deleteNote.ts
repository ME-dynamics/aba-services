import { auth, types, httpResultClientError } from "aba-node";
import { removeNote } from "../usecases";
import { controllerTypes } from "../types";

export function buildDeleteNote(args: controllerTypes.IBuildDeleteNote) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { forbidden } = httpResultClientError;
  return async function deleteNote(httpRequest: controllerTypes.tDeleteNote) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }

    const { userId } = payload;
    const { noteId } = httpRequest.params;
    const providerId = await fetchCustomerProvider(noteId);
    if (!providerId || providerId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    return await removeNote({ providerId: userId, id: noteId });
  };
}
