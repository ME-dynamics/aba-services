import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "customer_provider_request",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "provider_id", self: true })],
  });
  return query;
}

export function buildFindRequestsByProviderId(
  args: adaptersTypes.IBuildFindRequests
) {
  const { select, rowToCustomerProviderRequest } = args;
  const errorPath = "business, adapters, find requests by provider id";
  const query = selectQueryGen();
  return async function findRequestsByProviderId(
    providerId: string
  ): Promise<entityTypes.IMadeCustomerProviderRequestObject[] | undefined> {
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
    const requests: entityTypes.IMadeCustomerProviderRequestObject[] = [];
    for (let index = 0; index < length; index++) {
      const row = result.rows[index];
      if (row.get("soft_deleted")) {
        continue;
      }
      requests.push(rowToCustomerProviderRequest(row));
    }
    if (requests.length === 0) {
      return undefined;
    }
    return requests;
  };
}
