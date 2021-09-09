import { queryGen } from "aba-node";
import { adaptersTypes } from "../../types";

export function buildInitDb(args: adaptersTypes.IBuildInit) {
  const { init } = args;

  const errorPath = "business service, adapters, init db";
  return async function initDb() {
    const { createTableQuery, createMaterialView, selectQuery, operators } =
      queryGen;
    const { notNull } = operators;
    const createStaffCustomerTable = createTableQuery({
      name: "staff_customer",
      version: "v1",
      columns: [
        { name: "staff_id", type: "UUID" },
        { name: "customer_id", type: "UUID" },
        { name: "name", type: "TEXT" },
        { name: "image_url", type: "TEXT" },
        { name: "description", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["staff_id"],
        cluster: ["created_at", "customer_id"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const customerStaffMVSelect = selectQuery({
      table: "staff_customer",
      version: "v1",
      columns: ["*"],
      where: [
        notNull("staff_id"),
        notNull("created_at"),
        notNull("customer_id"),
        notNull("soft_deleted"),
      ],
    });
    const createCustomerStaffMV = createMaterialView({
      name: "staff_customer_by_customer_id",
      version: "v1",
      selectQuery: customerStaffMVSelect,
      primaryKey: {
        partition: ["customer_id"],
        cluster: ["soft_deleted", "created_at", "staff_id"],
      },
    });

    const createCustomerStaffRequestTable = createTableQuery({
      name: "customer_staff_request",
      version: "v1",
      columns: [
        { name: "staff_id", type: "UUID" },
        { name: "customer_id", type: "UUID" },
        { name: "name", type: "TEXT" },
        { name: "image_url", type: "TEXT" },
        { name: "confirmed", type: "BOOLEAN" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["staff_id"],
        cluster: ["created_at", "customer_id"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const createCustomerRequestMVQuery = selectQuery({
      table: "customer_staff_request",
      version: "v1",
      columns: ["*"],
      where: [
        notNull("staff_id"),
        notNull("created_at"),
        notNull("customer_id"),
        notNull("soft_deleted"),
      ],
    });
    const createCustomerRequestMV = createMaterialView({
      name: "customer_staff_request_by_customer_id",
      version: "v1",
      selectQuery: createCustomerRequestMVQuery,
      primaryKey: {
        partition: ["customer_id"],
        cluster: ["soft_deleted", "created_at", "staff_id"],
      },
    });

    await init({ query: createStaffCustomerTable.query, errorPath });
    await init({ query: createCustomerStaffMV.query, errorPath });
    await init({ query: createCustomerStaffRequestTable.query, errorPath });
    await init({ query: createCustomerRequestMV.query, errorPath });
  };
}
