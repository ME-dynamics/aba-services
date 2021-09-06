import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeCustomerStaffRequest, makeStaffCustomer } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildConfirmRequest(args: usecaseTypes.IBuildConfirmRequest) {
  const {
    findRequestByCustomerId,
    findUserById,
    insertRequest,
    insertStaffCustomer,
    findStaffByCustomerId,
  } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function confirmRequest(info: usecaseTypes.IConfirmRequest) {
    // staffId is extracted from token
    // customerId is sent in body
    const { customerId, staffId } = info;
    // find request by customer id
    const requestFound = await findRequestByCustomerId(customerId);
    // if request not found or deleted return not found
    if (!requestFound || requestFound.softDeleted) {
      return notFound({ error: "request not found" });
    }
    // AUTHORIZE : if request staffId is not equal to id extracted from token
    // then user is not allowed to make any changes
    if (requestFound.staffId !== staffId) {
      return forbidden({ error: "action not allowed" });
    }
    // check if customer exists
    const user = await findUserById(requestFound.customerId);
    // if user does not exits , remove the request
    if (!user) {
      const request = makeCustomerStaffRequest(requestFound);
      request.set.remove();
      await insertRequest(request.object());
      return forbidden({ error: "customer not found" });
    }
    // if request is already confirmed, check if staff customer is inserted
    // this can happen due to some failure, when request is confirmed but no
    // customer is inserted for the staff
    if (requestFound.confirmed) {
      const staffCustomerFound = await findStaffByCustomerId(
        requestFound.customerId
      );
      if (!staffCustomerFound) {
        const customer = makeStaffCustomer({
          staffId: requestFound.staffId,
          customerId: requestFound.customerId,
          name: user.name,
          imageUrl: user.imageUrl,
          description: user.description,
          createdAt: undefined,
          modifiedAt: undefined,
          softDeleted: false,
        });
        await insertStaffCustomer(customer.object());
        return ok<entityTypes.IMadeStaffCustomerObject>({
          payload: customer.object(),
        });
      }
      return ok<entityTypes.IMadeStaffCustomerObject>({
        payload: staffCustomerFound,
      });
    }
    // confirm request
    const request = makeCustomerStaffRequest(requestFound);
    request.set.confirm();
    // make staff customer
    const staffCustomer = makeStaffCustomer({
      staffId: request.get.staffId(),
      customerId: request.get.customerId(),
      name: user.name,
      imageUrl: user.imageUrl,
      description: user.description,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    });
    // insert both confirmed request and staff customer to database
    await Promise.all([
      insertRequest(request.object()),
      insertStaffCustomer(staffCustomer.object()),
    ]);
    return ok<entityTypes.IMadeStaffCustomerObject>({
      payload: staffCustomer.object(),
    });
  };
}
