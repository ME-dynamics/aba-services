import { auth, types, httpResultClientError } from "aba-node";
import { controllerTypes } from "../types";
import { retrievePatient } from "../usecases";

export function buildGetPatient(args: controllerTypes.IBuildGetPatient) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    admin: true,
    provider: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  const { badRequest, forbidden } = httpResultClientError;
  return async function getPatient(httpRequest: controllerTypes.tGetPatient) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { role, userId } = payload;
    const { id } = httpRequest.params;
    if (role === "admin") {
      if (!id) {
        return badRequest({ error: "user id must be defined" });
      }
      return await retrievePatient(id);
    }
    if (role === "provider") {
      if (!id) {
        return badRequest({ error: "id must be defined" });
      }
      // AUTHORIZE
      // USER MUST BE provider customer
      const providerId = await fetchCustomerProvider(id);
      if (!providerId) {
        return forbidden({ error: "action not allowed" });
      }
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }
      return await retrievePatient(id);
    }
    return await retrievePatient(userId);
  };
}
