import { entityTypes } from "../types";

export function buildMakeCustomerProviderRequest() {
  return function makeCustomerProviderRequest(
    request: entityTypes.ICustomerProviderRequest
  ) {
    const {
      providerId,
      customerId,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = request;
    let { confirmed, name, imageUrl, softDeleted } = request;

    // Setters

    function setName(newName: string | undefined) {
      name = newName;
      modifiedAt.setTime(Date.now());
    }
    function setImageUrl(newImageUrl: string | undefined) {
      imageUrl = newImageUrl;
      modifiedAt.setTime(Date.now());
    }
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

    const madeCustomerProviderRequest: entityTypes.IMadeCustomerProviderRequest =
      {
        get: {
          providerId: () => providerId,
          customerId: () => customerId,
          name: () => name,
          imageUrl: () => imageUrl,
          confirmed: () => confirmed,
          createdAt: () => createdAt,
          modifiedAt: () => modifiedAt,
          softDeleted: () => softDeleted,
        },
        set: {
          name: setName,
          imageUrl: setImageUrl,
          confirm,
          reject,
          remove,
          restore,
        },
        object: () => {
          return {
            providerId,
            customerId,
            name,
            imageUrl,
            confirmed,
            createdAt,
            modifiedAt,
            softDeleted,
          };
        },
      };
    return madeCustomerProviderRequest;
  };
}
