import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInit) {
  const { init } = args;
  const errorPath = "form, adapters, init db";
  return async function initDb() {
    const {
      createTableQuery,
      createMaterialView,
      selectQuery,
      createTypeQuery,
      createIndexQuery,
      operators,
    } = queryGen;
    const createTestResultType = createTypeQuery({
      typeName: "test_result",
      version: applicationVersion,
      columns: [
        { columnName: "type", columnType: "TEXT" },
        { columnName: "variable", columnType: "TEXT" },
        {
          columnName: "label",
          columnType: "MAP",
          mapType: { keyType: "TEXT", valueType: "TEXT" },
        },
        { columnName: "rawscore", columnType: "SMALLINT" },
        { columnName: "baserate", columnType: "SMALLINT" },
        { columnName: "interpret", columnType: "TEXT" },
      ],
    });

    const createTestDataTable = createTableQuery({
      name: "test_data",
      version: applicationVersion,
      columns: [
        { columnName: "id", columnType: "UUID" },
        { columnName: "user_id", columnType: "UUID" },
        { columnName: "structure_id", columnType: "TEXT" },
        { columnName: "short_name", columnType: "TEXT" },
        {
          columnName: "title",
          columnType: "MAP",
          mapType: {
            keyType: "TEXT",
            valueType: "TEXT",
          },
        },
        {
          columnName: "fields",
          columnType: "MAP",
          mapType: {
            keyType: "TEXT",
            valueType: "TINYINT",
          },
        },
        {
          columnName: "results",
          columnType: "SET",
          setType: "UDT",
          udtName: createTestResultType.name,
        },
        {
          columnName: "result_summary",
          columnType: "TEXT",
        },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["user_id"],
        cluster: ["created_at"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const { notNull } = operators;
    const structureMVQuery = selectQuery({
      table: "test_data",
      version: applicationVersion,
      columns: ["*"],
      where: [
        notNull("structure_id"),
        notNull("user_id"),
        notNull("created_at"),
      ],
    });
    const createStructureIdMV = createMaterialView({
      materialViewName: "test_data_by_structure",
      version: applicationVersion,
      selectQuery: structureMVQuery,
      primaryKey: {
        partition: ["user_id"],
        cluster: ["structure_id", "created_at"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const createTestDataIdIndex = createIndexQuery({
      indexName: "test_data_id",
      indexOnTable: "test_data",
      version: applicationVersion,
      indexKey: "id",
    });
    await init({ query: createTestResultType.query, errorPath }),
      await init({ query: createTestDataTable.query, errorPath });
    await init({ query: createTestDataTable.logQuery, errorPath });
    await init({ query: createTestDataIdIndex, errorPath });
    await init({ query: createStructureIdMV.query, errorPath });
  };
}
