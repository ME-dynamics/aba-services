import { retrieveCustomerProvider } from "../../../business";

export async function fetchCustomerProvider(customerId: string) {
  return await retrieveCustomerProvider(customerId);
}
