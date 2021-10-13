// import { v4 } from "uuid";
// import { nanoid } from "nanoid";
import { buildMakeProviderCustomer } from "./ProviderCustomer";
import { buildMakeCustomerProviderRequest } from "./customerProviderRequest";
// function slugify(value: string): string {
//   return value;
// }

export const makeProviderCustomer = buildMakeProviderCustomer();
export const makeCustomerProviderRequest = buildMakeCustomerProviderRequest();
