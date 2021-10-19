import { auth, types, httpResultClientError } from "aba-node";
import { removeTask } from "../usecases";
import { controllerTypes } from "../types";
export function buildDeleteTask(args: controllerTypes.IBuildRemoveTask) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    accountant: false,
    admin: true,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
  return async function deleteTask(httpRequest: controllerTypes.tDeleteTask) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { taskId, userId } = httpRequest.params;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      return await removeTask({ taskId, userId });
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
      return await removeTask({ taskId, userId });
    }
    return await removeTask({ taskId, userId: payload.userId });
  };
}
