import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "patients",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "user_id", dynamicValue: true })],
  });
  return query;
}

export function buildFindPatientByUserId(
  args: adapterTypes.IBuildFindPatientByUserId
) {
  const { select, rowToPatient } = args;
  const errorPath = "user, adapters, db, find patient by user id";
  const query = selectQueryGen();
  return async function findPatientByUserId(
    userId: string
  ): Promise<entityTypes.IMadePatientObject | undefined> {
    const result = await select({
      query,
      params: { user_id: userId },
      unique: true,
      queryOptions: undefined,
      errorPath,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToPatient(result.first());
  };
}
