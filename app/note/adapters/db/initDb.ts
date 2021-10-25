import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInitDb) {
  const { init } = args;
  const errorPath = "notes, adapters, init db";
  return async function initDb() {
    const { createTableQuery, createIndexQuery } = queryGen;
    const createNoteTable = createTableQuery({
      name: "notes",
      version: applicationVersion,
      columns: [
        { name: "provider_id", type: "UUID" },
        { name: "customer_id", type: "UUID" },
        { name: "id", type: "UUID" },
        { name: "title", type: "TEXT" },
        { name: "content", type: "TEXT" },
        { name: "image_ids", type: "SET", setType: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["provider_id", "customer_id"],
        cluster: ["created_at"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const noteIdIndex = createIndexQuery({
      table: "notes",
      name: "note_id",
      indexKey: "id",
      version: applicationVersion,
    });
    await init({ query: createNoteTable.query, errorPath });
    await init({ query: noteIdIndex, errorPath });
  };
}
