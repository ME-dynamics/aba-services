import { queryGen } from "aba-node";
import { adaptersTypes } from "../../types";

function deleteQueryGen() {
  const { deleteQuery, operators } = queryGen;
  const { equal } = operators;
  const query = deleteQuery({
    table: "role",
    version: "v1",
    columns: undefined,
    where: [equal({ argument: "otp_id", dynamicValue: true })],
    logIdLabel: "otp_id",
  });
  return query;
}

export function buildDeleteAdmin(args: adaptersTypes.IBuildDeleteAdmin) {
  const { remove, insert } = args;
  const errorPath = "authnz, adapters, db , delete admin";
  const { logQuery, query } = deleteQueryGen();
  return async function deleteAdmin(otpId: string) {
    await Promise.all([
      remove({ query, params: { otp_id: otpId }, errorPath }),
      insert({ query: logQuery, params: { otp_id: otpId }, errorPath }),
    ]);
  };
}
