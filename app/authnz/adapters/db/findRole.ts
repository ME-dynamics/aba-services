import { queryGen } from "aba-node";
import { IBuildFindRole, IMadeRoleObject } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "role",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "otp_id", self: true })],
  });
  return query;
}

export function buildFindRole(args: IBuildFindRole) {
  const { select, rowToRole } = args;
  const errorPath = "authnz, adapters, find role";
  const query = selectQueryGen();
  return async function findRole(
    otpId: string
  ): Promise<IMadeRoleObject | undefined> {
    const result = await select({
      query,
      params: { otp_id: otpId },
      errorPath,
      unique: true,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToRole(result.first());
  };
}
