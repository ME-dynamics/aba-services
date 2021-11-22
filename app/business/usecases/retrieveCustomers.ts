import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveCustomers(
  args: usecaseTypes.IBuildRetrieveCustomers
) {
  const { findCustomersByProviderId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveCustomers(providerId: string) {
    const customersFound = await findCustomersByProviderId(providerId);
    if (!customersFound) {
      return notFound({ error: "no customer found" });
    }
    return ok<entityTypes.IMadeCustomersObject[]>({
      payload: customersFound,
    });
  };
}
