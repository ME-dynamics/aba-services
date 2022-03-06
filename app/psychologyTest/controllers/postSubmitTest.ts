import { auth, types } from "aba-node";
import { submitTest } from "../usecases";
import { controllerTypes } from "../types";

export function buildPostSubmitTest() {
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  return async function postSubmitTest(
    httpRequest: controllerTypes.tPostSubmitTest
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    // TODO: support admin and provider form creation
    const { fields, gender, testId } = httpRequest.body;
    return await submitTest({ testId, userId: payload.userId, fields, gender });
  };
}
