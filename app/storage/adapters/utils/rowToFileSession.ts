import { types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToFileSession(
  row: types.tRow
): entityTypes.IMadeFileSessionObject {
  return {
    session: row.get("session"),
    secret: row.get("secret"),
    userId: row.get("user_id"),
    businessId: row.get("business_id"),
    access: row.get("access"),
    countLimit: row.get("count_limit"),
    sizeLimit: row.get("size_limit"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
