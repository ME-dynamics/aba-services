import { auth, types } from "aba-node";
import { controllerTypes } from "../types";
import { confirmRequest } from "../usecases";
export function buildPostConfirmRequest() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function postConfirmRequest(
    httpRequest: controllerTypes.tPostConfirmRequest
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { userId } = payload;
    const { customerId } = httpRequest.body;

    return await confirmRequest({
      customerId,
      providerId: userId,
    });
  };
}
