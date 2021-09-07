import { controllerTypes } from "../types";
import { rejectRequest } from "../usecases";

export function buildDeleteRejectRequest() {
  return async function deleteRejectRequest(
    httpRequest: controllerTypes.tDeleteRejectRequest
  ) {
    const { customerId } = httpRequest.params;
    return await rejectRequest({
      customerId,
      staffId: "b44b2952-800f-48d7-9ea3-7b8b52fdab9f",
    });
  };
}
