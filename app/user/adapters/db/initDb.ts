import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";

import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInitDb) {
  const { init } = args;
  const errorPath = "user service, adapters , init db";

  return async function initDb() {
    const {
      createTableQuery,
      createIndexQuery,
      createTypeQuery,
      createMaterialView,
      selectQuery,
      operators,
    } = queryGen;
    const { equal, notNull } = operators;
    const createUserTableQuery = createTableQuery({
      name: "users",
      version: "v1",
      columns: [
        { columnName: "id", columnType: "UUID" },
        { columnName: "role", columnType: "TEXT" },
        { columnName: "username", columnType: "TEXT" },
        { columnName: "phone_number", columnType: "TEXT" },
        { columnName: "first_name", columnType: "TEXT" },
        { columnName: "last_name", columnType: "TEXT" },
        { columnName: "description", columnType: "TEXT" },
        { columnName: "gender", columnType: "TEXT" },
        { columnName: "birthday", columnType: "TIMESTAMP" },
        { columnName: "profile_picture_url", columnType: "TEXT" },
        { columnName: "address", columnType: "TEXT" },
        { columnName: "telephone", columnType: "TEXT" },
        { columnName: "deactivation_reason", columnType: "TEXT" },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["id"],
        cluster: ["created_at"],
      },
    });
    const providerSelect = selectQuery({
      table: "users",
      version: "v1",
      columns: ["*"],
      where: [
        equal({ argument: "role", staticValue: "'provider'" }),
        notNull("created_at"),
      ],
    });
    const providersMV = createMaterialView({
      materialViewName: "providers",
      version: "v1",
      selectQuery: providerSelect,
      primaryKey: {
        partition: ["role"],
        cluster: ["created_at", "id"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    // const siblingsUDT = createTypeQuery({
    //   name: "siblings",
    //   version: applicationVersion,
    //   columns: [
    //     { name: "role", type: "TEXT" },
    //     { name: "education", type: "TEXT" },
    //     { name: "academic_fields", type: "TEXT" },
    //     { name: "emotional_relation", type: "TEXT" },
    //     { name: "mind_diseases", type: "TEXT" },
    //   ],
    // });
    const phoneNumberIndex = createIndexQuery({
      indexName: "user_by_phone_number",
      indexKey: "phone_number",
      indexOnTable: "users",
      version: "v1",
    });
    const createPatientTable = createTableQuery({
      name: "patients",
      version: "v1",
      columns: [
        { columnName: "user_id", columnType: "UUID" },
        { columnName: "problem_description", columnType: "TEXT" },
        { columnName: "marital_status", columnType: "TEXT" },
        { columnName: "marital_state", columnType: "TEXT" },
        { columnName: "education", columnType: "TEXT" },
        { columnName: "academic_field", columnType: "TEXT" },
        { columnName: "religion", columnType: "TEXT" },
        { columnName: "job", columnType: "TEXT" },
        { columnName: "body_diseases", columnType: "TEXT" },
        { columnName: "mind_diseases", columnType: "TEXT" },
        { columnName: "drug_use", columnType: "TEXT" },
        { columnName: "addiction", columnType: "TEXT" },
        { columnName: "is_father_alive", columnType: "BOOLEAN" },
        { columnName: "is_mother_alive", columnType: "BOOLEAN" },
        { columnName: "father_death_reason", columnType: "TEXT" },
        { columnName: "mother_death_reason", columnType: "TEXT" },
        { columnName: "cousin_marriage", columnType: "BOOLEAN" },
        { columnName: "siblings_position", columnType: "TINYINT" },
        { columnName: "siblings", columnType: "TEXT" },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["user_id"],
      },
    });
    // await init({ query: siblingsUDT.query, errorPath });
    await init({ query: createUserTableQuery.query, errorPath });
    await init({ query: createUserTableQuery.logQuery, errorPath });
    await init({ query: createPatientTable.query, errorPath });
    await init({ query: createPatientTable.logQuery, errorPath });
    await init({ query: phoneNumberIndex, errorPath });
    await init({ query: providersMV.query, errorPath });
  };
}
