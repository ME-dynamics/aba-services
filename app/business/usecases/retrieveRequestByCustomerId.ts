import { httpResultClientError, httpResultSuccess } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrieveRequestByCustomerId(
  args: usecaseTypes.IBuildRetrieveRequestByCustomerId
) {
  const { findRequestByCustomerId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveRequestByCustomerId(customerId: string) {
    const request = await findRequestByCustomerId(customerId);
    if (!request || request.softDeleted) {
      return notFound({ error: "request not found" });
    }
    return ok({
      payload: request,
    });
  };
}
