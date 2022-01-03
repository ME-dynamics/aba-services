import { auth, types } from "aba-node";
import { retrieveRequestByCustomerId } from "../usecases";
import { controllerTypes } from "../types";

export function buildGetRequestByCustomerId() {
  const roles: types.IRoles = {
    customer: true,
    provider: false,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function getRequestByCustomerId(
    httpRequest: controllerTypes.tGetRequestByCustomerId
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { userId } = payload;
    return await retrieveRequestByCustomerId(userId);
  };
}
