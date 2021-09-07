import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "staff_customer",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "staff_id", self: true })],
  });
  return query;
}

export function buildFindCustomersByStaffId(
  args: adaptersTypes.IBuildFindCustomer
) {
  const { select, rowToStaffCustomer } = args;
  const errorPath = "business, adapters, find customer by staff id";
  const query = selectQueryGen();
  return async function findCustomersByStaffId(
    staffId: string
  ): Promise<entityTypes.IMadeStaffCustomerObject[] | undefined> {
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
    const staffCustomers: entityTypes.IMadeStaffCustomerObject[] = [];
    for (let index = 0; index < length; index++) {
      const row = result.rows[index];
      if(row.get("soft_deleted")) {
        continue;
      }
      staffCustomers.push(rowToStaffCustomer(row));
    }
    if(staffCustomers.length === 0) {
      return undefined;
    }
    return staffCustomers;
  };
}
