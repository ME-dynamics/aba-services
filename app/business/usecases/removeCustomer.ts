import { httpResult } from "aba-node";
import type { usecaseTypes } from "../types";

export function buildRemoveCustomer(args: usecaseTypes.IBuildRemoveCustomer) {
  const { findCustomer, deleteCustomer } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function removeCustomer(info: usecaseTypes.IRemoveCustomer) {
    // provider from token, customer in params
    const { customerId, providerId } = info;
    const customerFound = await findCustomer(customerId);
    // check if customer exists
    if (!customerFound) {
      return notFound({ error: "customer not found" });
    }
    // AUTHORIZE: check if customer belong to provider
    if (customerFound.providerId !== providerId) {
      return forbidden({ error: "action not allowed" });
    }

    await deleteCustomer({
      customerId: customerFound.customerId,
      providerId: customerFound.providerId,
      businessId: customerFound.businessId,
    });
    return ok<string>({
      payload: "customer removed",
    });
  };
}
