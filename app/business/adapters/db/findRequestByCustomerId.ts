import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customer_provider_request_by_customer_id",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "customer_id", self: true }),
      equal({ argument: "soft_deleted", equals: false }),
    ],
  });
  return query;
}

export function buildFindRequestByCustomerId(
  args: adaptersTypes.IBuildFindRequests
) {
  const { select, rowToCustomerProviderRequest } = args;
  const errorPath = "business, adapters, find request by customer id";
  const query = selectQueryGen();
  return async function findRequestByCustomerId(
    customerId: string
  ): Promise<entityTypes.IMadeCustomerProviderRequestObject | undefined> {
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
    return rowToCustomerProviderRequest(result.first());
  };
}
