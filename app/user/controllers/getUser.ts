import { auth, types, httpResult } from "aba-node";
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
  const { badRequest, forbidden } = httpResult.clientError;
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
    if (role === "provider" && id) {
      // if (!id) {
      //   return badRequest({ error: "id must be defined" });
      // }
      // AUTHORIZE
      // USER MUST BE provider customer
      const providerId = await fetchCustomerProvider(id);
      if (!providerId && userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveUser(id);
    }
    if (role === "customer" && id) {
      const user = await retrieveUser(id);
      if (user.payload?.role === "customer" || user.payload?.role === "admin") {
        return forbidden({ error: "action not allowed" });
      }
      return user;
    }
    return await retrieveUser(userId);
  };
}
