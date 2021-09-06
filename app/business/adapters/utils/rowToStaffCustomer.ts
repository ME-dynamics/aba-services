import { nullToUndefined, types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToStaffCustomer(
  row: types.tRow
): entityTypes.IMadeStaffCustomerObject {
  return {
    staffId: row.get("staff_id").toString(),
    customerId: row.get("customer_id").toString(),
    name: nullToUndefined<string>(row.get("name")),
    imageUrl: nullToUndefined<string>(row.get("image_url")),
    description: nullToUndefined<string>(row.get("description")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
