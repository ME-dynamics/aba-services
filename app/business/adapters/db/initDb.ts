import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adaptersTypes } from "../../types";
export function buildInitDb(args: adaptersTypes.IBuildInit) {
  const { init } = args;

  const errorPath = "business service, adapters, init db";
  return async function initDb() {
    const { createTableQuery, createMaterialView, selectQuery, operators } =
      queryGen;
    const { notNull } = operators;
    const createCustomersTable = createTableQuery({
      name: "customers",
      version: applicationVersion,
      columns: [
        { columnName: "customer_id", columnType: "UUID" },
        { columnName: "provider_id", columnType: "UUID" },
        { columnName: "business_id", columnType: "UUID" },
        { columnName: "request_confirmed", columnType: "BOOLEAN" },
        { columnName: "name", columnType: "TEXT" },
        { columnName: "profile_picture_url", columnType: "TEXT" },
        { columnName: "description", columnType: "TEXT" },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["customer_id"],
        cluster: ["provider_id", "business_id"],
      },
    });
    const customersSelect = selectQuery({
      table: "customers",
      version: applicationVersion,
      columns: ["*"],
      where: [
        notNull("customer_id"),
        notNull("provider_id"),
        notNull("business_id"),
        notNull("request_confirmed"),
      ],
    });
    const createCustomersByProviderIdMV = createMaterialView({
      materialViewName: "customers_by_provider_id",
      version: applicationVersion,
      selectQuery: customersSelect,
      primaryKey: {
        partition: ["provider_id"],
        cluster: ["request_confirmed", "customer_id", "business_id"],
      },
    });
    

    await init({ query: createCustomersTable.query, errorPath });
    await init({ query: createCustomersTable.logQuery, errorPath });
    await init({ query: createCustomersByProviderIdMV.query, errorPath });
  };
}
