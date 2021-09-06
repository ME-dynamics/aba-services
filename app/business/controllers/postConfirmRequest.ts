import { controllerTypes } from "../types";
import { confirmRequest } from "../usecases";

export function buildPostConfirmRequest() {
  return async function postConfirmRequest(
    httpRequest: controllerTypes.tPostConfirmRequest
  ) {
    const { customerId } = httpRequest.body;
    return await confirmRequest({
      customerId,
      staffId: "b44b2952-800f-48d7-9ea3-7b8b52fdab9f",
    });
  };
}
