import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomerProviderRequest } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateRequest(args: usecaseTypes.IBuildCreateRequest) {
  const { findUserById, insertRequest, findRequestByCustomerId } = args;
  const { forbidden, badRequest } = httpResultClientError;
  const { created, ok } = httpResultSuccess;
  return async function createRequest(info: usecaseTypes.ICreateRequest) {
    // provider id in request body
    // customer id is extracted from the token
    const { providerId, customerId } = info;
    // find provider and customer
    const [provider, customer] = await Promise.all([
      findUserById(providerId),
      findUserById(customerId),
    ]);
    // validate customer, customer should exists
    if (!customer) {
      return forbidden({ error: "you do not have access to system" });
    }
    // if customer didn't define his name, this request cannot be completed
    if (!customer.name) {
      return badRequest({
        error: "you should define your name before making a request",
      });
    }
    // provider should exits and provider role must be provider to make the request
    if (!provider || provider.role !== "provider") {
      return forbidden({ error: "request can be made to providers only" });
    }
    // check if request is already made to a provider, not specifically provider of this request
    const requestFound = await findRequestByCustomerId(customerId);

    if (requestFound && !requestFound.softDeleted) {
      if (requestFound.confirmed) {
        return badRequest({ error: "request already confirmed" });
      }
      // if found request provider is the same, just return the data
      // this can happen when user send the same request more than once
      if (requestFound.providerId === providerId) {
        return ok<entityTypes.IMadeCustomerProviderRequestObject>({
          payload: requestFound,
        });
      }
      // only one request can be made for a customer
      // if request found, delete the request
      const request = makeCustomerProviderRequest(requestFound);
      request.set.remove();
      await insertRequest(request.object());
    }
    // create the new request
    const request = makeCustomerProviderRequest({
      providerId,
      customerId,
      name: customer.name,
      imageUrl: customer.imageUrl,
      confirmed: false,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    });
    await insertRequest(request.object());
    return created<entityTypes.IMadeCustomerProviderRequestObject>({
      payload: request.object(),
    });
  };
}
