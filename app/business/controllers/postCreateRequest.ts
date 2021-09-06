import { createRequest } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostCreateRequest() {
  return async function postCreateRequest(
    httpRequest: controllerTypes.tPostCreateRequest
  ) {
    const { staffId } = httpRequest.body;
    return await createRequest({
      staffId,
      customerId: "399389b4-cd37-4856-b09e-1940d8814dd8",
    });
  };
}
