import { entityTypes } from "../types";

export function buildMakeProviderCustomer() {
  return function makeProviderCustomer(
    providerCustomer: entityTypes.IProviderCustomer
  ) {
    const {
      providerId,
      customerId,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = providerCustomer;
    let { name, imageUrl, description, softDeleted } = providerCustomer;

    // * Setters
    function setName(newName: string | undefined) {
      name = newName;
      modifiedAt.setTime(Date.now());
    }
    function setImageUrl(newUrl: string | undefined) {
      imageUrl = newUrl;
      modifiedAt.setTime(Date.now());
    }
    function setDescription(newDescription: string | undefined) {
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
    const madeProviderCustomer: entityTypes.IMadeProviderCustomer = {
      get: {
        providerId: () => providerId,
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
          providerId,
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
    return madeProviderCustomer;
  };
}
