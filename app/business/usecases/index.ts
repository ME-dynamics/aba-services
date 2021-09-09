import {
  findCustomersByStaffId,
  findRequestByCustomerId,
  findRequestsByStaffId,
  findStaffByCustomerId,
  findCustomer,
  insertRequest,
  insertStaffCustomer,
} from "../adapters";

import { buildConfirmRequest } from "./confirmRequest";
import { buildCreateRequest } from "./createRequest";
import { buildRejectRequest } from "./rejectRequest";
import { buildRemoveRequest } from "./removeRequest";
import { buildRetrieveRequests } from "./retrieveRequests";
import { buildRetrieveCustomers } from "./retrieveCustomers";
import { buildRemoveCustomer } from "./removeCustomer";
import { buildUpdateCustomerInfo } from "./updateCustomerInfo";
import { v4 } from "uuid";

const findUserById = async (id: string) => {
  return {
    id: v4(),
    description: "some stuff",
    imageUrl: "imageUrl",
    name: "erf",
    role: "provider",
  };
};

export const confirmRequest = buildConfirmRequest({
  findRequestByCustomerId,
  findStaffByCustomerId,
  findUserById,
  insertRequest,
  insertStaffCustomer,
});

export const createRequest = buildCreateRequest({
  findRequestByCustomerId,
  findUserById,
  insertRequest,
});

export const rejectRequest = buildRejectRequest({
  findRequestByCustomerId,
  insertRequest,
});
export const removeRequest = buildRemoveRequest({
  findRequestByCustomerId,
  insertRequest,
});

export const retrieveRequests = buildRetrieveRequests({
  findRequestsByStaffId,
});

export const retrieveCustomers = buildRetrieveCustomers({
  findCustomersByStaffId,
});

export const removeCustomer = buildRemoveCustomer({
  findCustomer,
  insertStaffCustomer,
});

export const updateCustomerInfo = buildUpdateCustomerInfo({
  findCustomer,
  findRequestByCustomerId,
  insertRequest,
  insertStaffCustomer,
});
