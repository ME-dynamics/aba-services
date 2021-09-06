import { queryGen } from "aba-node";
import { IMadeRoleObject, IBuildInsert } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "role",
    version: "v1",
    values: [
      { column: "otp_id", self: true },
      { column: "admin", self: true },
      { column: "provider", self: true },
      { column: "assistant", self: true },
      { column: "customer", self: true },
      { column: "support", self: true },
      { column: "accountant", self: true },
      { column: "admin_al", self: true },
      { column: "provider_al", self: true },
      { column: "assistant_al", self: true },
      { column: "customer_al", self: true },
      { column: "support_al", self: true },
      { column: "accountant_al", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertRole(args: IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert role";
  const query = insertQueryGen();
  return async function insertRole(roleObject: IMadeRoleObject): Promise<void> {
    const {
      otpId,
      admin,
      provider,
      assistant,
      customer,
      support,
      accountant,
      adminAL,
      providerAL,
      assistantAL,
      customerAL,
      supportAL,
      accountantAL,
      createdAt,
      modifiedAt,
      softDeleted,
    } = roleObject;
    await insert({
      query,
      params: {
        otp_id: otpId,
        admin,
        provider,
        assistant,
        customer,
        support,
        accountant,
        admin_al: adminAL,
        provider_al: providerAL,
        assistant_al: assistantAL,
        customer_al: customerAL,
        support_al: supportAL,
        accountant_al: accountantAL,
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
