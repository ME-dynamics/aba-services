import { auth, types } from "aba-node";
import { retrieveCustomerProviderInfo } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetCustomerProviderInfo() {
  const roles: types.IRoles = {
    customer: true,
    provider: false,
    accountant: false,
    admin: false,
    assistant: false,
    support: false,
  };
  return async function getCustomerProviderInfo(
    httpRequest: controllerTypes.tGetCustomerProviderInfo
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { userId } = payload;
    return await retrieveCustomerProviderInfo(userId);
  };
}
