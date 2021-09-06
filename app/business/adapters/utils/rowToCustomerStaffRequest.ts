import { types } from "aba-node";
import { entityTypes } from "../../types";

export function rowToCustomerStaffRequest(
  row: types.tRow
): entityTypes.IMadeCustomerStaffRequestObject {
  return {
    staffId: row.get("staff_id").toString(),
    customerId: row.get("customer_id").toString(),
    name: row.get("name"),
    confirmed: row.get("confirmed"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
