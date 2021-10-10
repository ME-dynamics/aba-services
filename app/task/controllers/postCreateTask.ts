import { auth, types, httpResultClientError } from "aba-node";
import { createTask } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostCreateTask(args: controllerTypes.IBuildPostCreateTask) {
  const { findUserProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    accountant: false,
    admin: true,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
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
    }
    if (role === "provider") {
      const providerId = payload.userId;
      if (!userId) {
        return badRequest({ error: "user id must be defined" });
      }
      const userProviderId = await findUserProvider(userId);
      if (!userProviderId || userProviderId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await createTask({ content, userId });
    }
    return await createTask({ content, userId: payload.userId });
  };
}
