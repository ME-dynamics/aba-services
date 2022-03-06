import { auth, types, httpResult } from "aba-node";
// TODO: inject this method
import { fetchCustomerProvider } from "../adapters";
import { retrieveTestDataById } from "../usecases";

import { controllerTypes } from "../types";

export function buildGetTestData() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResult.clientError;
  return async function getTestData(
    httpRequest: controllerTypes.tGetTestDataById
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { id, userId } = httpRequest.params;
    const { role } = payload;
    if (role === "admin") {
      if (!userId) {
        return badRequest({ error: "user id should be defined" });
      }
      return await retrieveTestDataById({ testId: id, userId });
    }
    if (role === "provider") {
      if (!userId) {
        return await retrieveTestDataById({ testId: id, userId: payload.userId });
      }
      const providerId = await fetchCustomerProvider(userId);
      if (payload.userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrieveTestDataById({ testId: id, userId });
    }
    return await retrieveTestDataById({ testId: id, userId: payload.userId });
  };
}
