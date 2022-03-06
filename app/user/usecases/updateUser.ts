import { httpResult } from "aba-node";
import { updateCustomerInfo } from "../../business"; // TODO: move this function to network;
import { makeUser } from "../entities";
import { usecaseTypes } from "../types";

export function buildUpdateUser(args: usecaseTypes.IBuildUpdateUser) {
  const { findUserById, insertUser } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function updateUser(
    userId: string,
    info: usecaseTypes.IUpdateUser
  ) {
    const userFound = await findUserById(userId);
    if (!userFound) {
      return notFound({ error: "user not found" });
    }
    const {
      firstName,
      lastName,
      username,
      description,
      profilePictureUrl,
      gender,
      birthday,
      address,
      telephone,
    } = info;

    const user = makeUser(userFound);
    if (firstName) {
      user.set.firstName(firstName);
    }
    if (lastName) {
      user.set.lastName(lastName);
    }
    if (username) {
      user.set.username(username);
    }
    if (description) {
      user.set.description(description);
    }
    if (profilePictureUrl) {
      user.set.profilePictureUrl(profilePictureUrl);
    }
    if (gender) {
      user.set.gender(gender);
    }
    if (birthday) {
      user.set.birthday(birthday);
    }
    if (address) {
      user.set.address(address);
    }
    if (telephone) {
      user.set.telephone(telephone);
    }

    await Promise.all([
      insertUser(user.object()),
      updateCustomerInfo({
        id: user.get.id(),
        name: `${user.get.firstName()} ${user.get.lastName()}`,
        description: user.get.description(),
        profilePictureUrl: user.get.profilePictureUrl(),
      }),
    ]);
    return ok({
      payload: user.object(),
    });
  };
}
