import { httpResult } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveProviderRequests(
  args: usecaseTypes.IBuildRetrieveRequests
) {
  const { findRequestsByProviderId } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrieveProviderRequests(providerId: string) {
    const requestsFound = await findRequestsByProviderId(providerId);
    if (!requestsFound) {
      return notFound({ error: "no requests found" });
    }
    return ok<entityTypes.IMadeCustomersObject[]>({
      payload: requestsFound,
    });
  };
}
