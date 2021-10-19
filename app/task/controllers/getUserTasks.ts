import { auth, types, httpResultClientError } from "aba-node";
import { retrieveTasksByUserId } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetUserTasks(args: controllerTypes.IBuildGetUserTasks) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
  return async function getUserTasks(
    httpRequest: controllerTypes.tGetUserTasks
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }

    const { userId } = httpRequest.params;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      return await retrieveTasksByUserId(userId);
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
      return await retrieveTasksByUserId(userId);
    }
    return await retrieveTasksByUserId(payload.userId);
  };
}
