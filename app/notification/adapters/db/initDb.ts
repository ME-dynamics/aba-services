import { queryGen } from "aba-node";
import type { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInitDb) {
  const { init } = args;
  const errorPath = "notification service, adapters, db, init db";
  const { createTableQuery, createIndexQuery } = queryGen;
  return async function initDb() {
    // notifications table
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
    // TODO: should save this in vault
    const createNotificationTokenTable = createTableQuery({
      name: "notification_tokens",
      version: "v1",
      columns: [
        { columnName: "provider_type", columnType: "TEXT" },
        { columnName: "provider", columnType: "TEXT" },
        { columnName: "xtoken", columnType: "TEXT" }, // token is a reserved word
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["provider_type"],
        cluster: ["provider"],
      },
    });
    await Promise.all([
      init({ query: createNotificationTable.query, errorPath }),
      init({ query: createNotificationTable.logQuery, errorPath }),
      init({query: createNotificationTokenTable.query, errorPath}),
      init({query: createNotificationTokenTable.logQuery, errorPath})
    ]);
    await init({ query: notificationIdIndex, errorPath });
  };
}
