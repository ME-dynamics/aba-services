import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomerStaffRequest } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateRequest(args: usecaseTypes.IBuildCreateRequest) {
  const { findUserById, insertRequest, findRequestByCustomerId } = args;
  const { forbidden, badRequest } = httpResultClientError;
  const { created, ok } = httpResultSuccess;
  return async function createRequest(info: usecaseTypes.ICreateRequest) {
    // staff id in request body
    // customer id is extracted from the token
    const { staffId, customerId } = info;
    // find staff and customer
    const [staff, customer] = await Promise.all([
      findUserById(staffId),
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
    // staff should exits and staff role must be provider to make the request
    if (!staff || staff.role !== "provider") {
      return forbidden({ error: "request can be made to providers only" });
    }
    // check if request is already made to a staff, not specifically staff of this request
    const requestFound = await findRequestByCustomerId(customerId);

    if (requestFound && !requestFound.softDeleted) {
      if (requestFound.confirmed) {
        return badRequest({ error: "request already confirmed" });
      }
      // if found request staff is the same, just return the data
      // this can happen when user send the same request more than once
      if (requestFound.staffId === staffId) {
        return ok<entityTypes.IMadeCustomerStaffRequestObject>({
          payload: requestFound,
        });
      }
      // only one request can be made for a customer
      // if request found, delete the request
      const request = makeCustomerStaffRequest(requestFound);
      request.set.remove();
      await insertRequest(request.object());
    }
    // create the new request
    const request = makeCustomerStaffRequest({
      staffId,
      customerId,
      name: customer.name,
      confirmed: false,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    });
    await insertRequest(request.object());
    return created<entityTypes.IMadeCustomerStaffRequestObject>({
      payload: request.object(),
    });
  };
}
