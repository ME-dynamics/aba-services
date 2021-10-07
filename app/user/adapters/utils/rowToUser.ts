import { types, nullToUndefined } from "aba-node";
import { entityTypes } from "../../types";

export function rowToUser(row: types.tRow): entityTypes.IMadeUserObject {
  return {
    id: row.get("id"),
    username: row.get("username"),
    phoneNumber: row.get("phone_number"),
    firstName: nullToUndefined<string>(row.get("first_name")),
    lastName: nullToUndefined<string>(row.get("last_name")),
    profilePictureUrl: nullToUndefined<string>(row.get("profile_picture_url")),
    address: nullToUndefined<string>(row.get("address")),
    telephone: nullToUndefined<string>(row.get("telephone")),
    gender: nullToUndefined<entityTypes.tGender>(row.get("gender")),
    deactivationReason: nullToUndefined<string>(row.get("deactivation_reason")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
