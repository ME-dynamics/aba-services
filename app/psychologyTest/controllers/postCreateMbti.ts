import { auth, types } from "aba-node";
import { submitMBTI } from "../usecases";
import { controllerTypes } from "../types";

export function buildPostCreateMbti() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function postCreateMbti(
    httpRequest: controllerTypes.tPostCreateMbti
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    // TODO: support admin and provider form creation
    const mbtiInput = httpRequest.body;
    return await submitMBTI({
      userId: payload.userId,
      fields: mbtiInput.fields,
    });
  };
}
