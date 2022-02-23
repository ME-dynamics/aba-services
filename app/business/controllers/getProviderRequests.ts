import { auth, types } from "aba-node";
import { retrieveProviderRequests } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetProviderRequests() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function getProviderRequests(
    httpRequest: controllerTypes.tGetRequests
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    const { userId } = payload;
    if (!success) {
      return error;
    }
    return await retrieveProviderRequests(userId);
  };
}
