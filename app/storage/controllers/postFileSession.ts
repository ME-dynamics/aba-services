import { createFileSession } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostFileSession() {
  return async function postFileSession(
    httpRequest: controllerTypes.tPostFileSession
  ) {
    const { body } = httpRequest;
    return await createFileSession(body);
  };
}
