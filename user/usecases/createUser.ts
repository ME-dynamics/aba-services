import { makeUser } from "../entities";
import { httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateUser(args: usecaseTypes.IBuildCreateUser) {
  const { insertUser, findUserByPhoneNumber } = args;

  const { created, ok } = httpResultSuccess;

  function userInput(info: usecaseTypes.ICreateUser): entityTypes.IUser {
    const { id, phoneNumber } = info;
    return {
      id,
      phoneNumber,
      username: undefined,
      firstName: undefined,
      lastName: undefined,
      profilePictureUrl: undefined,
      address: undefined,
      telephone: undefined,
      problemDescription: undefined,
      gender: undefined,
      birthday: undefined,
      maritalStatus: undefined,
      maritalState: undefined,
      education: undefined,
      academicField: undefined,
      religion: undefined,
      job: undefined,
      bodyDiseases: undefined,
      mindDiseases: undefined,
      drugUse: undefined,
      addiction: undefined,
      isFatherAlive: undefined,
      isMotherAlive: undefined,
      cousinMarriage: undefined,
      siblingsPosition: undefined,
      siblings: undefined,
      deactivationReason: undefined,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }

  return async function createUser(info: usecaseTypes.ICreateUser) {
    const user = await findUserByPhoneNumber(info.phoneNumber);
    if (user) {
      return ok<entityTypes.IMadeUserObject>({ payload: user });
    }
    const madeUser = makeUser(userInput(info));

    await insertUser(madeUser.object());
    return created<entityTypes.IMadeUserObject>({
      payload: madeUser.object(),
    });
  };
}
