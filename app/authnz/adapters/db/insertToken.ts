import { queryGen, undefinedToNull } from "aba-node";
import { IBuildInsert, IMadeTokenObject } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  // TODO: add ttl with jwt Exp
  const query = insertQuery({
    table: "token",
    version: "v1",
    values: [
      { column: "otp_id", self: true },
      { column: "refresh_token", self: true },
      { column: "jwt", self: true },
      { column: "jwt_key", self: true },
      { column: "jwt_expires_at", self: true },
      { column: "refresh_expires_at", self: true },
      { column: "token_recreate_count", self: true },
      { column: "token_temp_block", self: true },
      { column: "permanent_block", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertToken(args: IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert token";
  const query = insertQueryGen();
  return async function insert_token(
    tokenObject: IMadeTokenObject
  ): Promise<boolean> {
    const {
      otpId,
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
      softDeleted,
    } = tokenObject;
    const result = await insert({
      query,
      params: {
        otp_id: otpId,
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
        soft_deleted: softDeleted,
      },
      errorPath,
    });
    return !!result;
  };
}
