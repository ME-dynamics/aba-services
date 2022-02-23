import { types, auth, httpResult } from "aba-node";
import { createNote } from "../usecases";
import { controllerTypes } from "../types";

export function buildPostCreateNote(
  args: controllerTypes.IBuildPostCreateNote
) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { forbidden } = httpResult.clientError;
  return async function postCreateNote(
    httpRequest: controllerTypes.tPostCreateNote
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { title, content, imageIds, customerId } = httpRequest.body;
    const { userId } = payload;
    const providerId = await fetchCustomerProvider(customerId);
    if (!providerId || providerId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    return await createNote({
      providerId: userId,
      customerId,
      title,
      content,
      imageIds,
    });
  };
}
