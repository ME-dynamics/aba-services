import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "staff_customer_by_customer_id",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "customer_id", self: true }),
      equal({ argument: "soft_deleted", equals: false }),
    ],
  });
  return query;
}

export function buildFindCustomer(args: adaptersTypes.IBuildFindCustomer) {
  const { rowToProviderCustomer, select } = args;
  const errorPath = "business, adapters, find customer";
  const query = selectQueryGen();
  return async function findCustomer(
    customerId: string
  ): Promise<entityTypes.IMadeProviderCustomerObject | undefined> {
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
    return rowToProviderCustomer(result.first());
  };
}
