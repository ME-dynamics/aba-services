import { queryGen } from "aba-node";
import type { entityTypes, adapterTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const queries = insertQuery({
    table: "notification_tokens",
    version: "v1",
    values: [
      { column: "provider_type", dynamicValue: true },
      { column: "provider", dynamicValue: true },
      { column: "xtoken", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return queries;
}

export function buildInsertNotificationToken(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath =
    "notification service, adapters, db , insert notification token";
  const { query, logQuery } = insertQueryGen();
  return async function insertNotificationToken(
    notificationToken: entityTypes.IMadeNotificationTokenObject
  ) {
    const { providerType, provider, token, createdAt, modifiedAt } =
      notificationToken;
    const params = {
      provider_type: providerType,
      provider,
      xtoken: token,
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
