import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customer_staff_request",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "staff_id", self: true })],
  });
  return query;
}

export function buildFindRequestsByStaffId(
  args: adaptersTypes.IBuildFindRequests
) {
  const { select, rowToCustomerStaffRequest } = args;
  const errorPath = "business, adapters, find requests by staff id";
  const query = selectQueryGen();
  return async function findRequestsByStaffId(
    staffId: string
  ): Promise<entityTypes.IMadeCustomerStaffRequestObject[] | undefined> {
    const result = await select({
      query,
      params: { staff_id: staffId },
      unique: false,
      queryOptions: undefined,
      errorPath,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const requests: entityTypes.IMadeCustomerStaffRequestObject[] = [];
    for (let index = 0; index < length; index++) {
      const row = result.rows[index];
      if (row.get("soft_deleted")) {
        continue;
      }
      requests.push(rowToCustomerStaffRequest(row));
    }
    if (requests.length === 0) {
      return undefined;
    }
    return requests;
  };
}
