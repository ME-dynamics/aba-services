import { nullToUndefined, types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToImage(row: types.tRow): entityTypes.IMadeImageObject {
  return {
    userId: row.get("user_id").toString(),
    id: row.get("id").toString(),
    access: row.get("access"),
    url: nullToUndefined<string>(row.get("url")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
  };
}
