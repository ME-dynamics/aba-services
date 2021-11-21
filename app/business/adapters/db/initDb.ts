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
        { name: "customer_id", type: "UUID" },
        { name: "provider_id", type: "UUID" },
        { name: "business_id", type: "UUID" },
        { name: "request_confirmed", type: "BOOLEAN" },
        { name: "name", type: "TEXT" },
        { name: "profile_picture_url", type: "TEXT" },
        { name: "description", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
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
      name: "customers_by_provider_id",
      version: applicationVersion,
      selectQuery: customersSelect,
      primaryKey: {
        partition: ["provider_id"],
        cluster: ["request_confirmed", "customer_id", "business_id"],
      },
    });
    // const createProviderCustomerTable = createTableQuery({
    //   name: "provider_customer",
    //   version: "v1",
    //   columns: [
    //     { name: "provider_id", type: "UUID" },
    //     { name: "customer_id", type: "UUID" },
    //     { name: "name", type: "TEXT" },
    //     { name: "profile_picture_url", type: "TEXT" },
    //     { name: "description", type: "TEXT" },
    //     { name: "created_at", type: "TIMESTAMP" },
    //     { name: "modified_at", type: "TIMESTAMP" },
    //     { name: "soft_deleted", type: "BOOLEAN" },
    //   ],
    //   primaryKey: {
    //     partition: ["provider_id"],
    //     cluster: ["created_at", "customer_id"],
    //   },
    //   orderBy: [{ key: "created_at", type: "DESC" }],
    // });
    // const customerProviderMVSelect = selectQuery({
    //   table: "provider_customer",
    //   version: "v1",
    //   columns: ["*"],
    //   where: [
    //     notNull("provider_id"),
    //     notNull("created_at"),
    //     notNull("customer_id"),
    //     notNull("soft_deleted"),
    //   ],
    // });
    // const createCustomerProviderMV = createMaterialView({
    //   name: "provider_customer_by_customer_id",
    //   version: "v1",
    //   selectQuery: customerProviderMVSelect,
    //   primaryKey: {
    //     partition: ["customer_id"],
    //     cluster: ["soft_deleted", "created_at", "provider_id"],
    //   },
    // });

    // const createCustomerProviderRequestTable = createTableQuery({
    //   name: "customer_provider_request",
    //   version: "v1",
    //   columns: [
    //     { name: "provider_id", type: "UUID" },
    //     { name: "customer_id", type: "UUID" },
    //     { name: "name", type: "TEXT" },
    //     { name: "profile_picture_url", type: "TEXT" },
    //     { name: "confirmed", type: "BOOLEAN" },
    //     { name: "created_at", type: "TIMESTAMP" },
    //     { name: "modified_at", type: "TIMESTAMP" },
    //     { name: "soft_deleted", type: "BOOLEAN" },
    //   ],
    //   primaryKey: {
    //     partition: ["provider_id"],
    //     cluster: ["created_at", "customer_id"],
    //   },
    //   orderBy: [{ key: "created_at", type: "DESC" }],
    // });
    // const createCustomerRequestMVQuery = selectQuery({
    //   table: "customer_provider_request",
    //   version: "v1",
    //   columns: ["*"],
    //   where: [
    //     notNull("provider_id"),
    //     notNull("created_at"),
    //     notNull("customer_id"),
    //     notNull("soft_deleted"),
    //   ],
    // });
    // const createCustomerRequestMV = createMaterialView({
    //   name: "customer_provider_request_by_customer_id",
    //   version: "v1",
    //   selectQuery: createCustomerRequestMVQuery,
    //   primaryKey: {
    //     partition: ["customer_id"],
    //     cluster: ["soft_deleted", "created_at", "provider_id"],
    //   },
    // });

    await init({ query: createCustomersTable.query, errorPath });
    await init({ query: createCustomersByProviderIdMV.query, errorPath });
  };
}
