import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import type { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "test_data",
    version: applicationVersion,
    columns: [
      "id",
      "user_id",
      "structure_id",
      "short_name",
      "title",
      "result_summary",
      "created_at",
      "modified_at",
    ],
    where: [equal({ argument: "user_id", dynamicValue: true })],
  });
  return query;
}

export function buildFindTestsDataByUserId(
  args: adapterTypes.IBuildFindTestData
) {
  const { select, rowToTestData } = args;
  const errorPath = "adapters, find test data by user id";
  const query = selectQueryGen();

  return async function findTestsDataByUserId(userId: string) {
    const result = await select({
      query,
      params: { user_id: userId },
      errorPath,
      queryOptions: undefined,
      unique: false,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const testsData: entityTypes.IMadeTestDataObject[] = [];
    for (let index = 0; index < result.rows.length; index++) {
      const testData = result.rows[index];
      testsData.push(rowToTestData(testData));
    }
    return testsData;
  };
}
