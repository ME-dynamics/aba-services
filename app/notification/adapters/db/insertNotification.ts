import { queryGen, undefinedToNull } from "aba-node";
import type { entityTypes, adapterTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const queries = insertQuery({
    table: "notifications",
    version: "v1",
    values: [
      { column: "user_id", dynamicValue: true },
      { column: "id", dynamicValue: true },
      { column: "message", dynamicValue: true },
      { column: "message_id", dynamicValue: true },
      { column: "sent", dynamicValue: true },
      { column: "received", dynamicValue: true },
      { column: "read", dynamicValue: true },
      { column: "metadata", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return queries;
}

export function buildInsertNotification(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "notification service, adapters, db, insert notification";
  const { query, logQuery } = insertQueryGen();
  return async function insertNotification(
    notification: entityTypes.IMadeNotificationObject
  ) {
    const {
      userId,
      id,
      message,
      messageId,
      sent,
      received,
      read,
      metadata,
      createdAt,
      modifiedAt,
    } = notification;
    const params = {
      user_id: userId,
      id,
      message,
      message_id: messageId,
      sent,
      received,
      read,
      metadata: undefinedToNull(metadata),
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({
        query,
        params,
        errorPath,
      }),
      insert({
        query: logQuery,
        params,
        errorPath,
      }),
    ]);
  };
}
