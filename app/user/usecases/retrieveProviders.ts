import { httpResult } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrieveProviders(
  args: usecaseTypes.IBuildRetrieveProviders
) {
  const { findProviders } = args;
  const { ok } = httpResult.success;
  const { notFound } = httpResult.clientError;
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
