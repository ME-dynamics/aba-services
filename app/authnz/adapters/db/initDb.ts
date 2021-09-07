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
      { name: "id", type: "UUID" },
      { name: "device_id", type: "TEXT" },
      { name: "phone_number", type: "TEXT" },
      { name: "phone_confirm", type: "BOOLEAN" },
      { name: "otp_code", type: "TEXT" },
      { name: "otp_token", type: "TEXT" },
      { name: "otp_token_valid_date", type: "TIMESTAMP" },
      { name: "otp_code_resend_count", type: "SMALLINT" },
      { name: "otp_temp_block_date", type: "TIMESTAMP" },
      { name: "permanent_block", type: "BOOLEAN" },
      { name: "created_at", type: "TIMESTAMP" },
      { name: "modified_at", type: "TIMESTAMP" },
      { name: "soft_deleted", type: "BOOLEAN" },
    ],
    primaryKey: {
      partition: ["phone_number"],
    },
  });
  const otpTokenIndex = createIndexQuery({
    name: "otp_token",
    version: "v1",
    indexKey: "otp_token",
    table: "otp",
  });
  const userIdIndex = createIndexQuery({
    name: "otp_id",
    version: "v1",
    indexKey: "id",
    table: "otp",
  });
  // secret keys table query
  const createSecretKeysTable = createTableQuery({
    name: "secret_key",
    version: "v1",
    columns: [
      {
        name: "key_type",
        type: "TEXT",
      },
      {
        name: "kid",
        type: "INT",
      },
      {
        name: "kty",
        type: "TEXT",
      },
      {
        name: "crv",
        type: "TEXT",
      },
      {
        name: "x",
        type: "TEXT",
      },
      {
        name: "d",
        type: "TEXT",
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
      { name: "otp_id", type: "UUID" },
      { name: "refresh_token", type: "TEXT" },
      { name: "jwt", type: "TEXT" },
      { name: "jwt_key", type: "TEXT" },
      { name: "jwt_expires_at", type: "TIMESTAMP" },
      { name: "refresh_expires_at", type: "TIMESTAMP" },
      { name: "token_recreate_count", type: "SMALLINT" },
      { name: "token_temp_block", type: "TIMESTAMP" },
      { name: "permanent_block", type: "BOOLEAN" },
      { name: "created_at", type: "TIMESTAMP" },
      { name: "modified_at", type: "TIMESTAMP" },
      { name: "soft_deleted", type: "BOOLEAN" },
    ],
    primaryKey: {
      partition: ["otp_id"],
    },
  });

  const createRoleTable = createTableQuery({
    name: "role",
    version: "v1",
    columns: [
      { name: "otp_id", type: "UUID" },
      { name: "admin", type: "BOOLEAN" },
      { name: "provider", type: "BOOLEAN" },
      { name: "assistant", type: "BOOLEAN" },
      { name: "customer", type: "BOOLEAN" },
      { name: "support", type: "BOOLEAN" },
      { name: "accountant", type: "BOOLEAN" },
      { name: "admin_al", type: "TINYINT" },
      { name: "provider_al", type: "TINYINT" },
      { name: "assistant_al", type: "TINYINT" },
      { name: "customer_al", type: "TINYINT" },
      { name: "support_al", type: "TINYINT" },
      { name: "accountant_al", type: "TINYINT" },
      { name: "created_at", type: "TIMESTAMP" },
      { name: "modified_at", type: "TIMESTAMP" },
      { name: "soft_deleted", type: "BOOLEAN" },
    ],
    primaryKey: {
      partition: ["otp_id"],
    },
  });

  return async function initDb() {
    await init({ query: createOtpTable.query, errorPath });
    await init({ query: otpTokenIndex, errorPath });
    await init({ query: userIdIndex, errorPath });
    await init({ query: createSecretKeysTable.query, errorPath });
    await init({ query: createTokenTable.query, errorPath });
    await init({ query: createRoleTable.query, errorPath });

  };
}
