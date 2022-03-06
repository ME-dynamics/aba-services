import { queryGen } from "aba-node";

import { adaptersTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "secret_key",
    version: "v1",
    values: [
      { column: "key_type", dynamicValue: true },
      { column: "kid", dynamicValue: true },
      { column: "kty", dynamicValue: true },
      { column: "crv", dynamicValue: true },
      { column: "x", dynamicValue: true },
      { column: "d", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertSecretKeys(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert secret keys";
  const { query, logQuery } = insertQueryGen();
  return async function insertSecretKeys(
    keys: adaptersTypes.IInsertSecretKeys
  ) {
    const { privateKey, publicKey } = keys;
    const privateParams = {
      key_type: privateKey.keyType,
      kid: privateKey.kid,
      kty: privateKey.kty,
      crv: privateKey.crv,
      x: privateKey.x,
      d: privateKey.d,
    };
    const publicParams = {
      key_type: publicKey.keyType,
      kid: publicKey.kid,
      kty: publicKey.kty,
      crv: publicKey.crv,
      x: publicKey.x,
      d: publicKey.d,
    };
    await Promise.all([
      insert({ query, params: privateParams, errorPath }),
      insert({ query, params: publicParams, errorPath }),
      insert({ query: logQuery, params: privateParams, errorPath }),
      insert({ query: logQuery, params: publicParams, errorPath }),
    ]);
  };
}
