import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveCustomer(args: usecaseTypes.IBuildRemoveCustomer) {
  const { findCustomer, insertCustomer } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
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

    const customer = makeCustomer(customerFound);
    customer.set.remove();
    await insertCustomer(customer.object());
    return ok<string>({
      payload: "customer removed",
    });
  };
}
