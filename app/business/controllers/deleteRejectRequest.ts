import { types, auth } from "aba-node"
import { controllerTypes } from "../types";
import { rejectRequest } from "../usecases";

export function buildDeleteRejectRequest() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  }
  return async function deleteRejectRequest(
    httpRequest: controllerTypes.tDeleteRejectRequest
  ) {
    const {success, error, payload} = auth(httpRequest, roles);
    if(!success) {
      return error;
    }
    const { userId } = payload;
    const { customerId } = httpRequest.params;
    return await rejectRequest({
      customerId,
      providerId: userId,
    });
  };
}
