import { httpResultClientError, auth, types } from "aba-node";
import { createProvider } from "../usecases";
import { controllerTypes } from "../types";

export function buildPostCreateProvider(
  args: controllerTypes.IBuildPostCreateProvider
) {
  const { validatePhoneNumber } = args;
  const { badRequest } = httpResultClientError;
  const role: types.IRoles = {
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
    const { success, error } = auth(httpRequest, role);
    if (!success) {
      return error;
    }
    const { providerPhoneNumber } = httpRequest.body;
    if (!validatePhoneNumber(providerPhoneNumber)) {
      return badRequest({ error: "phone number is not valid" });
    }
    return await createProvider({ providerPhoneNumber });
  };
}
