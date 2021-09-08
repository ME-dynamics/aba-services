import { queryGen } from "aba-node";
import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInit) {
  const { init } = args;
  const errorPath = "storage service, adapters, init db";

  return async function initDb(): Promise<void> {
    const { createTableQuery } = queryGen;
    const createFileSessionTable = createTableQuery({
      name: "file_session",
      version: "v1",
      columns: [
        { name: "session", type: "TEXT" },
        { name: "secret", type: "TEXT" },
        { name: "user_id", type: "UUID" },
        { name: "business_id", type: "TEXT" },
        { name: "access", type: "TEXT" },
        { name: "count_limit", type: "SMALLINT" },
        { name: "size_limit", type: "INT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["session"],
      },
    });
    const createImagesTable = createTableQuery({
      name: "images",
      version: "v1",
      columns: [
        { name: "id", type: "UUID" },
        { name: "user_id", type: "UUID" },
        { name: "access", type: "TEXT" },
        { name: "url", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["id"],
      },
    });
    await init({ query: createFileSessionTable.query, errorPath });
    await init({ query: createImagesTable.query, errorPath });
  };
}
