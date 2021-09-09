import { makeCustomerStaffRequest, makeStaffCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildUpdateCustomerInfo(
  args: usecaseTypes.IBuildUpdateCustomerInfo
) {
  const {
    findCustomer,
    findRequestByCustomerId,
    insertRequest,
    insertStaffCustomer,
  } = args;
  return async function updateCustomerInfo(
    info: usecaseTypes.IUpdateCustomerInfo
  ) {
    const { id, name, imageUrl, description } = info;
    const [customerFound, requestFound] = await Promise.all([
      findCustomer(id),
      findRequestByCustomerId(id),
    ]);
    const customer = customerFound
      ? makeStaffCustomer(customerFound)
      : undefined;
    if (customer) {
      customer.set.name(name);
      customer.set.imageUrl(imageUrl);
      customer.set.description(description);
    }
    const request = requestFound
      ? makeCustomerStaffRequest(requestFound)
      : undefined;
    if (request) {
      request.set.name(name);
      request.set.imageUrl(imageUrl);
    }
    await Promise.all([
      customer ? insertStaffCustomer(customer.object()) : undefined,
      request ? insertRequest(request.object()) : undefined,
    ]);
  };
}
