import { queryGen } from "aba-node";
import { adapterTypes } from "../../types";


function selectQueryGen() {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "users",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "phone_number", self: true })],
  });
  return query;
}


export function buildFindUserByPhoneNumber(args: adapterTypes.IBuildFindUserBy) {
  const { select, rowToUser } = args;
  const errorPath = "user service, adapters, find user by phone number";
  const query = selectQueryGen();
  return async function findUserByPhoneNumber(phoneNumber: string) {
    const result = await select({
      query,
      params: {
        phone_number: phoneNumber,
      },
      errorPath,
      unique: true,
      queryOptions: undefined
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToUser(result.first());
  };
}
