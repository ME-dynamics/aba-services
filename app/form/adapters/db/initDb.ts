import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInit) {
  const { init } = args;
  const errorPath = "form, adapters, init db";
  return async function initDb() {
    const { createTableQuery, createMaterialView, selectQuery, operators } =
      queryGen;
    // const choiceUDT = createTypeQuery({
    //   name: "choice",
    //   version: applicationVersion,
    //   columns: [
    //     { name: "label", type: "TEXT" },
    //     { name: "value", type: "TINYINT" },
    //   ],
    // });
    // const questionUDT = createTypeQuery({
    //   name: "question",
    //   version: applicationVersion,
    //   columns: [
    //     { name: "question", type: "TEXT" },
    //     {
    //       name: "choices",
    //       type: "SET",
    //       setType: "UDT",
    //       udtName: choiceUDT.entityName,
    //     },
    //   ],
    // });
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
            valueType: "TINYINT",
          },
        },
        {
          name: "aggregates",
          type: "MAP",
          map: {
            keyType: "TEXT",
            valueType: "SMALLINT",
          },
        },
        {
          name: "interpret",
          type: "MAP",
          map: {
            keyType: "TEXT",
            valueType: "TEXT",
          },
        },
        {
          name: "warnings",
          type: "MAP",
          map: {
            keyType: "TEXT",
            valueType: "TEXT",
          },
        },
        {
          name: "validation",
          type: "MAP",
          map: {
            keyType: "TEXT",
            valueType: "TEXT",
          },
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
      where: [notNull("structure_id"), notNull("created_at"), notNull("id")],
    });
    const createStructureIdMV = createMaterialView({
      name: "form_data_by_structure",
      version: applicationVersion,
      selectQuery: structureMVQuery,
      primaryKey: {
        partition: ["user_id"],
        cluster: ["structure_id", "id"],
      },
    });
    // await init({ query: choiceUDT.query, errorPath });
    // await init({ query: questionUDT.query, errorPath });
    // await init({ query: createFromStructureTable.query, errorPath });
    await init({ query: createFormDataTable.query, errorPath });
    await init({ query: createStructureIdMV.query, errorPath });
  };
}
