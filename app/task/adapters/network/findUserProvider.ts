import { retrieveCustomerStaff } from "../../../business";

export async function findUserProvider(customerId: string) {
  return await retrieveCustomerStaff(customerId);
}
