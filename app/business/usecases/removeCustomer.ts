import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeProviderCustomer, makeCustomerProviderRequest } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveCustomer(args: usecaseTypes.IBuildRemoveCustomer) {
  const {
    findCustomer,
    findRequestByCustomerId,
    insertRequest,
    insertProviderCustomer,
  } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function removeCustomer(info: usecaseTypes.IRemoveCustomer) {
    // provider from token, customer in params
    const { customerId, providerId } = info;
    const [requestFound, customerFound] = await Promise.all([
      findRequestByCustomerId(customerId),
      findCustomer(customerId),
    ]);
    // check if customer exists
    if (!customerFound) {
      return notFound({ error: "customer not found" });
    }
    // AUTHORIZE: check if customer belong to provider
    if (customerFound.providerId !== providerId) {
      return forbidden({ error: "action not allowed" });
    }
    if (!requestFound) {
      return forbidden({ error: "action not allowed" });
    }
    const customer = makeProviderCustomer(customerFound);
    const request = makeCustomerProviderRequest(requestFound);
    customer.set.remove();
    request.set.remove();
    await Promise.all([
      insertProviderCustomer(customer.object()),
      insertRequest(request.object()),
    ]);
    return ok<string>({
      payload: "customer removed",
    });
  };
}
