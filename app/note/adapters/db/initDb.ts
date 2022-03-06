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
        { columnName: "provider_id", columnType: "UUID" },
        { columnName: "customer_id", columnType: "UUID" },
        { columnName: "id", columnType: "UUID" },
        { columnName: "title", columnType: "TEXT" },
        { columnName: "content", columnType: "TEXT" },
        { columnName: "image_ids", columnType: "SET", setType: "TEXT" },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["provider_id", "customer_id"],
        cluster: ["created_at"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const noteIdIndex = createIndexQuery({
      indexOnTable: "notes",
      indexName: "note_id",
      indexKey: "id",
      version: applicationVersion,
    });
    await init({ query: createNoteTable.query, errorPath });
    await init({ query: createNoteTable.logQuery, errorPath });
    await init({ query: noteIdIndex, errorPath });
  };
}
