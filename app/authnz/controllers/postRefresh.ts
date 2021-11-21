import { refresh } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostRefresh() {
  return async function postRefresh(httpRequest: controllerTypes.tPostRefresh) {
    const { userId, xJwtToken, xRefreshToken } = httpRequest.body;
    return await refresh({ userId, xJwtToken, xRefreshToken });
  };
}
