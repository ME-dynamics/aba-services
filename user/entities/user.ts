import { entityTypes } from "../types";

export function buildMakeUser(args: entityTypes.IBuildMakeUser) {
  const { uuid, nanoid } = args;

  return function makeUser(
    user: entityTypes.IUser
  ): Readonly<entityTypes.IMadeUser> {
    const {
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = user;
    let {
      username = nanoid(8),
      academicField,
      address,
      birthday,
      bodyDiseases,
      cousinMarriage,
      drugUse,
      addiction,
      education,
      gender,
      isFatherAlive,
      isMotherAlive,
      job,
      maritalStatus,
      maritalState,
      mindDiseases,
      problemDescription,
      religion,
      siblings,
      siblingsPosition,
      telephone,
      phoneNumber,
      firstName,
      lastName,
      profilePictureUrl,
      deactivationReason,
      softDeleted,
    } = user;

    function setUsername(newUsername: string) {
      username = newUsername;
      modifiedAt.setTime(Date.now());
    }

    function setFirstName(newFirstName: string) {
      firstName = newFirstName;
      modifiedAt.setTime(Date.now());
    }
    function setLastName(newLastName: string) {
      lastName = newLastName;
      modifiedAt.setTime(Date.now());
    }

    function setProfilePictureUrl(newProfilePictureUrl: string) {
      profilePictureUrl = newProfilePictureUrl;
      modifiedAt.setTime(Date.now());
    }
    // function setFavorite(newFav: string) {
    //   if (!favorites) {
    //     favorites = [newFav];
    //     modifiedAt.setTime(Date.now());
    //     return true;
    //   }
    //   if (favorites.includes(newFav)) {
    //     return false;
    //   }
    //   favorites.push(newFav);
    //   modifiedAt.setTime(Date.now());
    //   return true;
    // }
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
        username: () => username,
        phoneNumber: () => phoneNumber,
        firstName: () => firstName,
        lastName: () => lastName,
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
        profilePictureUrl: setProfilePictureUrl,
        // favorite: setFavorite,
        deactivationReason: setDeactivationReason,
        remove,
        restore,
      },
      object: () => {
        return {
          id,
          academicField,
          address,
          birthday,
          bodyDiseases,
          cousinMarriage,
          drugUse,
          addiction,
          education,
          gender,
          isFatherAlive,
          isMotherAlive,
          job,
          maritalState,
          maritalStatus,
          mindDiseases,
          problemDescription,
          religion,
          siblings,
          siblingsPosition,
          telephone,
          username,
          phoneNumber,
          firstName,
          lastName,
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
