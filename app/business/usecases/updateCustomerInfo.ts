import { makeCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildUpdateCustomerInfo(
  args: usecaseTypes.IBuildUpdateCustomerInfo
) {
  const { findCustomer, insertCustomer } = args;
  return async function updateCustomerInfo(
    info: usecaseTypes.IUpdateCustomerInfo
  ) {
    const { id, name, profilePictureUrl, description } = info;
    const customerFound = await findCustomer(id);

    const customer = customerFound ? makeCustomer(customerFound) : undefined;
    if (customer) {
      customer.set.name(name || "");
      customer.set.profilePictureUrl(profilePictureUrl || "");
      customer.set.description(description || "");
      await insertCustomer(customer.object());
    }
  };
}
