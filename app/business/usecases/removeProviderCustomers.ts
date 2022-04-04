import { httpResult } from "aba-node";

import type { usecaseTypes } from "../types";

export function buildRemoveProviderCustomers(
  args: usecaseTypes.IBuildRemoveProviderCustomers
) {
  const {
    findCustomersByProviderId,
    findRequestsByProviderId,
    deleteCustomer,
  } = args;
  const { notFound } = httpResult.clientError;
  return async function removeProviderCustomers(
    info: usecaseTypes.IRemoveProviderCustomers
  ) {
    const { providerId } = info;
    const [customers, requests] = await Promise.all([
      findCustomersByProviderId(providerId),
      findRequestsByProviderId(providerId),
    ]);

    const customerIds: usecaseTypes.ICustomerIds[] = [];
    if (customers) {
      for (let index = 0; index < customers.length; index++) {
        const { customerId, providerId, businessId } = customers[index];
        customerIds.push({ customerId, providerId, businessId });
      }
    }
    if (requests) {
      for (let index = 0; index < requests.length; index++) {
        const { customerId, providerId, businessId } = requests[index];
        customerIds.push({ customerId, providerId, businessId });
      }
    }
    if (customerIds.length === 0) {
      return notFound({ error: "no customer found" });
    }
    const deleteCustomersPromises = [];
    for (let index = 0; index < customerIds.length; index++) {
      const customerIdentifier = customerIds[index];
      deleteCustomersPromises.push(deleteCustomer(customerIdentifier));
    }
    try {
      await Promise.all(deleteCustomersPromises);
    } catch (error) {
      console.log("error in deleting customers", error);
    }
  };
}
