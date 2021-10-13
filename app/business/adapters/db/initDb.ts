import { queryGen } from "aba-node";
import { adaptersTypes } from "../../types";

export function buildInitDb(args: adaptersTypes.IBuildInit) {
  const { init } = args;

  const errorPath = "business service, adapters, init db";
  return async function initDb() {
    const { createTableQuery, createMaterialView, selectQuery, operators } =
      queryGen;
    const { notNull } = operators;
    const createProviderCustomerTable = createTableQuery({
      name: "provider_customer",
      version: "v1",
      columns: [
        { name: "provider_id", type: "UUID" },
        { name: "customer_id", type: "UUID" },
        { name: "name", type: "TEXT" },
        { name: "image_url", type: "TEXT" },
        { name: "description", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["provider_id"],
        cluster: ["created_at", "customer_id"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const customerProviderMVSelect = selectQuery({
      table: "provider_customer",
      version: "v1",
      columns: ["*"],
      where: [
        notNull("provider_id"),
        notNull("created_at"),
        notNull("customer_id"),
        notNull("soft_deleted"),
      ],
    });
    const createCustomerProviderMV = createMaterialView({
      name: "provider_customer_by_customer_id",
      version: "v1",
      selectQuery: customerProviderMVSelect,
      primaryKey: {
        partition: ["customer_id"],
        cluster: ["soft_deleted", "created_at", "provider_id"],
      },
    });

    const createCustomerProviderRequestTable = createTableQuery({
      name: "customer_provider_request",
      version: "v1",
      columns: [
        { name: "provider_id", type: "UUID" },
        { name: "customer_id", type: "UUID" },
        { name: "name", type: "TEXT" },
        { name: "image_url", type: "TEXT" },
        { name: "confirmed", type: "BOOLEAN" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["provider_id"],
        cluster: ["created_at", "customer_id"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const createCustomerRequestMVQuery = selectQuery({
      table: "customer_provider_request",
      version: "v1",
      columns: ["*"],
      where: [
        notNull("provider_id"),
        notNull("created_at"),
        notNull("customer_id"),
        notNull("soft_deleted"),
      ],
    });
    const createCustomerRequestMV = createMaterialView({
      name: "customer_provider_request_by_customer_id",
      version: "v1",
      selectQuery: createCustomerRequestMVQuery,
      primaryKey: {
        partition: ["customer_id"],
        cluster: ["soft_deleted", "created_at", "provider_id"],
      },
    });
    await Promise.all([
      init({ query: createProviderCustomerTable.query, errorPath }),
      init({ query: createCustomerProviderMV.query, errorPath }),
      init({ query: createCustomerProviderRequestTable.query, errorPath }),
      init({ query: createCustomerRequestMV.query, errorPath }),
    ]);
  };
}
