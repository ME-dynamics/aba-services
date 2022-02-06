import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "providers",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "role", staticValue: "'provider'" })],
  });
  return query;
}

export function buildFindProviders(args: adapterTypes.IBuildFindProviders) {
  const { select, rowToUser } = args;
  const errorPath = "user, adapters, db, find providers";
  const query = selectQueryGen();
  return async function findProviders(): Promise<
    entityTypes.IMadeUserObject[] | undefined
  > {
    const result = await select({
      query,
      params: undefined,
      unique: false,
      queryOptions: undefined,
      errorPath,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const providers: entityTypes.IMadeUserObject[] = [];
    for (let index = 0; index < length; index++) {
      const row = result.rows[index];
      providers.push(rowToUser(row));
    }
    return providers;
  };
}
