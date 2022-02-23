import { httpResult } from "aba-node";
import { makeCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveRequest(args: usecaseTypes.IBuildRemoveRequest) {
  const { findRequestByCustomerId, deleteCustomer } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function removeRequest(customerId: string) {
    const requestFound = await findRequestByCustomerId(customerId);
    if (!requestFound) {
      return notFound({ error: "request not found" });
    }
    const request = makeCustomer(requestFound);
    await deleteCustomer({
      customerId: request.get.customerId(),
      providerId: request.get.providerId(),
      businessId: request.get.businessId(),
    });
    return ok<string>({
      payload: "request removed",
    });
  };
}
