import { removeRequest } from "../usecases";

export function buildDeleteRemoveRequest() {
  return async function deleteRemoveRequest() {
    return await removeRequest("399389b4-cd37-4856-b09e-1940d8814dd8");
  };
}
