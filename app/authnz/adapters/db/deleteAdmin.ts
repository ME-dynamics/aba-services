import { queryGen } from "aba-node";
import { adaptersTypes } from "../../types";

function deleteQueryGen(): string {
  const { deleteQuery, operators } = queryGen;
  const { equal } = operators;
  const query = deleteQuery({
    table: "role",
    version: "v1",
    columns: undefined,
    where: [equal({ argument: "otp_id", self: true })],
  });
  return query;
}

export function buildDeleteAdmin(args: adaptersTypes.IBuildDeleteAdmin) {
  const { remove } = args;
  const errorPath = "authnz, adapters, db , delete admin";
  const query = deleteQueryGen();
  return async function deleteAdmin(otpId: string) {
    await remove({ query, params: { otp_id: otpId }, errorPath });
  };
}
