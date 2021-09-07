import { refresh } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostRefresh() {
  // TODO: inject any tool that's needed, like request cache
  return async function postRefresh(httpRequest: controllerTypes.tPostRefresh) {
    const { userId, xJwtToken, xRefreshToken } = httpRequest.body;
    return await refresh({ userId, xJwtToken, xRefreshToken });
  };
}
