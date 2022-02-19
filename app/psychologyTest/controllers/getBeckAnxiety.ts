import { auth, types } from "aba-node";
import { retrieveBeckAnxiety } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetBeckAnxiety() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return function getBeckAnxiety(httpRequest: controllerTypes.tGetBeckAnxiety) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    return retrieveBeckAnxiety();
  };
}
