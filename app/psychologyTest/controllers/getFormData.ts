import { auth, types, httpResultClientError } from "aba-node";
// TODO: inject this method
import { fetchCustomerProvider } from "../adapters";
import { retrieveFormData } from "../usecases";

import { controllerTypes } from "../types";

export function buildGetFormData() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
  return async function getFormData(httpRequest: controllerTypes.tGetFormData) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const id = httpRequest.params.id;
    const { role, userId } = payload;
    if (role === "admin") {
      if (!id) {
        return badRequest({ error: "id should be defined" });
      }
      return await retrieveFormData(id);
    }
    if (role === "provider") {
      if (!id) {
        return badRequest({ error: "id should be defined" });
      }
      const providerId = await fetchCustomerProvider(id);
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveFormData(id);
    }
    return await retrieveFormData(userId);
  };
}
