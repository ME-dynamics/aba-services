import { auth, types, httpResultClientError } from "aba-node"
import { controllerTypes } from "../types";
import { confirmRequest, retrieveCustomerProvider } from "../usecases";
export function buildPostConfirmRequest() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  }
  const { forbidden } = httpResultClientError
  return async function postConfirmRequest(
    httpRequest: controllerTypes.tPostConfirmRequest
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if(!success) {
      return error;
    }
    const { userId } = payload;
    const { customerId } = httpRequest.body;
    const providerId = await retrieveCustomerProvider(customerId);
    if(!providerId || providerId !== userId) {
      return forbidden({error: "action not allowed"})
    }
    return await confirmRequest({
      customerId,
      providerId: userId,
    });
  };
}
