import { queryGen } from "aba-node";
import type { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInitDb) {
  const { init } = args;
  const errorPath = "notification service, adapters, db, init db";
  const { createTableQuery, createIndexQuery } = queryGen;
  return async function initDb() {
    const createNotificationTable = createTableQuery({
      name: "notifications",
      version: "v1",
      columns: [
        { columnName: "user_id", columnType: "UUID" },
        { columnName: "id", columnType: "UUID" },
        { columnName: "message", columnType: "TEXT" },
        { columnName: "message_id", columnType: "TEXT" },
        { columnName: "sent", columnType: "BOOLEAN" },
        { columnName: "received", columnType: "BOOLEAN" },
        { columnName: "read", columnType: "BOOLEAN" },
        {
          columnName: "metadata",
          columnType: "MAP",
          mapType: { keyType: "TEXT", valueType: "TEXT" },
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
    const notificationIdIndex = createIndexQuery({
      indexName: "notifications_id",
      version: "v1",
      indexOnTable: "notifications",
      indexKey: "id",
    });
    await Promise.all([
      init({ query: createNotificationTable.query, errorPath }),
      init({ query: createNotificationTable.logQuery, errorPath }),
    ]);
    await init({ query: notificationIdIndex, errorPath });
  };
}
