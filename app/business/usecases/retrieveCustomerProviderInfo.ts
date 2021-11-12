import { httpResultClientError, httpResultSuccess } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrieveCustomerProviderInfo(
  args: usecaseTypes.IBuildRetrieveCustomerProviderInfo
) {
  const { retrieveCustomerProviderId, fetchUserById } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveCustomerProviderInfo(customerId: string) {
    const providerId = await retrieveCustomerProviderId(customerId);
    if (!providerId) {
      return notFound({ error: "provider not found" });
    }
    const provider = await fetchUserById(providerId);
    if (!provider) {
      return notFound({ error: "provider not found" });
    }
    return ok({
      payload: provider,
    });
  };
}
