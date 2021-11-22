import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomer } from "../entities";
import { strings } from "../config";
import { entityTypes, usecaseTypes } from "../types";

export function buildConfirmRequest(args: usecaseTypes.IBuildConfirmRequest) {
  const { findRequestByCustomerId, fetchUserById, insertCustomer } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function confirmRequest(info: usecaseTypes.IConfirmRequest) {
    // providerId is extracted from token
    // customerId is sent in body
    const { customerId, providerId } = info;
    // find request by customer id
    const requestFound = await findRequestByCustomerId(customerId);
    // if request not found or deleted return not found
    if (!requestFound || requestFound.softDeleted) {
      return notFound({ error: strings.requestNotFound.fa });
    }
    // AUTHORIZE : if request providerId is not equal to id extracted from token
    // then user is not allowed to make any changes
    if (requestFound.providerId !== providerId) {
      return forbidden({ error: strings.actionNotAllowed.fa });
    }
    // check if customer exists
    const user = await fetchUserById(requestFound.customerId);
    // if user does not exits , remove the customer
    if (!user) {
      const customer = makeCustomer(requestFound);
      customer.set.remove();
      await insertCustomer(customer.object());
      return forbidden({ error: strings.userNotFound.fa });
    }

    if (requestFound.requestConfirmed) {
      return ok<entityTypes.IMadeCustomersObject>({
        payload: requestFound,
      });
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
