import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";

import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInitDb) {
  const { init } = args;
  const errorPath = "user service, adapters , init db";

  return async function initDb() {
    const { createTableQuery, createIndexQuery, createTypeQuery } = queryGen;
    const createUserTableQuery = createTableQuery({
      name: "users",
      version: "v1",
      columns: [
        { name: "id", type: "UUID" },
        { name: "username", type: "TEXT" },
        { name: "phone_number", type: "TEXT" },
        { name: "first_name", type: "TEXT" },
        { name: "last_name", type: "TEXT" },
        { name: "profile_picture_url", type: "TEXT" },
        { name: "gender", type: "TEXT" },
        { name: "address", type: "TEXT" },
        { name: "telephone", type: "TEXT" },
        { name: "deactivation_reason", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["id"],
      },
    });
    const siblingsUDT = createTypeQuery({
      name: "siblings",
      version: applicationVersion,
      columns: [
        { name: "role", type: "TEXT" },
        { name: "education", type: "TEXT" },
        { name: "academic_fields", type: "TEXT" },
        { name: "emotional_relation", type: "TEXT" },
        { name: "mind_diseases", type: "TEXT" },
      ],
    });
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
        { name: "birthday", type: "TIMESTAMP" },
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
        { name: "cousin_marriage", type: "BOOLEAN" },
        { name: "siblings_position", type: "TINYINT" },
        {
          name: "siblings",
          type: "SET",
          setType: "UDT",
          udtName: siblingsUDT.entityName,
        },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["user_id"],
      },
    });
    await init({ query: siblingsUDT.query, errorPath });
    await init({ query: createUserTableQuery.query, errorPath });
    await init({ query: createPatientTable.query, errorPath });
    await init({ query: phoneNumberIndex, errorPath });
  };
}
