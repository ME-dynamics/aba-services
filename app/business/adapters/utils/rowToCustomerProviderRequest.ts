import { types, nullToUndefined } from "aba-node";
import { entityTypes } from "../../types";

export function rowToCustomerProviderRequest(
  row: types.tRow
): entityTypes.IMadeCustomerProviderRequestObject {
  return {
    providerId: row.get("provider_id").toString(),
    customerId: row.get("customer_id").toString(),
    name: nullToUndefined<string>(row.get("name")),
    profilePictureUrl: nullToUndefined<string>(row.get("profile_picture_url")),
    confirmed: row.get("confirmed"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
