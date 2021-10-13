import { controllerTypes } from "../types";
import { removeCustomer } from "../usecases";

export function buildDeleteRemoveCustomer() {
  return async function deleteRemoveCustomer(
    httpRequest: controllerTypes.tDeleteRemoveCustomer
  ) {
    const { customerId } = httpRequest.params;
    return await removeCustomer({
      customerId,
      providerId: "b44b2952-800f-48d7-9ea3-7b8b52fdab9f",
    });
  };
}
