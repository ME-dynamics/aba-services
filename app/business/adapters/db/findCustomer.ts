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
    where: [equal({ argument: "customer_id", dynamicValue: true })],
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
      unique: true,
      queryOptions: undefined,
      errorPath,
    });
    if (result.rowLength === 0) {
      return undefined;
    }

    return rowToCustomer(result.first());
  };
}
