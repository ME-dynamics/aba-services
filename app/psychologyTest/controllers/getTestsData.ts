import { auth, types, httpResult } from "aba-node";
// TODO: inject this method
import { fetchCustomerProvider } from "../adapters";
import { retrieveTestsData } from "../usecases";

import { controllerTypes } from "../types";

export function buildGetTestsData() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResult.clientError;
  return async function getTestsData(httpRequest: controllerTypes.tGetTestsData) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const id = httpRequest.params.userId;
    const { role, userId } = payload;
    if (role === "admin") {
      if (!id) {
        return badRequest({ error: "id should be defined" });
      }
      return await retrieveTestsData(id);
    }
    if (role === "provider") {
      if (!id) {
        return badRequest({ error: "id should be defined" });
      }
      const providerId = await fetchCustomerProvider(id);
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveTestsData(id);
    }
    return await retrieveTestsData(userId);
  };
}
