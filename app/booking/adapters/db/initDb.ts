import { queryGen } from "aba-node";

import type { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInit) {
  const { init } = args;
  const errorPath = "booking service, adapters, db, init db";
  return async function initDb() {
    const {
      createTableQuery,
      createIndexQuery,
      createTypeQuery,
      createMaterialView,
      selectQuery,
      operators,
    } = queryGen;
    const { notNull } = operators;
    const userMetaUDT = createTypeQuery({
      typeName: "user_meta",
      version: "v1",
      columns: [
        { columnName: "first_name", columnType: "TEXT" },
        { columnName: "last_name", columnType: "TEXT" },
        { columnName: "profile_picture_url", columnType: "TEXT" },
      ],
    });
    const serviceMetaUDT = createTypeQuery({
      typeName: "service_meta",
      version: "v1",
      columns: [
        { columnName: "title", columnType: "TEXT" },
        { columnName: "description", columnType: "TEXT" },
        { columnName: "price", columnType: "INT" },
      ],
    });
    const createBookingTable = createTableQuery({
      name: "booking",
      version: "v1",
      columns: [
        { columnName: "provider_id", columnType: "UUID" },
        { columnName: "year", columnType: "SMALLINT" },
        { columnName: "month", columnType: "SMALLINT" },
        { columnName: "day", columnType: "SMALLINT" },
        { columnName: "id", columnType: "UUID" },
        { columnName: "start", columnType: "TIMESTAMP" },
        { columnName: "end", columnType: "TIMESTAMP" },
        { columnName: "user_id", columnType: "UUID" },
        {
          columnName: "user_meta",
          columnType: "UDT",
          udtName: userMetaUDT.name,
        },
        {
          columnName: "service_meta",
          columnType: "UDT",
          udtName: serviceMetaUDT.name,
        },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["provider_id", "year", "month"],
        cluster: ["day", "created_at"],
      },
    });
    const createBookingLock = createTableQuery({
      name: "booking_lock",
      version: "v1",
      columns: [
        { columnName: "provider_id", columnType: "UUID" },
        { columnName: "year", columnType: "SMALLINT" },
        { columnName: "month", columnType: "SMALLINT" },
        { columnName: "day", columnType: "SMALLINT" },
        { columnName: "lock_user_id", columnType: "UUID" },
      ],
      primaryKey: {
        partition: ["provider_id", "year", "month", "day"],
      },
    });
    const createBookingIdIndex = createIndexQuery({
      indexName: "booking_id",
      version: "v1",
      indexOnTable: "booking",
      indexKey: "id",
    });
    const bookingUserIdMVQuery = selectQuery({
      table: "booking",
      version: "v1",
      columns: ["*"],
      where: [
        notNull("user_id"),
        notNull("year"),
        notNull("month"),
        notNull("day"),
        notNull("created_at"),
        // notNull("end"),
        notNull("provider_id"),
      ],
    });
    const createBookingUserIdMV = createMaterialView({
      materialViewName: "booking_by_user_id",
      version: "v1",
      selectQuery: bookingUserIdMVQuery,
      primaryKey: {
        partition: ["user_id", "year", "month"],
        cluster: ["day", "created_at", "provider_id"],
      },
    });
    await Promise.all([
      init({ query: userMetaUDT.query, errorPath }),
      init({ query: serviceMetaUDT.query, errorPath }),
    ]);
    await Promise.all([
      init({ query: createBookingTable.query, errorPath }),
      init({ query: createBookingTable.logQuery, errorPath }),
      init({ query: createBookingLock.query, errorPath }),
      init({ query: createBookingLock.logQuery, errorPath }),
    ]);
    await Promise.all([
      init({ query: createBookingIdIndex, errorPath }),
      init({ query: createBookingUserIdMV.query, errorPath }),
    ]);
  };
}
