import type { types } from "aba-node";
import type { entityTypes } from "../../types";

export function rowToNotificationToken(
  row: types.tRow
): entityTypes.IMadeNotificationTokenObject {
  return {
    providerType: row.get("provider_type"),
    provider: row.get("provider"),
    token: row.get("xtoken"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_aIt"),
  };
}
