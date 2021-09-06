import { queryGen } from "aba-node";

import { IBuildInsert, IInsertSecretKeys } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "secret_key",
    version: "v1",
    values: [
      { column: "key_type", self: true },
      { column: "kid", self: true },
      { column: "kty", self: true },
      { column: "crv", self: true },
      { column: "x", self: true },
      { column: "d", self: true },
    ],
  });
  return query;
}

export function buildInsertSecretKeys(args: IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert secret keys";
  const query = insertQueryGen();
  return async function insertSecretKeys(keys: IInsertSecretKeys) {
    const { privateKey, publicKey } = keys;

    const privateResult = await insert({
      query,
      params: {
        key_type: privateKey.keyType,
        kid: privateKey.kid,
        kty: privateKey.kty,
        crv: privateKey.crv,
        x: privateKey.x,
        d: privateKey.d,
      },
      errorPath,
    });
    const publicResult = await insert({
      query,
      params: {
        key_type: publicKey.keyType,
        kid: publicKey.kid,
        kty: publicKey.kty,
        crv: publicKey.crv,
        x: publicKey.x,
        d: publicKey.d,
      },
      errorPath,
    });
    return !!privateResult && !!publicResult;
  };
}
