import { types } from "aba-node";
import { IMadeRoleObject } from "../../types";

export function rowToRole(row: types.tRow): IMadeRoleObject {
  return {
    otpId: row.get("otp_id"),
    admin: row.get("admin"),
    provider: row.get("provider"),
    assistant: row.get("assistant"),
    customer: row.get("customer"),
    support: row.get("support"),
    accountant: row.get("accountant"),
    adminAL: row.get("admin_al"),
    providerAL: row.get("provider_al"),
    assistantAL: row.get("assistant_al"),
    customerAL: row.get("customer_al"),
    supportAL: row.get("support_al"),
    accountantAL: row.get("accountant_al"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
