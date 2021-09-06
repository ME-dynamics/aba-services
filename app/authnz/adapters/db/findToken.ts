import { queryGen } from "aba-node";
import { IBuildFindToken, IFindToken, IMadeTokenObject } from "../../types";

/**
 * generates query for find  token,
 * using this function allow us to avoid queryGen object closure in findToken function
 * @returns {string} query
 */
function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;

  const query = selectQuery({
    table: "token",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "otp_id", self: true })],
  });
  return query;
}

export function buildFindToken(args: IBuildFindToken) {
  const { select, rowToToken } = args;
  const errorPath = "authnz, adapters, find token";
  const query = selectQueryGen();
  return async function findToken(
    info: IFindToken
  ): Promise<IMadeTokenObject | undefined> {
    const { otpId } = info;
    const result = await select({
      query,
      params: { otp_id: otpId },
      unique: true,
      errorPath,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToToken(result.first());
  };
}
