import { queryGen } from "aba-node";
import {  adaptersTypes, entityTypes } from "../../types";

/**
 * generates query for find otp by token,
 * using this function allow us to avoid queryGen object closure in findOtpByToken function
 * @returns {string} query
 */
function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "otp",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "otp_token", dynamicValue: true })],
  });
  return query;
}

export function buildFindOtpByToken(args: adaptersTypes.IBuildFindOtpBy) {
  const { select, rowToOtp } = args;
  const errorPath = "authnz service, adapters, find by otp_token";
  const query = selectQueryGen();
  return async function findOtpByToken(
    otpToken: string
  ): Promise<entityTypes.IMadeOtpObject | undefined> {
    const result = await select({
      query,
      params: { otp_token: otpToken },
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
