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
        { name: "id", type: "UUID" },
        { name: "role", type: "TEXT" },
        { name: "username", type: "TEXT" },
        { name: "phone_number", type: "TEXT" },
        { name: "first_name", type: "TEXT" },
        { name: "last_name", type: "TEXT" },
        { name: "description", type: "TEXT" },
        { name: "gender", type: "TEXT" },
        { name: "birthday", type: "TIMESTAMP" },
        { name: "profile_picture_url", type: "TEXT" },
        { name: "address", type: "TEXT" },
        { name: "telephone", type: "TEXT" },
        { name: "deactivation_reason", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
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
        equal({ argument: "role", equals: "'provider'" }),
        notNull("created_at"),
      ],
    });
    const providersMV = createMaterialView({
      name: "providers",
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
      name: "user_by_phone_number",
      indexKey: "phone_number",
      table: "users",
      version: "v1",
    });
    const createPatientTable = createTableQuery({
      name: "patients",
      version: "v1",
      columns: [
        { name: "user_id", type: "UUID" },
        { name: "problem_description", type: "TEXT" },
        { name: "marital_status", type: "TEXT" },
        { name: "marital_state", type: "TEXT" },
        { name: "education", type: "TEXT" },
        { name: "academic_field", type: "TEXT" },
        { name: "religion", type: "TEXT" },
        { name: "job", type: "TEXT" },
        { name: "body_diseases", type: "TEXT" },
        { name: "mind_diseases", type: "TEXT" },
        { name: "drug_use", type: "TEXT" },
        { name: "addiction", type: "TEXT" },
        { name: "is_father_alive", type: "BOOLEAN" },
        { name: "is_mother_alive", type: "BOOLEAN" },
        { name: "father_death_reason", type: "TEXT" },
        { name: "mother_death_reason", type: "TEXT" },
        { name: "cousin_marriage", type: "BOOLEAN" },
        { name: "siblings_position", type: "TINYINT" },
        { name: "siblings", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["user_id"],
      },
    });
    // await init({ query: siblingsUDT.query, errorPath });
    await init({ query: createUserTableQuery.query, errorPath });
    await init({ query: createPatientTable.query, errorPath });
    await init({ query: phoneNumberIndex, errorPath });
    await init({ query: providersMV.query, errorPath });
  };
}
