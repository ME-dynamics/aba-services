import { auth, types } from "aba-node";
import { retrieveMBTI } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetMBTI() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return function getMbti(httpRequest: controllerTypes.tGetMBTI) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    return retrieveMBTI();
  };
}
