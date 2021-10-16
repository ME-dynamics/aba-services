import { auth, types } from "aba-node";
import { retrieveRequests } from "../usecases";
import { controllerTypes } from "../types"
export function buildGetRetrieveRequests() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function getRetrieveRequests(httpRequest: controllerTypes.tGetRequests) {
    const { success, error, payload } = auth(httpRequest, roles);
    if(!success) {
      return error;
    }
    const { userId } = payload;
    return await retrieveRequests(userId);
  };
}
