import { queryGen } from "aba-node";
import type { adapterTypes, entityTypes } from "../../types";

function selectQueryGen() {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "notification_tokens",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "provider_type", dynamicValue: true })],
  });
  return query;
}

export function buildFindNotificationToken(
  args: adapterTypes.IBuildFindNotificationToken
) {
  const { select, rowToNotificationToken } = args;
  const errorPath =
    "notification service, adapters, db, find notification token";
  const query = selectQueryGen();
  return async function findNotificationToken(
    info: adapterTypes.IFindNotificationToken
  ): Promise<entityTypes.IMadeNotificationTokenObject[] | undefined> {
    const { providerType } = info;
    const result = await select({
      query,
      params: { provider_type: providerType },
      errorPath,
      queryOptions: undefined,
      unique: false,
    });
    const resultLength = result.rowLength;
    if (resultLength === 0) {
      return undefined;
    }
    const notificationTokens: entityTypes.IMadeNotificationTokenObject[] = [];
    for (let index = 0; index < resultLength; index++) {
      notificationTokens.push(rowToNotificationToken(result.rows[index]));
    }
    return notificationTokens;
  };
}
