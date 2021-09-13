import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeUser } from "../entities";
import { usecaseTypes } from "../types";

export function buildUpdateUser(args: usecaseTypes.IBuildUpdateUser) {
  const { findUserById, insertUser } = args;
  const { forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function updateUser(
    userId: string,
    info: usecaseTypes.IUpdateUser
  ) {
    const userFound = await findUserById(userId);
    if (!userFound || userFound.softDeleted) {
      return forbidden({ error: "action is not allowed" });
    }
    const {
      firstName,
      lastName,
      username,
      profilePictureUrl,
      gender,
      address,
      telephone,
    } = info;
    const user = makeUser(userFound);
    user.set.firstName(firstName);
    user.set.lastName(lastName);
    user.set.username(username);
    user.set.profilePictureUrl(profilePictureUrl);
    user.set.gender(gender);
    user.set.address(address);
    user.set.telephone(telephone);
    await insertUser(user.object());
    return ok({
      payload: user.object(),
    });
  };
}
