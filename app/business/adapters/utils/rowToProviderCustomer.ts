import { nullToUndefined, types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToProviderCustomer(
  row: types.tRow
): entityTypes.IMadeProviderCustomerObject {
  return {
    providerId: row.get("provider_id").toString(),
    customerId: row.get("customer_id").toString(),
    name: nullToUndefined<string>(row.get("name")),
    profilePictureUrl: nullToUndefined<string>(row.get("profile_picture_url")),
    description: nullToUndefined<string>(row.get("description")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
