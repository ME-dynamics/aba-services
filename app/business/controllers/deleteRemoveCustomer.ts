import { types, auth } from "aba-node"
import { controllerTypes } from "../types";
import { removeCustomer } from "../usecases";

export function buildDeleteRemoveCustomer() {
  const roles: types.IRoles = {
    customer: false,
    provider: true,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  }
  return async function deleteRemoveCustomer(
    httpRequest: controllerTypes.tDeleteRemoveCustomer
  ) {
    const {success, error, payload} = auth(httpRequest, roles);
    if(!success) {
      return error;
    }
    const { userId } = payload;
    const { customerId } = httpRequest.params;
    return await removeCustomer({
      customerId,
      providerId: userId,
    });
  };
}
