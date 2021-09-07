import { entityTypes } from "../types";

export function buildMakeCustomerStaffRequest(
) {
  return function makeCustomerStaffRequest(
    request: entityTypes.ICustomerStaffRequest
  ) {
    const {
      staffId,
      customerId,
      name,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = request;
    let { confirmed, softDeleted } = request;

    function confirm() {
      confirmed = true;
      modifiedAt.setTime(Date.now());
    }
    function reject() {
      confirmed = false;
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }

    const madeCustomerStaffRequest: entityTypes.IMadeCustomerStaffRequest = {
      get: {
        staffId: () => staffId,
        customerId: () => customerId,
        name: () => name,
        confirmed: () => confirmed,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        confirm,
        reject,
        remove,
        restore,
      },
      object: () => {
        return {
          staffId,
          customerId,
          name,
          confirmed,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeCustomerStaffRequest;
  };
}
