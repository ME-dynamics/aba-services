import { auth, types, httpResult } from "aba-node";
// TODO: inject this method
import { fetchCustomerProvider } from "../adapters";
import { retrieveTestHistory } from "../usecases";

import { controllerTypes } from "../types";

export function buildGetTestHistory() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResult.clientError;
  return async function getTestHistory(
    httpRequest: controllerTypes.tGetTestsData
  ) {
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
      return await retrieveTestHistory(id);
    }
    if (role === "provider") {
      if (!id) {
        return badRequest({ error: "id should be defined" });
      }
      const providerId = await fetchCustomerProvider(id);
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveTestHistory(id);
    }
    return await retrieveTestHistory(userId);
  };
}
