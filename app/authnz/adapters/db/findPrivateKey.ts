import { queryGen, ErrorFactory } from "aba-node";
import { adaptersTypes } from "../../types";


function selectQueryGen():string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "secret_key",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "key_type", staticValue: "'private'" }), // should be "'private'" for query to work
      equal({ argument: "kid", dynamicValue: true }),
    ],
  });
  return query
}



export function buildFindPrivateKey(args: adaptersTypes.IBuildFindPrivateKey) {
  const { select, rowToKey, importJWK } = args;
  const errorPath = "authnz, adapters, find secret keys";
  const query = selectQueryGen();
  return async function findPrivateKey(

  ): Promise<adaptersTypes.IFindPrivateKeyResult> {
    const privateRow = await select({
      query,
      params: { kid: 1 },
      unique: true,
      errorPath,
      queryOptions: undefined
    });
    if (privateRow.rowLength === 0) {
      throw new ErrorFactory({
        name: "privateKeyUndefined",
        message: "private key should be generated at start",
        detail: "",
        nativeError: undefined,
        path: errorPath,
      });
    }
    const { crv, d, kty, x } = rowToKey(privateRow.first());
    const parsedPrivateKey = await importJWK({
      alg: "EdDSA",
      kty,
      crv,
      d,
      x,
    }, "EdDSA", true);
    return {
      privateKey: parsedPrivateKey,
    };
  };
}
