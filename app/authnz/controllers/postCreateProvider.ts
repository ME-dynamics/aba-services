import { httpResult, auth, types } from "aba-node";
import { createProvider } from "../usecases";
import { strings } from "../config";
import { controllerTypes } from "../types";

export function buildPostCreateProvider(
  args: controllerTypes.IBuildPostCreateProvider
) {
  const { validatePhoneNumber } = args;
  const { badRequest } = httpResult.clientError;
  const roles: types.IRoles = {
    admin: true,
    accountant: false,
    assistant: false,
    customer: false,
    provider: false,
    support: false,
  };
  return async function postCreateProvider(
    httpRequest: controllerTypes.tPostCreateProvider
  ) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { providerPhoneNumber: providerNumber } = httpRequest.body;
    const { isValid, phoneNumber } = validatePhoneNumber(providerNumber);
    if (!isValid) {
      return badRequest({ error: strings.phoneNotValid.fa });
    }
    return await createProvider({ providerPhoneNumber: phoneNumber });
  };
}
