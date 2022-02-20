import { auth, types, httpResult } from "aba-node";
import { taskDone } from "../usecases";
import { controllerTypes } from "../types";
export function buildPatchTaskDone(args: controllerTypes.IBuildPatchTaskDone) {
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
  return async function patchTaskDone(
    httpRequest: controllerTypes.tPatchTaskDone
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { taskId, userId } = httpRequest.body;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      return await taskDone({ taskId, userId });
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
      return await taskDone({ taskId, userId });
    }
    return await taskDone({ taskId, userId: payload.userId });
  };
}
