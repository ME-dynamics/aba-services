import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveCustomers(
  args: usecaseTypes.IBuildRetrieveCustomers
) {
  const { findCustomersByStaffId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveCustomers(staffId: string) {
    const customersFound = await findCustomersByStaffId(staffId);
    if (!customersFound) {
      return notFound({ error: "no customer found" });
    }
    return ok<entityTypes.IMadeStaffCustomerObject[]>({
      payload: customersFound,
    });
  };
}
