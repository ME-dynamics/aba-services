import { auth, types } from "aba-node";
import { retrieveNEOPIR } from "../usecases";
import { controllerTypes } from "../types";
export function buildGetNEOPIR() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: true,
    support: true,
  };
  return function getNEOPIR(httpRequest: controllerTypes.tGetNEOPIR) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    return retrieveNEOPIR();
  };
}
