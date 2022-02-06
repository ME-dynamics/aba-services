import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "role",
    version: "v1",
    values: [
      { column: "otp_id", dynamicValue: true },
      { column: "admin", dynamicValue: true },
      { column: "provider", dynamicValue: true },
      { column: "assistant", dynamicValue: true },
      { column: "customer", dynamicValue: true },
      { column: "support", dynamicValue: true },
      { column: "accountant", dynamicValue: true },
      { column: "admin_al", dynamicValue: true },
      { column: "provider_al", dynamicValue: true },
      { column: "assistant_al", dynamicValue: true },
      { column: "customer_al", dynamicValue: true },
      { column: "support_al", dynamicValue: true },
      { column: "accountant_al", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
      { column: "soft_deleted", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertRole(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert role";
  const { query, logQuery } = insertQueryGen();
  return async function insertRole(
    roleObject: entityTypes.IMadeRoleObject
  ): Promise<void> {
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
    const params = {
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
    };
    await Promise.all([
      insert({
        query,
        params,
        errorPath,
      }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
