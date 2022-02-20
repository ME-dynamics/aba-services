import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "test_data",
    version: applicationVersion,
    values: [
      { column: "id", dynamicValue: true },
      { column: "user_id", dynamicValue: true },
      { column: "structure_id", dynamicValue: true },
      { column: "title", dynamicValue: true },
      { column: "short_name", dynamicValue: true },
      { column: "fields", dynamicValue: true },
      { column: "results", dynamicValue: true },
      { column: "result_summary", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertTestData(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "psychologyTest, adapters, insert test data";
  const { query, logQuery } = insertQueryGen();
  return async function insertTestData(
    formData: entityTypes.IMadeTestDataObject
  ) {
    const {
      userId,
      id,
      structureId,
      title,
      shortName,
      fields,
      results,
      resultSummary,
      createdAt,
      modifiedAt,
    } = formData;
    const params = {
      id,
      user_id: userId,
      structure_id: structureId,
      title,
      short_name: shortName,
      fields,
      results,
      result_summary: resultSummary,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      await insert({ query, params, errorPath }),
      await insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
