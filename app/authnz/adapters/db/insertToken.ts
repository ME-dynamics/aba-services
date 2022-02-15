import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  // TODO: add ttl with jwt Exp
  const query = insertQuery({
    table: "token",
    version: "v1",
    values: [
      { column: "otp_id", dynamicValue: true },
      { column: "device_id", dynamicValue: true },
      { column: "refresh_token", dynamicValue: true },
      { column: "jwt", dynamicValue: true },
      { column: "jwt_key", dynamicValue: true },
      { column: "jwt_expires_at", dynamicValue: true },
      { column: "refresh_expires_at", dynamicValue: true },
      { column: "token_recreate_count", dynamicValue: true },
      { column: "token_temp_block", dynamicValue: true },
      { column: "permanent_block", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertToken(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert token";
  const { query, logQuery } = insertQueryGen();
  return async function insert_token(
    tokenObject: entityTypes.IMadeTokenObject
  ): Promise<void> {
    const {
      otpId,
      deviceId,
      refreshToken,
      jwt,
      jwtKey,
      jwtExpiresAt,
      refreshExpiresAt,
      permanentBlock,
      tokenReCreateCount,
      tokenTempBlock,
      createdAt,
      modifiedAt,
    } = tokenObject;
    const params = {
      otp_id: otpId,
      device_id: deviceId,
      refresh_token: refreshToken,
      jwt,
      jwt_key: jwtKey,
      jwt_expires_at: jwtExpiresAt,
      refresh_expires_at: refreshExpiresAt,
      token_recreate_count: tokenReCreateCount,
      permanent_block: permanentBlock,
      token_temp_block: undefinedToNull(tokenTempBlock),
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
