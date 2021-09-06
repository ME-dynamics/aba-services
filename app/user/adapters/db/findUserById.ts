import { queryGen } from "aba-node";
import { adapterTypes } from "../../types";

function selectQueryGen() {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "users",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "id", self: true })],
  });
  return query;
}

export function buildFindUserById(args: adapterTypes.IBuildFindUserBy) {
  const { select, rowToUser } = args;
  const errorPath = "user service, adapters, find user by id";
  const query = selectQueryGen();
  return async function findUserById(id: string) {
    const result = await select({
      query,
      params: { id },
      errorPath,
      unique: true,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToUser(result.first());
  };
}
