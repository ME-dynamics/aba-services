// import { v4 } from "uuid";
// import { nanoid } from "nanoid";
import { buildMakeStaffCustomer } from "./staffCustomer";
import { buildMakeCustomerStaffRequest } from "./customerStaffRequest";
// function slugify(value: string): string {
//   return value;
// }

export const makeStaffCustomer = buildMakeStaffCustomer();
export const makeCustomerStaffRequest = buildMakeCustomerStaffRequest();
