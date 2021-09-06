import { queryGen, ErrorFactory } from "aba-node";
import { IBuildFindPrivateKey, IFindPrivateKeyResult } from "../../types";


function selectQueryGen():string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "secret_key",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "key_type", equals: "'private'" }), // should be "'private'" for query to work
      equal({ argument: "kid", self: true }),
    ],
  });
  return query
}



export function buildFindPrivateKey(args: IBuildFindPrivateKey) {
  const { select, rowToKey, parseKey } = args;
  const errorPath = "authnz, adapters, find secret keys";
  const query = selectQueryGen();
  return async function findPrivateKey(

  ): Promise<IFindPrivateKeyResult> {
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
    const parsedPrivateKey = await parseKey({
      alg: "EdDSA",
      kty,
      crv,
      d,
      x,
    });
    return {
      privateKey: parsedPrivateKey,
    };
  };
}
