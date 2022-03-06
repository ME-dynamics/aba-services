import { httpResult } from "aba-node";
import { makeCustomer } from "../entities";
import { strings } from "../config";
import { entityTypes, usecaseTypes } from "../types";

export function buildConfirmRequest(args: usecaseTypes.IBuildConfirmRequest) {
  const {
    findRequestByCustomerId,
    fetchUserById,
    insertCustomer,
    deleteCustomer,
  } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function confirmRequest(info: usecaseTypes.IConfirmRequest) {
    // providerId is extracted from token
    // customerId is sent in body
    const { customerId, providerId } = info;
    // find request by customer id
    const requestFound = await findRequestByCustomerId(customerId);
    // if request not found or deleted return not found
    if (!requestFound) {
      return notFound({ error: strings.requestNotFound.fa });
    }
    // AUTHORIZE : if request providerId is not equal to id extracted from token
    // then user is not allowed to make any changes
    if (requestFound.providerId !== providerId) {
      return forbidden({ error: strings.actionNotAllowed.fa });
    }
    if (requestFound.requestConfirmed) {
      return ok<entityTypes.IMadeCustomersObject>({
        payload: requestFound,
      });
    }
    // check if customer exists
    const user = await fetchUserById(requestFound.customerId);
    // if user does not exits , remove the customer
    if (!user) {
      const customer = makeCustomer(requestFound);
      await deleteCustomer({
        customerId: customer.get.customerId(),
        providerId: customer.get.providerId(),
        businessId: customer.get.businessId(),
      });
      return forbidden({ error: strings.userNotFound.fa });
    }

    // confirm request
    const customer = makeCustomer(requestFound);
    customer.set.requestConfirmed();
    await insertCustomer(customer.object());
    return ok<entityTypes.IMadeCustomersObject>({
      payload: customer.object(),
    });
  };
}
