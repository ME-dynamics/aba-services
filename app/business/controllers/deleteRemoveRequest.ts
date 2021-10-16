import { types, auth, httpResultClientError } from "aba-node";
import { removeRequest, retrieveCustomerProvider } from "../usecases";
import { controllerTypes } from "../types";

export function buildDeleteRemoveRequest() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
  return async function deleteRemoveRequest(
    httpRequest: controllerTypes.tDeleteRequest
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { role, userId } = payload;
    const { customerId } = httpRequest.params;
    if (role === "provider") {
      if (!customerId) {
        return badRequest({ error: "customer id must be defined" });
      }
      const providerId = await retrieveCustomerProvider(customerId);
      if (!providerId) {
        return forbidden({ error: "action not allowed" });
      }
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await removeRequest(customerId);
    }

    return await removeRequest(userId);
  };
}
