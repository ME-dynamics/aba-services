import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customers",
    version: applicationVersion,
    columns: ["*"],
    where: [equal({ argument: "customer_id", self: true })],
  });
  return query;
}

export function buildFindCustomer(args: adaptersTypes.IBuildFindCustomer) {
  const { rowToCustomer, select } = args;
  const errorPath = "business, adapters, find customer";
  const query = selectQueryGen();
  return async function findCustomer(
    customerId: string
  ): Promise<entityTypes.IMadeCustomersObject | undefined> {
    const result = await select({
      query,
      params: { customer_id: customerId },
      unique: false,
      queryOptions: undefined,
      errorPath,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    const customers = [];
    for (let index = 0; index < result.rowLength; index++) {
      const customer = result.rows[index];
      if (customer.get("soft_deleted")) {
        continue;
      }
      customers.push(rowToCustomer(customer));
    }
    if (customers.length > 1) {
      console.error("More than one customer found");
      console.log(JSON.stringify(customers, null, 2));
      return undefined;
    }
    return customers[0];
  };
}
