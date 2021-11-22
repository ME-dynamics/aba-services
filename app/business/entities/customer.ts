import { entityTypes } from "../types";

export function buildMakeCustomer() {
  return function makeCustomer(
    customer: entityTypes.ICustomers
  ): entityTypes.IMadeCustomers {
    const {
      customerId,
      providerId,
      businessId,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = customer;
    let {
      requestConfirmed,
      name,
      profilePictureUrl,
      description,
      softDeleted,
    } = customer;
    function setRequestConfirmed() {
      requestConfirmed = true;
      modifiedAt.setTime(Date.now());
    }
    function setName(newName: string) {
      name = newName;
      modifiedAt.setTime(Date.now());
    }
    function setProfilePictureUrl(newUrl: string) {
      profilePictureUrl = newUrl;
      modifiedAt.setTime(Date.now());
    }
    function setDescription(newDesc: string) {
      description = newDesc;
      modifiedAt.setTime(Date.now());
    }
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    const madeCustomers: entityTypes.IMadeCustomers = {
      get: {
        customerId: () => customerId,
        providerId: () => providerId,
        businessId: () => businessId,
        requestConfirmed: () => requestConfirmed,
        name: () => name,
        profilePictureUrl: () => profilePictureUrl,
        description: () => description,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        requestConfirmed: setRequestConfirmed,
        name: setName,
        profilePictureUrl: setProfilePictureUrl,
        description: setDescription,
        remove,
        restore,
      },
      object: () => {
        return {
          customerId,
          providerId,
          businessId,
          requestConfirmed,
          name,
          profilePictureUrl,
          description,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeCustomers;
  };
}
