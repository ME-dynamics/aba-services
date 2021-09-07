import { entityTypes } from "../types";

export function buildMakeStaffCustomer() {
  return function makeStaffCustomer(staffCustomer: entityTypes.IStaffCustomer) {
    const {
      staffId,
      customerId,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = staffCustomer;
    let { name, imageUrl, description, softDeleted } = staffCustomer;

    // * Setters
    function setName(newName: string) {
      name = newName;
      modifiedAt.setTime(Date.now());
    }
    function setImageUrl(newUrl: string) {
      imageUrl = newUrl;
      modifiedAt.setTime(Date.now());
    }
    function setDescription(newDescription: string) {
      description = newDescription;
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
    const madeStaffCustomer: entityTypes.IMadeStaffCustomer = {
      get: {
        staffId: () => staffId,
        customerId: () => customerId,
        name: () => name,
        imageUrl: () => imageUrl,
        description: () => description,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        name: setName,
        imageUrl: setImageUrl,
        description: setDescription,
        remove,
        restore,
      },
      object: () => {
        return {
          staffId,
          customerId,
          name,
          imageUrl,
          description,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeStaffCustomer;
  };
}
