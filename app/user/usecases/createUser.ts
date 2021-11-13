import { makeUser } from "../entities";
import { httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateUser(args: usecaseTypes.IBuildCreateUser) {
  const { insertUser, findUserByPhoneNumber } = args;

  const { created, ok } = httpResultSuccess;

  function userInput(info: usecaseTypes.ICreateUser): entityTypes.IUser {
    const { id, role, phoneNumber } = info;
    return {
      id,
      role,
      phoneNumber,
      username: undefined,
      firstName: undefined,
      lastName: undefined,
      description: undefined,
      profilePictureUrl: undefined,
      address: undefined,
      telephone: undefined,
      gender: undefined,
      birthday: undefined,
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
