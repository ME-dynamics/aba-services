import { types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToTask(row: types.tRow): entityTypes.IMadeTaskObject {
  return {
    userId: row.get("user_id").toString(),
    id: row.get("id").toString(),
    content: row.get("content"),
    done: row.get("done"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
