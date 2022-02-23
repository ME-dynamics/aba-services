import { httpResult } from "aba-node";
import { makeCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildRejectRequest(args: usecaseTypes.IBuildRejectRequest) {
  const { findRequestByCustomerId, deleteCustomer } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function rejectRequest(info: usecaseTypes.IRejectRequest) {
    // customer id in params , provider id in token
    const { customerId, providerId } = info;
    // find request by customer id
    const requestFound = await findRequestByCustomerId(customerId);
    // if request not found, return not found
    if (!requestFound) {
      return notFound({ error: "request not found" });
    }
    // AUTHORIZE: if provider id doesn't match provider if of request
    // no action is allowed
    if (requestFound.providerId !== providerId) {
      return forbidden({ error: "action not allowed here" });
    }
    // cannot reject a request that is already confirmed
    if (requestFound.requestConfirmed) {
      return forbidden({ error: "request already confirmed" });
    }
    // reject and remove request;
    const request = makeCustomer(requestFound);
    await deleteCustomer({
      customerId: request.get.customerId(),
      providerId: request.get.providerId(),
      businessId: request.get.businessId(),
    });
    return ok<string>({
      payload: "request rejected",
    });
  };
}
