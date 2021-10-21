import { ErrorFactory } from "aba-node";
import { adaptersTypes } from "../types";



export function buildInitSecret(args: adaptersTypes.IBuildInitSecret) {
  const { findSecretKeys, exportJWK, generateKey, insertSecretKeys } = args;
  const errorPath = "authnz, adapters, init secret";

  return async function initSecret() {
    const keys = await findSecretKeys(1);
    if (keys) {
      return; // no need to initialize keys
    }
    // generate new keys with EdDSA algorithm
    const { privateKey, publicKey } = await generateKey("EdDSA", {
      crv: "Ed25519",
    });

    // parse keys to insert into data base
    const parsedPrivateKey = await exportJWK(privateKey);
    const parsedPublicKey = await exportJWK(publicKey);
    // check key is defined
    if(!parsedPrivateKey.kty || !parsedPrivateKey.crv || !parsedPrivateKey.x) {
      throw new ErrorFactory({
        name: "undefinedPrivateKey",
        message: "private key properties should be defined",
        detail: "",
        nativeError: undefined,
        path: errorPath
      })
    }
    const privateData: adaptersTypes.IKey = {
      keyType: "private",
      kid: 1,
      kty: parsedPrivateKey.kty,
      crv: parsedPrivateKey.crv,
      x: parsedPrivateKey.x,
      d: parsedPrivateKey.d,
    };
    // check key is defined
    if(!parsedPublicKey.kty || !parsedPublicKey.crv || !parsedPublicKey.x) {
      throw new ErrorFactory({
        name: "undefinedPublicKey",
        message: "public key properties should be defined",
        detail: "",
        nativeError: undefined,
        path: errorPath
      })
    }
    const publicData: adaptersTypes.IKey = {
      keyType: "public",
      kid: 1,
      kty: parsedPublicKey.kty,
      crv: parsedPublicKey.crv,
      x: parsedPublicKey.x,
      d: parsedPublicKey.d,
    };
    const inserted = await insertSecretKeys({
      privateKey: privateData,
      publicKey: publicData,
    });
    return inserted;
  };
}
