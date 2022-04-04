import { httpResult, auth, types } from "aba-node";
import { removeProvider } from "../usecases";
import { strings } from "../config";
import { controllerTypes } from "../types";

export function buildDeleteProvider(args: controllerTypes.IBuildDeleteProvider) {
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
  return async function deleteProvider(
    httpRequest: controllerTypes.tDeleteProvider
  ) {
    const { success, error } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { providerPhoneNumber} = httpRequest.params;
    const { isValid, phoneNumber } = validatePhoneNumber(providerPhoneNumber);
    if(!isValid) {
      return badRequest({ error: strings.phoneNotValid.fa });
    }
    return await removeProvider({ providerPhoneNumber: phoneNumber });
  };
}
