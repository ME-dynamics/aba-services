import { nullToUndefined, types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToNote(row: types.tRow): entityTypes.IMadeNoteObject {
  return {
    providerId: row.get("provider_id"),
    customerId: row.get("customer_id"),
    id: row.get("id"),
    title: row.get("title"),
    content: row.get("content"),
    imageIds: nullToUndefined<string[]>(row.get("image_ids")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
