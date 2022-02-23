import { httpResult } from "aba-node";
import type { usecaseTypes } from "../types";

export function buildRemoveProvider(args: usecaseTypes.IBuildRemoveProvider) {
  const { findCustomer, deleteCustomer } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function removeProvider(userId: string) {
    const customerFound = await findCustomer(userId);
    if (!customerFound) {
      return notFound({ error: "customer not found" });
    }
    await deleteCustomer({
      customerId: customerFound.customerId,
      providerId: customerFound.providerId,
      businessId: customerFound.businessId,
    });
    return ok<string>({
      payload: "provider removed from customer",
    });
  };
}
