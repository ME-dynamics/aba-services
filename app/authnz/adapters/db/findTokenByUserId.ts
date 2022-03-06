import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "token",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "otp_id", dynamicValue: true }),
      equal({ argument: "device_id", dynamicValue: true }),
    ],
  });
  return query;
}

export function buildFindTokenByUserId(
  args: adaptersTypes.IBuildFindTokenByUserId
) {
  const { select, rowToToken } = args;
  const errorPath = "authnz, adapters, find token by user id";
  const query = selectQueryGen();
  return async function findTokenByUserId(
    info: adaptersTypes.IFindTokenByUserId
  ): Promise<entityTypes.IMadeTokenObject | undefined> {
    const { userId, deviceId } = info;
    const result = await select({
      query,
      params: { otp_id: userId, device_id: deviceId },
      unique: false,
      errorPath,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToToken(result.first());
  };
}
