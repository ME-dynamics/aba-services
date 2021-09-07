import { queryGen } from "aba-node";
import { adaptersTypes } from "../../types";

function selectQueryGen() {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const privateKeyQuery = selectQuery({
    table: "secret_key",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "key_type", equals: "'private'" }), // should be "'private'" for query to work
      equal({ argument: "kid", self: true }),
    ],
  });
  const publicKeyQuery = selectQuery({
    table: "secret_key",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "key_type", equals: "'public'" }),
      equal({ argument: "kid", self: true }),
    ],
  });
  return { privateKeyQuery, publicKeyQuery };
}

export function buildFindSecretKeys(args: adaptersTypes.IBuildFindSecretKeys) {
  const { select, rowToKey } = args;
  const errorPath = "authnz, adapters, find secret keys";
  const { privateKeyQuery, publicKeyQuery } = selectQueryGen();
  return async function findSecretKeys(
    version: number
  ): Promise<adaptersTypes.IFindSecretKeysResult | undefined> {
    const [privateRow, publicRow] = await Promise.all([
      select({
        query: privateKeyQuery,
        params: { kid: version },
        unique: true,
        errorPath,
        queryOptions: undefined,
      }),
      select({
        query: publicKeyQuery,
        params: { kid: version },
        unique: true,
        errorPath,
        queryOptions: undefined,
      }),
    ]);

    if (privateRow.rowLength === 0 || publicRow.rowLength === 0) {
      return undefined;
    }
    const privateKey = rowToKey(privateRow.first());
    const publicKey = rowToKey(publicRow.first());
    return {
      privateKey,
      publicKey,
    };
  };
}
