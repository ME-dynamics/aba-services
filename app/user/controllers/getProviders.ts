import { auth, types } from "aba-node";
import { retrieveProviders } from "../usecases";
import { controllerTypes } from "../types";

export function buildGetProviders() {
  const roles: types.IRoles = {
    admin: true,
    accountant: true,
    assistant: true,
    customer: true,
    provider: false,
    support: true,
  };
  return async function getProviders(
    httpRequest: controllerTypes.tGetProviders
  ) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    return await retrieveProviders();
  };
}
