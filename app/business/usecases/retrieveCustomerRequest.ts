import { httpResult } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrieveCustomerRequest( // TODO: fix retrieve customer request
  args: usecaseTypes.IBuildRetrieveRequestByCustomerId
) {
  const { findRequestByCustomerId } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrieveCustomerRequest(customerId: string) {
    const request = await findRequestByCustomerId(customerId);
    if (!request) {
      return notFound({ error: "request not found" });
    }
    return ok({
      payload: request,
    });
  };
}
