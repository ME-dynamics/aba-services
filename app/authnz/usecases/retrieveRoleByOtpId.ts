import { usecaseTypes } from "../types";

export function buildRetrieveRoleByOtpId(
  args: usecaseTypes.IBuildRetrieveRoleByOtpId
) {
  const { findRole } = args;
  return async function retrieveRoleByOtpId(id: string) {
    const role = await findRole(id);
    if (!role || role.softDeleted) {
      return undefined;
    }
    const { admin, provider, customer, accountant, support, assistant } = role;
    if (admin) {
      return { role: "admin" };
    }
    if (provider) {
      return { role: "provider" };
    }
    if (customer) {
      return { role: "customer" };
    }
    if (accountant) {
      return { role: "accountant" };
    }
    if (support) {
      return { role: "support" };
    }
    if (assistant) {
      return { role: "assistant" };
    }
    return undefined;
  };
}
