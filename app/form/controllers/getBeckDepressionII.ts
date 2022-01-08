import { auth, types } from "aba-node";
import { retrieveBeckDepressionII } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetBeckDepressionII() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return function getBeckDepressionII(
    httpRequest: controllerTypes.tGetBeckDepressionII
  ) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    return retrieveBeckDepressionII();
  };
}
