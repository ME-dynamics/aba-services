import { retrievePublicKey } from "../usecases";

export function buildGetRetrievePublicKey() {
  return async function getRetrievePublicKey() {
    return await retrievePublicKey();
  };
}
