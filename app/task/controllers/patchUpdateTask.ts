import { auth, types, httpResult } from "aba-node";
import { updateTask } from "../usecases";
import { controllerTypes } from "../types";

export function buildPatchUpdateTask(
  args: controllerTypes.IBuildPatchUpdateTask
) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    accountant: false,
    admin: true,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResult.clientError;
  return async function patchUpdateTask(
    httpRequest: controllerTypes.tPatchUpdateTask
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { taskId, userId, content } = httpRequest.body;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      return await updateTask({ taskId, userId, content });
    }
    if (role === "provider") {
      const providerId = payload.userId;
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      const userProviderId = await fetchCustomerProvider(userId);
      if (!userProviderId || userProviderId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await updateTask({ taskId, userId, content });
    }
    return await updateTask({ taskId, userId: payload.userId, content });
  };
}
