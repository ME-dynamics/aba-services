import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customers",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "customer_id", self: true })],
  });
  return query;
}

export function buildFindProviderByCustomerId(
  args: adaptersTypes.IBuildFindCustomer
) {
  const { select, rowToCustomers } = args;
  const errorPath = "business, adapters, find provider by customer id";
  const query = selectQueryGen();
  return async function findProviderByCustomerId(
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
    if (result.rowLength === 1) {
      const customer = rowToCustomers(result.first());
      if (customer.softDeleted || !customer.requestConfirmed) {
        return undefined;
      }
      return customer;
    }
    console.warn("customer can have only one provider");
    console.log(JSON.stringify(result.rows, null, 2));
    return undefined;
  };
}
