import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";

import type { adaptersTypes } from "../../types";

function deleteQueryGen() {
  const { deleteQuery, operators } = queryGen;
  const { equal } = operators;
  const queries = deleteQuery({
    table: "customers",
    version: applicationVersion,
    columns: undefined,
    logIdLabel: ["customer_id", "provider_id", "business_id"],
    where: [
      equal({ argument: "customer_id", dynamicValue: true }),
      equal({ argument: "provider_id", dynamicValue: true }),
      equal({ argument: "business_id", dynamicValue: true }),
    ],
  });
  return queries;
}

export function buildDeleteCustomer(args: adaptersTypes.IBuildDeleteCustomer) {
  const { remove, insert } = args;
  const errorPath = "business, adapters, db, delete customer";
  const { query, logQuery } = deleteQueryGen();
  return async function deleteCustomer(info: adaptersTypes.IDeleteCustomer) {
    const { customerId, providerId, businessId } = info;
    const params = {
      customer_id: customerId,
      provider_id: providerId,
      business_id: businessId,
    };
    await Promise.all([
      remove({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
