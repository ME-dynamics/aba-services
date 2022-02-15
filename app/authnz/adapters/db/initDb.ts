import { queryGen } from "aba-node";
import { adaptersTypes } from "../../types";

export function buildInitDb(args: adaptersTypes.IBuildInit) {
  const { init } = args;
  const errorPath = "authnz service, adapters, init db";
  const { createTableQuery, createIndexQuery } = queryGen;
  // otp table section
  const createOtpTable = createTableQuery({
    name: "otp",
    version: "v1",
    columns: [
      { columnName: "id", columnType: "UUID" },
      { columnName: "phone_number", columnType: "TEXT" },
      { columnName: "phone_confirm", columnType: "BOOLEAN" },
      { columnName: "otp_code", columnType: "TEXT" },
      { columnName: "otp_token", columnType: "TEXT" },
      { columnName: "otp_token_valid_date", columnType: "TIMESTAMP" },
      { columnName: "otp_code_resend_count", columnType: "SMALLINT" },
      { columnName: "otp_temp_block_date", columnType: "TIMESTAMP" },
      { columnName: "permanent_block", columnType: "BOOLEAN" },
      { columnName: "created_at", columnType: "TIMESTAMP" },
      { columnName: "modified_at", columnType: "TIMESTAMP" },
    ],
    primaryKey: {
      partition: ["id"],
    },
  });
  const otpTokenIndex = createIndexQuery({
    indexName: "otp_token",
    version: "v1",
    indexKey: "otp_token",
    indexOnTable: "otp",
  });
  const userIdIndex = createIndexQuery({
    indexName: "otp_phone_number",
    version: "v1",
    indexKey: "phone_number",
    indexOnTable: "otp",
  });
  // secret keys table query
  const createSecretKeysTable = createTableQuery({
    name: "secret_key",
    version: "v1",
    columns: [
      {
        columnName: "key_type",
        columnType: "TEXT",
      },
      {
        columnName: "kid",
        columnType: "INT",
      },
      {
        columnName: "kty",
        columnType: "TEXT",
      },
      {
        columnName: "crv",
        columnType: "TEXT",
      },
      {
        columnName: "x",
        columnType: "TEXT",
      },
      {
        columnName: "d",
        columnType: "TEXT",
      },
    ],
    primaryKey: {
      partition: ["key_type"],
      cluster: ["kid"],
    },
  });
  // token table
  const createTokenTable = createTableQuery({
    name: "token",
    version: "v1",
    columns: [
      { columnName: "otp_id", columnType: "UUID" },
      { columnName: "device_id", columnType: "TEXT" },
      { columnName: "refresh_token", columnType: "TEXT" },
      { columnName: "jwt", columnType: "TEXT" },
      { columnName: "jwt_key", columnType: "TEXT" },
      { columnName: "jwt_expires_at", columnType: "TIMESTAMP" },
      { columnName: "refresh_expires_at", columnType: "TIMESTAMP" },
      { columnName: "token_recreate_count", columnType: "SMALLINT" },
      { columnName: "token_temp_block", columnType: "TIMESTAMP" },
      { columnName: "permanent_block", columnType: "BOOLEAN" },
      { columnName: "created_at", columnType: "TIMESTAMP" },
      { columnName: "modified_at", columnType: "TIMESTAMP" },
    ],
    primaryKey: {
      partition: ["otp_id"],
      cluster: ["device_id"],
    },
  });

  const createRoleTable = createTableQuery({
    name: "role",
    version: "v1",
    columns: [
      { columnName: "otp_id", columnType: "UUID" },
      { columnName: "admin", columnType: "BOOLEAN" },
      { columnName: "provider", columnType: "BOOLEAN" },
      { columnName: "assistant", columnType: "BOOLEAN" },
      { columnName: "customer", columnType: "BOOLEAN" },
      { columnName: "support", columnType: "BOOLEAN" },
      { columnName: "accountant", columnType: "BOOLEAN" },
      { columnName: "admin_al", columnType: "SMALLINT" },
      { columnName: "provider_al", columnType: "SMALLINT" },
      { columnName: "assistant_al", columnType: "SMALLINT" },
      { columnName: "customer_al", columnType: "SMALLINT" },
      { columnName: "support_al", columnType: "SMALLINT" },
      { columnName: "accountant_al", columnType: "SMALLINT" },
      { columnName: "created_at", columnType: "TIMESTAMP" },
      { columnName: "modified_at", columnType: "TIMESTAMP" },
    ],
    primaryKey: {
      partition: ["otp_id"],
    },
  });
  const adminIndex = createIndexQuery({
    indexName: "admin",
    version: "v1",
    indexOnTable: "role",
    indexKey: "admin",
  });
  return async function initDb() {
    await init({ query: createOtpTable.query, errorPath });
    await init({ query: otpTokenIndex, errorPath });
    await init({ query: userIdIndex, errorPath });
    await init({ query: createSecretKeysTable.query, errorPath });
    await init({ query: createTokenTable.query, errorPath });
    await init({ query: createRoleTable.query, errorPath });
    await init({ query: adminIndex, errorPath });
  };
}
