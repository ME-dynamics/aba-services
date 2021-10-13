import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveRequests(
  args: usecaseTypes.IBuildRetrieveRequests
) {
  const { findRequestsByProviderId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveRequests(providerId: string) {
    const requestsFound = await findRequestsByProviderId(providerId);
    if (!requestsFound) {
      return notFound({ error: "no requests found" });
    }
    return ok<entityTypes.IMadeCustomerProviderRequestObject[]>({
      payload: requestsFound,
    });
  };
}
