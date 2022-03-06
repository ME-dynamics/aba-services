import { types, auth } from "aba-node";
import { removeProvider } from "../usecases";
import type { controllerTypes } from "../types";

export function buildDeleteProvider() {
  const roles: types.IRoles = {
    customer: true,
    provider: false,
    admin: false,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function deleteProvider(
    httpRequest: controllerTypes.tDeleteProvider
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { userId } = payload;
    return await removeProvider(userId);
  };
}
