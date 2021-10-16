import { auth, types } from "aba-node";
import { createRequest } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostCreateRequest() {
  const roles: types.IRoles = {
    customer: true,
    provider: false,
    accountant: false,
    admin: false,
    assistant: false,
    support: false,
  };
  return async function postCreateRequest(
    httpRequest: controllerTypes.tPostCreateRequest
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { userId } = payload;
    const { providerId } = httpRequest.body;
    return await createRequest({
      providerId,
      customerId: userId,
    });
  };
}
