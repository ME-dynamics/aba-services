import { retrieveRoleByOtpId } from "../../../authnz";

export async function fetchUserRole(userId: string) {
  return await retrieveRoleByOtpId(userId);
}
