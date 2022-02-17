import { queryGen } from "aba-node";
import type { adaptersTypes, entityTypes } from "../../types";

/**
 * generates query for find otp by phone,
 * using this function allow us to avoid queryGen object closure in findOtpByPhone function
 * @returns {string} query
 */
function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "otp",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "phone_number", dynamicValue: true })],
  });
  return query;
}

export function buildFindOtpByPhone(args: adaptersTypes.IBuildFindOtpBy) {
  const { select, rowToOtp } = args;
  const errorPath = "authnz service, adapters, find by phone";
  const query = selectQueryGen();
  return async function findOtpByPhone(
    phoneNumber: string
  ): Promise<entityTypes.IMadeOtpObject | undefined> {
    const result = await select({
      query,
      params: { phone_number: phoneNumber },
      errorPath,
      unique: true,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToOtp(result.first());
  };
}
