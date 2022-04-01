import { makeUser } from "../entities";

import type { usecaseTypes } from "../types";

export function buildUpdateUserRole(args: usecaseTypes.IBuildUpdateUserRole) {
  const { findUserById, insertUser } = args;
  return async function updateUserRole(info: usecaseTypes.IUpdateUserRole) {
    const { userId, role } = info;
    const userFound = await findUserById(userId);
    if (!userFound) {
      return false; // TODO manage return value
    }
    const user = makeUser(userFound);
    user.set.role(role);
    await insertUser(user.object());
    return true;
  };
}
