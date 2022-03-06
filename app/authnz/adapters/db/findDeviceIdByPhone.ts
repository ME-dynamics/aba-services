import { queryGen } from "aba-node";
import type { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "device_id",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "device_id", dynamicValue: true }),
      equal({ argument: "phone_number", dynamicValue: true }),
    ],
  });
  return query;
}

export function buildFindDeviceIdByPhone(
  args: adaptersTypes.IBuildFindDeviceId
) {
  const { select, rowToDeviceId } = args;
  const errorPath = "authnz service, adapters, find device id by phone";
  const query = selectQueryGen();
  return async function findDeviceIdByPhone(
    info: adaptersTypes.IFindDeviceIdByPhone
  ): Promise<entityTypes.IMadeDeviceIdObject | undefined> {
    const { deviceId, phoneNumber } = info;
    const result = await select({
      query,
      params: { device_id: deviceId, phone_number: phoneNumber },
      errorPath,
      unique: true,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToDeviceId(result.first());
  };
}
