import { auth, types, httpResult } from "aba-node";
import { createTask } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostCreateTask(
  args: controllerTypes.IBuildPostCreateTask
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
  return async function postCreateTask(
    httpRequest: controllerTypes.tPostCreateTask
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { content, userId } = httpRequest.body;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      const userProviderId = await fetchCustomerProvider(userId);
      if (!userProviderId) {
        return forbidden({ error: "user must have a provider" });
      }
      return await createTask({ content, userId, providerId: userProviderId });
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
      return await createTask({ content, userId, providerId: userProviderId });
    }
    const userProviderId = await fetchCustomerProvider(payload.userId);
    if (!userProviderId) {
      return forbidden({ error: "user must have a provider" });
    }
    return await createTask({
      content,
      userId: payload.userId,
      providerId: userProviderId,
    });
  };
}
