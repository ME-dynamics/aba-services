import { entityTypes } from "../types";

export function buildMakeUser(args: entityTypes.IBuildMakeUser) {
  const { uuid, nanoid } = args;

  return function makeUser(
    user: entityTypes.IUser
  ): Readonly<entityTypes.IMadeUser> {
    const {
      id,
      role,
      phoneNumber,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = user;
    let {
      username,
      firstName,
      lastName,
      description,
      profilePictureUrl,
      address,
      gender,
      telephone,
      deactivationReason,
      softDeleted,
    } = user;
    if (!username) {
      username = nanoid(8);
    }
    function setUsername(newUsername: string | undefined) {
      username = newUsername;
      modifiedAt.setTime(Date.now());
    }

    function setFirstName(newFirstName: string | undefined) {
      firstName = newFirstName;
      modifiedAt.setTime(Date.now());
    }
    function setLastName(newLastName: string | undefined) {
      lastName = newLastName;
      modifiedAt.setTime(Date.now());
    }
    function setDescription(newDesc: string | undefined) {
      description = newDesc;
      modifiedAt.setTime(Date.now());
    }
    function setProfilePictureUrl(newProfilePictureUrl: string | undefined) {
      profilePictureUrl = newProfilePictureUrl;
      modifiedAt.setTime(Date.now());
    }
    function setAddress(newAddress: string | undefined) {
      address = newAddress;
      modifiedAt.setTime(Date.now());
    }
    function setGender(newGender: "male" | "female" | undefined) {
      gender = newGender;
      modifiedAt.setTime(Date.now());
    }
    function setTelephone(newTel: string | undefined) {
      telephone = newTel;
      modifiedAt.setTime(Date.now());
    }
    function setDeactivationReason(newDeactivationReason: string) {
      deactivationReason = newDeactivationReason;
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
    const madeUser: entityTypes.IMadeUser = {
      get: {
        id: () => id,
        role: () => role,
        username: () => username,
        phoneNumber: () => phoneNumber,
        firstName: () => firstName,
        lastName: () => lastName,
        description: () => description,
        profilePictureUrl: () => profilePictureUrl,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        deactivationReason: () => deactivationReason,
        softDeleted: () => softDeleted,
      },
      set: {
        username: setUsername,
        firstName: setFirstName,
        lastName: setLastName,
        description: setDescription,
        profilePictureUrl: setProfilePictureUrl,
        gender: setGender,
        address: setAddress,
        telephone: setTelephone,
        deactivationReason: setDeactivationReason,
        remove,
        restore,
      },
      object: () => {
        return {
          id,
          role,
          address,
          gender,
          telephone,
          username,
          phoneNumber,
          firstName,
          lastName,
          description,
          profilePictureUrl,
          deactivationReason,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeUser;
  };
}
