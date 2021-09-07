import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomerStaffRequest } from "../entities";
import { usecaseTypes } from "../types";

export function buildRejectRequest(args: usecaseTypes.IBuildRejectRequest) {
  const { findRequestByCustomerId, insertRequest } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function rejectRequest(info: usecaseTypes.IRejectRequest) {
    // customer id in params , staff id in token
    const { customerId, staffId } = info;
    // find request by customer id 
    const requestFound = await findRequestByCustomerId(customerId);
    // if request not found, return not found
    if (!requestFound || requestFound.softDeleted) {
      return notFound({ error: "request not found" });
    }
    // AUTHORIZE: if staff id doesn't match staff if of request
    // no action is allowed
    if (requestFound.staffId !== staffId) {
      return forbidden({ error: "action not allowed here" });
    }
    // cannot reject a request that is already confirmed
    if (requestFound.confirmed) {
      return forbidden({error: "request already confirmed"})
    }
    // reject and remove request;
    const request = makeCustomerStaffRequest(requestFound);
    request.set.reject();
    request.set.remove();
    await insertRequest(request.object());
    return ok<string>({
        payload: "request rejected"
    })
  };
}
