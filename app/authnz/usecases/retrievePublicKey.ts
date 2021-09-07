import { httpResultClientError } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrievePublicKey(
  args: usecaseTypes.IBuildRetrieveSecretKeys
) {
  const { findSecretKeys } = args;
  const { notFound } = httpResultClientError;
  return async function retrievePublicKey() {
    const keys = await findSecretKeys(1);
    if (!keys) {
      return notFound({ error: "keys not found" });
    }
    const { crv, d, kty, x } = keys.publicKey;
    const result: usecaseTypes.IPublicKey = {
      keys: [{ alg: "EdDSA", crv, d, kty, x }],
    };
    return result;
  };
}
