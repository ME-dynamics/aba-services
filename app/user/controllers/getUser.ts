import { auth, types, httpResultClientError } from "aba-node";
import { controllerTypes } from "../types";
import { retrieveUser } from "../usecases";

export function buildGetUser(args: controllerTypes.IBuildGetUser) {
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
  return async function getUser(httpRequest: controllerTypes.tGetUser) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { role, userId } = payload;
    const { id } = httpRequest.params;
    if (role === "admin") {
      if (!id) {
        return badRequest({ error: "id must be defined" });
      }
      return await retrieveUser(id);
    }
    if (role === "provider") {
      if (!id) {
        return badRequest({ error: "id must be defined" });
      }
      // AUTHORIZE
      // USER MUST BE provider customer
      const providerId = await fetchCustomerProvider(id);
      if (!providerId) {
        return forbidden({ error: "action not allowed" });
      }
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveUser(id);
    }
    return await retrieveUser(userId);
  };
}
