import { types, nullToUndefined } from "aba-node";
import { entityTypes } from "../../types";

export function rowToCustomerStaffRequest(
  row: types.tRow
): entityTypes.IMadeCustomerStaffRequestObject {
  return {
    staffId: row.get("staff_id").toString(),
    customerId: row.get("customer_id").toString(),
    name: nullToUndefined<string>(row.get("name")),
    imageUrl: nullToUndefined<string>(row.get("image_url")),
    confirmed: row.get("confirmed"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
