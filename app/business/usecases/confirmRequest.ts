import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomerProviderRequest, makeProviderCustomer } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildConfirmRequest(args: usecaseTypes.IBuildConfirmRequest) {
  const {
    findRequestByCustomerId,
    findUserById,
    insertRequest,
    insertProviderCustomer,
    findProviderByCustomerId,
  } = args;
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
      return notFound({ error: "request not found" });
    }
    // AUTHORIZE : if request providerId is not equal to id extracted from token
    // then user is not allowed to make any changes
    if (requestFound.providerId !== providerId) {
      return forbidden({ error: "action not allowed" });
    }
    // check if customer exists
    const user = await findUserById(requestFound.customerId);
    // if user does not exits , remove the request
    if (!user) {
      const request = makeCustomerProviderRequest(requestFound);
      request.set.remove();
      await insertRequest(request.object());
      return forbidden({ error: "customer not found" });
    }
    // if request is already confirmed, check if staff customer is inserted
    // this can happen due to some failure, when request is confirmed but no
    // customer is inserted for the staff
    if (requestFound.confirmed) {
      const providerCustomerFound = await findProviderByCustomerId(
        requestFound.customerId
      );
      if (!providerCustomerFound) {
        const customer = makeProviderCustomer({
          providerId: requestFound.providerId,
          customerId: requestFound.customerId,
          name: user.name,
          imageUrl: user.imageUrl,
          description: user.description,
          createdAt: undefined,
          modifiedAt: undefined,
          softDeleted: false,
        });
        await insertProviderCustomer(customer.object());
        return ok<entityTypes.IMadeProviderCustomerObject>({
          payload: customer.object(),
        });
      }
      return ok<entityTypes.IMadeProviderCustomerObject>({
        payload: providerCustomerFound,
      });
    }
    // confirm request
    const request = makeCustomerProviderRequest(requestFound);
    request.set.confirm();
    // make staff customer
    const providerCustomer = makeProviderCustomer({
      providerId: request.get.providerId(),
      customerId: request.get.customerId(),
      name: user.name,
      imageUrl: user.imageUrl,
      description: user.description,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    });
    // insert both confirmed request and provider customer to database
    await Promise.all([
      insertRequest(request.object()),
      insertProviderCustomer(providerCustomer.object()),
    ]);
    return ok<entityTypes.IMadeProviderCustomerObject>({
      payload: providerCustomer.object(),
    });
  };
}
