import { httpResult } from "aba-node";
import { makeCustomer } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateRequest(args: usecaseTypes.IBuildCreateRequest) {
  const {
    fetchUserById,
    insertCustomer,
    findRequestByCustomerId,
    fetchRoleByUserId,
    deleteCustomer,
  } = args;
  const { forbidden, badRequest } = httpResult.clientError;
  const { created, ok } = httpResult.success;
  return async function createRequest(info: usecaseTypes.ICreateRequest) {
    // provider id in request body
    // customer id is extracted from the token
    const { providerId, customerId } = info;
    // find provider and customer
    const [provider, customer] = await Promise.all([
      fetchRoleByUserId(providerId),
      fetchUserById(customerId),
    ]);
    // validate customer, customer should exists
    if (!customer) {
      return forbidden({ error: "you do not have access to system" });
    }
    // if customer didn't define his name, this request cannot be completed
    if (!customer.name) {
      // TODO: separate first name and last name
      return badRequest({
        error: "you should define your name before making a request",
      });
    }
    // provider should exits and provider role must be provider to make the request
    if (!provider || provider.role !== "provider") {
      return forbidden({ error: "request can be made to providers only" });
    }
    // TODO: check if user is already a customer of the provider
    // check if request is already made to a provider, not specifically provider of this request
    const requestFound = await findRequestByCustomerId(customerId);
    if (requestFound) {
      if (requestFound.requestConfirmed) {
        return badRequest({ error: "request already confirmed" });
      }
      // if found request provider is the same, just return the data
      // this can happen when user send the same request more than once
      if (requestFound.providerId === providerId) {
        return ok<entityTypes.IMadeCustomersObject>({
          payload: requestFound,
        });
      }
      // only one request can be made for a customer
      // if request found, delete the request
      const customer = makeCustomer(requestFound);
      await deleteCustomer({
        customerId: customer.get.customerId(),
        providerId: customer.get.providerId(),
        businessId: customer.get.businessId(),
      });
    }
    // create the new request
    const request = makeCustomer({
      providerId,
      customerId,
      businessId: "00000000-0000-0000-0000-000000000000",
      name: customer.name,
      profilePictureUrl: customer.profilePictureUrl,
      requestConfirmed: false,
      description: customer.description,
      createdAt: undefined,
      modifiedAt: undefined,
    });
    await insertCustomer(request.object());
    return created<entityTypes.IMadeCustomersObject>({
      payload: request.object(),
    });
  };
}
