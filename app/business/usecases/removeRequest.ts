import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomerProviderRequest } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveRequest(args: usecaseTypes.IBuildRemoveRequest) {
  const { findRequestByCustomerId, insertRequest } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function removeRequest(customerId: string) {
    const requestFound = await findRequestByCustomerId(customerId);
    if (!requestFound || requestFound.softDeleted) {
      return notFound({ error: "request not found" });
    }
    const request = makeCustomerProviderRequest(requestFound);
    request.set.remove();
    await insertRequest(request.object());
    return ok<string>({
      payload: "request removed",
    });
  };
}
