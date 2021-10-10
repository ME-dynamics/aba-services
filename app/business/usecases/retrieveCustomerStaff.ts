import { usecaseTypes } from "../types";

export function buildRetrieveCustomerStaff(
  args: usecaseTypes.IBuildRetrieveCustomerStaff
) {
  const { findStaffByCustomerId } = args;
  return async function retrieveCustomerStaff(customerId: string) {
    const customerFound = await findStaffByCustomerId(customerId);
    if (!customerFound) {
      return undefined;
    }
    return customerFound.staffId;
  };
}
