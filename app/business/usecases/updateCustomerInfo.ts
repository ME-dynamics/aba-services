import { makeCustomerProviderRequest, makeProviderCustomer } from "../entities";
import { usecaseTypes } from "../types";

export function buildUpdateCustomerInfo(
  args: usecaseTypes.IBuildUpdateCustomerInfo
) {
  const {
    findCustomer,
    findRequestByCustomerId,
    insertRequest,
    insertProviderCustomer,
  } = args;
  return async function updateCustomerInfo(
    info: usecaseTypes.IUpdateCustomerInfo
  ) {
    const { id, name, profilePictureUrl, description } = info;
    const [customerFound, requestFound] = await Promise.all([
      findCustomer(id),
      findRequestByCustomerId(id),
    ]);
    const customer = customerFound
      ? makeProviderCustomer(customerFound)
      : undefined;
    if (customer) {
      customer.set.name(name);
      customer.set.profilePictureUrl(profilePictureUrl);
      customer.set.description(description);
    }
    const request = requestFound
      ? makeCustomerProviderRequest(requestFound)
      : undefined;
    if (request) {
      request.set.name(name);
      request.set.profilePictureUrl(profilePictureUrl);
    }
    await Promise.all([
      customer ? insertProviderCustomer(customer.object()) : undefined,
      request ? insertRequest(request.object()) : undefined,
    ]);
  };
}
