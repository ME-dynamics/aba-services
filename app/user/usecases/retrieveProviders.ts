import { httpResultClientError, httpResultSuccess } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrieveProviders(
  args: usecaseTypes.IBuildRetrieveProviders
) {
  const { findProviders } = args;
  const { ok } = httpResultSuccess;
  const { notFound } = httpResultClientError;
  return async function retrieveProviders() {
    const providersFound = await findProviders();
    if (!providersFound) {
      return notFound({ error: "no provider found" });
    }
    return ok({
      payload: providersFound,
    });
  };
}
