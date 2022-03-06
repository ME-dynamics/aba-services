import { types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToTestData(
  row: types.tRow
): entityTypes.IMadeTestDataObject {
  return {
    id: row.get("id")?.toString(),
    userId: row.get("user_id")?.toString(),
    structureId: row.get("structure_id"),
    title: row.get("title"),
    shortName: row.get("short_name"),
    fields: row.get("fields"),
    results: row.get("results"),
    resultSummary: row.get("result_summary"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
  };
}
