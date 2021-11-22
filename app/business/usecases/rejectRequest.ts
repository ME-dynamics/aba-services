import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildRejectRequest(args: usecaseTypes.IBuildRejectRequest) {
  const { findRequestByCustomerId, insertCustomer } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function rejectRequest(info: usecaseTypes.IRejectRequest) {
    // customer id in params , provider id in token
    const { customerId, providerId } = info;
    // find request by customer id
    const requestFound = await findRequestByCustomerId(customerId);
    // if request not found, return not found
    if (!requestFound || requestFound.softDeleted) {
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
    request.set.remove();
    await insertCustomer(request.object());
    return ok<string>({
      payload: "request rejected",
    });
  };
}
