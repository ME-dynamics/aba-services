import { auth, types, httpResult } from "aba-node";
import { retrieveUserNotes } from "../usecases";
import { controllerTypes } from "../types";

export function buildGetCustomerNotes(
  args: controllerTypes.IBuildGetCustomerNotes
) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { forbidden } = httpResult.clientError;
  return async function getCustomerNotes(
    httpRequest: controllerTypes.tGetCustomerNotes
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }

    const { userId } = payload;
    const { id } = httpRequest.params;
    const providerId = await fetchCustomerProvider(id);
    if (!providerId || providerId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    return await retrieveUserNotes({ providerId: userId, customerId: id });
  };
}
