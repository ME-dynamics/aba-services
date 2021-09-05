import { httpResultServerError } from "aba-node";
import { controllerTypes } from "../types";
import { retrieveUser } from "../usecases";

export function buildGetRetrieveUser() {
  const { internalServerError } = httpResultServerError;
  return async function getRetrieveUser(
    httpRequest: controllerTypes.tGetRetrieveUser
  ) {
    try {
      const { id } = httpRequest.params;
      return await retrieveUser(id);
    } catch (error) {
      return internalServerError({
        error: "something wrong",
      });
    }
  };
}
