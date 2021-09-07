import { retrieveRequests } from "../usecases";

export function buildGetRetrieveRequests() {
  return async function getRetrieveRequests() {
    return await retrieveRequests("b44b2952-800f-48d7-9ea3-7b8b52fdab9f");
  };
}
