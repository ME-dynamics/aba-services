import { auth, types } from "aba-node";
import { retrieveTestById } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetTestById() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return function getTestById(httpRequest: controllerTypes.tGetTestById) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { testId } = httpRequest.params;
    return retrieveTestById(testId);
  };
}
