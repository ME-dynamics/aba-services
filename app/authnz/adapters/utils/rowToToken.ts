import { types, nullToUndefined } from "aba-node";
import { IMadeTokenObject } from "../../types";

export function rowToToken(row: types.tRow): IMadeTokenObject {
  return {
    otpId: row.get("otp_id"),
    refreshToken: row.get("refresh_token"),
    jwt: row.get("jwt"),
    jwtKey: row.get("jwt_key"),
    jwtExpiresAt: row.get("jwt_expires_at"),
    refreshExpiresAt: row.get("refresh_expires_at"),
    permanentBlock: row.get("permanent_block"),
    tokenReCreateCount: row.get("token_recreate_count"),
    tokenTempBlock: nullToUndefined(row.get("token_temp_block")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
