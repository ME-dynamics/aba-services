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
  const { rowToCustomers, select } = args;
  const errorPath = "business, adapters, find customer";
  const query = selectQueryGen();
  return async function findCustomer(
    customerId: string
  ): Promise<entityTypes.IMadeCustomersObject | undefined> {
    const result = await select({
      query,
      params: { customer_id: customerId },
      unique: true,
      queryOptions: undefined,
      errorPath,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    if (result.rowLength === 1) {
      return rowToCustomers(result.first());
    }
    if (result.rowLength > 1) {
      console.warn("customer must have only one provider");
      console.log(JSON.stringify(result.rows, null, 2));
      return undefined;
    }
  };
}
