import { types, nullToUndefined } from "aba-node";
import { entityTypes } from "../../types";

export function rowToCustomer(
  row: types.tRow
): entityTypes.IMadeCustomersObject {
  return {
    customerId: row.get("customer_id")?.toString(),
    providerId: row.get("provider_id")?.toString(),
    businessId: row.get("business_id")?.toString(),
    name: row.get("name"),
    requestConfirmed: row.get("request_confirmed"),
    profilePictureUrl: nullToUndefined<string>(row.get("profile_picture_url")),
    description: nullToUndefined<string>(row.get("description")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
  };
}
