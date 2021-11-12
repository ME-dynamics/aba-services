import { usecaseTypes } from "../types";

export function buildRetrieveCustomerProvider(
  args: usecaseTypes.IBuildRetrieveCustomerProviderId
) {
  const { findProviderByCustomerId } = args;
  return async function retrieveCustomerProvider(customerId: string) {
    // customer contains its provider id
    const customerFound = await findProviderByCustomerId(customerId);
    if (!customerFound) {
      return undefined;
    }
    return customerFound.providerId;
  };
}
