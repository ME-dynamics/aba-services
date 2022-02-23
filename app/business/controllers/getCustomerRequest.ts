import { auth, types } from "aba-node";
import { retrieveCustomerRequest } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetCustomerRequest() {
  const roles: types.IRoles = {
    customer: true,
    provider: false,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function getCustomerRequest(
    httpRequest: controllerTypes.tGetRequests
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    const { userId } = payload;
    if (!success) {
      return error;
    }
    return await retrieveCustomerRequest(userId);
  };
}
