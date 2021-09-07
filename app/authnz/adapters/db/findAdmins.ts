import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "role",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "admin", equals: true })],
  });
  return query;
}

export function buildFindAdmins(args: adaptersTypes.IBuildFindAdmins) {
  const { select, rowToRole } = args;
  const errorPath = "authnz, adapters, db, find admin";
  const query = selectQueryGen();
  return async function findAdmin(): Promise<
    entityTypes.IMadeRoleObject[] | undefined
  > {
    const result = await select({
      query,
      params: undefined,
      queryOptions: undefined,
      unique: false,
      errorPath,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const roles: entityTypes.IMadeRoleObject[] = [];
    for (let index = 0; index < length; index++) {
      const row = result.rows[index];
      roles.push(rowToRole(row));
    }
    return roles;
  };
}
