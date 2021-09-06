import { controllerTypes } from "../types";
import { createUser } from "../usecases";

export function buildPostCreateUser() {
  return async function postCreateUser(
    httpRequest: controllerTypes.tPostCreateUser
  ) {
    const info = httpRequest.body;

    return await createUser(info);
  };
}
