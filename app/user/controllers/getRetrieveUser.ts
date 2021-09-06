import { controllerTypes } from "../types";
import { retrieveUser } from "../usecases";

export function buildGetRetrieveUser() {
  return async function getRetrieveUser(
    httpRequest: controllerTypes.tGetRetrieveUser
  ) {
    const { id } = httpRequest.params;
    return await retrieveUser(id);
  };
}
