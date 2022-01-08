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
      name: "aggregate",
      version: applicationVersion,
      columns: [
        { name: "title", type: "TEXT" },
        { name: "aggregate", type: "INT" },
      ],
    });
    const createInterpretType = createTypeQuery({
      name: "interpret",
      version: applicationVersion,
      columns: [
        { name: "type", type: "TEXT" },
        { name: "data", type: "TEXT" },
      ],
    });
    const createWarningsType = createTypeQuery({
      name: "warnings",
      version: applicationVersion,
      columns: [
        { name: "title", type: "TEXT" },
        { name: "warning", type: "TEXT" },
      ],
    });
    const createErrorsType = createTypeQuery({
      name: "errors",
      version: applicationVersion,
      columns: [
        { name: "title", type: "TEXT" },
        { name: "error", type: "TEXT" },
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
        { name: "id", type: "UUID" },
        { name: "user_id", type: "UUID" },
        { name: "structure_id", type: "TEXT" },
        { name: "form_name", type: "TEXT" },
        {
          name: "fields",
          type: "MAP",
          map: {
            keyType: "TEXT",
            valueType: "TEXT",
          },
        },
        {
          name: "aggregates",
          type: "SET",
          setType: "UDT",
          udtName: createAggregateType.entityName,
        },
        {
          name: "interpret",
          type: "SET",
          setType: "UDT",
          udtName: createInterpretType.entityName,
        },
        {
          name: "warnings",
          type: "SET",
          setType: "UDT",
          udtName: createWarningsType.entityName,
        },
        {
          name: "errors",
          type: "SET",
          setType: "UDT",
          udtName: createErrorsType.entityName,
        },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
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
      name: "form_data_by_structure",
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
