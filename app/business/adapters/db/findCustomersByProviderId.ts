import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customers_by_provider_id",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "provider_id", self: true }),
      equal({ argument: "request_confirmed", equals: true }),
    ],
  });
  return query;
}

export function buildFindCustomersByProviderId(
  args: adaptersTypes.IBuildFindCustomer
) {
  const { select, rowToCustomers } = args;
  const errorPath = "business, adapters, find customer by provider id";
  const query = selectQueryGen();
  return async function findCustomersByProviderId(
    providerId: string
  ): Promise<entityTypes.IMadeCustomersObject[] | undefined> {
    const result = await select({
      query,
      params: { provider_id: providerId },
      unique: false,
      queryOptions: undefined,
      errorPath,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const providerCustomers: entityTypes.IMadeCustomersObject[] = [];
    for (let index = 0; index < length; index++) {
      const row = result.rows[index];
      if (row.get("soft_deleted")) {
        continue;
      }
      providerCustomers.push(rowToCustomers(row));
    }
    if (providerCustomers.length === 0) {
      return undefined;
    }
    return providerCustomers;
  };
}
