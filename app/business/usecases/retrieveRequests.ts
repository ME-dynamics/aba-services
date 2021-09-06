import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveRequests(
  args: usecaseTypes.IBuildRetrieveRequests
) {
  const { findRequestsByStaffId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveRequests(staffId: string) {
    const requestsFound = await findRequestsByStaffId(staffId);
    if (!requestsFound) {
      return notFound({ error: "no requests found" });
    }
    return ok<entityTypes.IMadeCustomerStaffRequestObject[]>({
      payload: requestsFound,
    });
  };
}
