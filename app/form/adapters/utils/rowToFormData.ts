import { types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToFormData(
  row: types.tRow
): entityTypes.IMadeFormDataObject {
  return {
    id: row.get("id")?.toString(),
    userId: row.get("user_id")?.toString(),
    structureId: row.get("structure_id"),
    formName: row.get("form_name"),
    fields: row.get("fields"),
    aggregates: row.get("aggregates"),
    interpret: row.get("interpret"),
    warnings: row.get("warnings"),
    errors: row.get("errors"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
