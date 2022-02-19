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
      operators,
    } = queryGen;
    const createAggregateType = createTypeQuery({
      typeName: "aggregate",
      version: applicationVersion,
      columns: [
        { columnName: "title", columnType: "TEXT" },
        { columnName: "aggregate", columnType: "INT" },
      ],
    });
    const createInterpretType = createTypeQuery({
      typeName: "interpret",
      version: applicationVersion,
      columns: [
        { columnName: "type", columnType: "TEXT" },
        { columnName: "data", columnType: "TEXT" },
      ],
    });
    const createWarningsType = createTypeQuery({
      typeName: "warnings",
      version: applicationVersion,
      columns: [
        { columnName: "title", columnType: "TEXT" },
        { columnName: "warning", columnType: "TEXT" },
      ],
    });
    const createErrorsType = createTypeQuery({
      typeName: "errors",
      version: applicationVersion,
      columns: [
        { columnName: "title", columnType: "TEXT" },
        { columnName: "error", columnType: "TEXT" },
      ],
    });

    // const createFromStructureTable = createTableQuery({
    //   name: "form_structure",
    //   version: applicationVersion,
    //   columns: [
    //     { name: "id", type: "UUID" },
    //     { name: "title", type: "TEXT" },
    //     { name: "description", type: "TEXT" },
    //     {
    //       name: "fields",
    //       type: "MAP",
    //       map: {
    //         keyType: "TEXT",
    //         valueType: "UDT",
    //         valueUdtName: questionUDT.entityName,
    //       },
    //     },
    //     { name: "created_at", type: "TIMESTAMP" },
    //     { name: "modified_at", type: "TIMESTAMP" },
    //     { name: "soft_deleted", type: "BOOLEAN" },
    //   ],
    //   primaryKey: {
    //     partition: ["id"],
    //   },
    // });
    const createFormDataTable = createTableQuery({
      name: "form_data",
      version: applicationVersion,
      columns: [
        { columnName: "id", columnType: "UUID" },
        { columnName: "user_id", columnType: "UUID" },
        { columnName: "structure_id", columnType: "TEXT" },
        { columnName: "form_name", columnType: "TEXT" },
        {
          columnName: "fields",
          columnType: "MAP",
          mapType: {
            keyType: "TEXT",
            valueType: "TEXT",
          },
        },
        {
          columnName: "aggregates",
          columnType: "SET",
          setType: "UDT",
          udtName: createAggregateType.name,
        },
        {
          columnName: "interpret",
          columnType: "SET",
          setType: "UDT",
          udtName: createInterpretType.name,
        },
        {
          columnName: "warnings",
          columnType: "SET",
          setType: "UDT",
          udtName: createWarningsType.name,
        },
        {
          columnName: "errors",
          columnType: "SET",
          setType: "UDT",
          udtName: createErrorsType.name,
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
      table: "form_data",
      version: applicationVersion,
      columns: ["*"],
      where: [
        notNull("structure_id"),
        notNull("user_id"),
        notNull("created_at"),
      ],
    });
    const createStructureIdMV = createMaterialView({
      materialViewName: "form_data_by_structure",
      version: applicationVersion,
      selectQuery: structureMVQuery,
      primaryKey: {
        partition: ["user_id"],
        cluster: ["structure_id", "created_at"],
      },
    });
    await Promise.all([
      init({ query: createAggregateType.query, errorPath }),
      init({ query: createInterpretType.query, errorPath }),
      init({ query: createWarningsType.query, errorPath }),
      init({ query: createErrorsType.query, errorPath }),
    ]);
    await init({ query: createFormDataTable.query, errorPath });
    await init({ query: createStructureIdMV.query, errorPath });
  };
}
