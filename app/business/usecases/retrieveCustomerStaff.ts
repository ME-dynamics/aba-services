import { usecaseTypes } from "../types";

export function buildRetrieveCustomerStaff(
  args: usecaseTypes.IBuildRetrieveCustomerProvider
) {
  const { findProviderByCustomerId } = args;
  return async function retrieveCustomerProvider(customerId: string) {
    const customerFound = await findProviderByCustomerId(customerId);
    if (!customerFound) {
      return undefined;
    }
    return customerFound.providerId;
  };
}
