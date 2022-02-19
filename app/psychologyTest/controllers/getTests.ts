import { auth, types } from "aba-node";
import { retrieveTests  } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetTests() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return function getTests(httpRequest: controllerTypes.tGetTests) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    return retrieveTests();
  };
}
