import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import type { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "test_data",
    version: applicationVersion,
    columns: ["*"],
    where: [equal({ argument: "id", dynamicValue: true })],
  });
  return query;
}

export function buildFindTestById(args: adapterTypes.IBuildFindTestData) {
  const { select, rowToTestData } = args;
  const errorPath = "adapters, find test data by user id";
  const query = selectQueryGen();
  return async function findTestById(
    testId: string
  ): Promise<entityTypes.IMadeTestDataObject | undefined> {
    const result = await select({
      query,
      params: { id: testId },
      errorPath,
      queryOptions: undefined,
      unique: true,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToTestData(result.first());
  };
}
