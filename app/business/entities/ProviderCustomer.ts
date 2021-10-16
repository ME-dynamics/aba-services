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
    let { name, profilePictureUrl, description, softDeleted } = providerCustomer;

    // * Setters
    function setName(newName: string | undefined) {
      name = newName;
      modifiedAt.setTime(Date.now());
    }
    function setProfilePictureUrl(newUrl: string | undefined) {
      profilePictureUrl = newUrl;
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
        profilePictureUrl: () => profilePictureUrl,
        description: () => description,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        name: setName,
        profilePictureUrl: setProfilePictureUrl,
        description: setDescription,
        remove,
        restore,
      },
      object: () => {
        return {
          providerId,
          customerId,
          name,
          profilePictureUrl,
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
