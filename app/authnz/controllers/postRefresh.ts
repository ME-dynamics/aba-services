import { refresh } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostRefresh() {
  return async function postRefresh(httpRequest: controllerTypes.tPostRefresh) {
    // TODO: check refresh method for security
    const { userId, xJwtToken, xRefreshToken, deviceId } = httpRequest.body;
    return await refresh({ userId, xJwtToken, xRefreshToken, deviceId });
  };
}
