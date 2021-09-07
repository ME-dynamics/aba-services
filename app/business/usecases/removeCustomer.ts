import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeStaffCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveCustomer(args: usecaseTypes.IBuildRemoveCustomer) {
  const { findCustomer, insertStaffCustomer } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function removeCustomer(info: usecaseTypes.IRemoveCustomer) {
    // staff from token, customer in params
    const { customerId, staffId } = info;
    const customerFound = await findCustomer(customerId);
    // check if customer exists
    if (!customerFound) {
      return notFound({ error: "customer not found" });
    }
    // AUTHORIZE: check if customer belong to staff
    if (customerFound.staffId !== staffId) {
      return forbidden({ error: "action not allowed" });
    }
    const customer = makeStaffCustomer(customerFound);
    customer.set.remove();
    await insertStaffCustomer(customer.object());
    return ok<string>({
      payload: "customer removed",
    });
  };
}
