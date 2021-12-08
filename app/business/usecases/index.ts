import {
  findCustomersByProviderId,
  findRequestByCustomerId,
  findRequestsByProviderId,
  findProviderByCustomerId,
  findCustomer,
  fetchUserById,
  fetchUserRole,
  insertCustomer,
} from "../adapters";

import { buildConfirmRequest } from "./confirmRequest";
import { buildCreateRequest } from "./createRequest";
import { buildRejectRequest } from "./rejectRequest";
import { buildRetrieveRequests } from "./retrieveRequests";
import { buildRetrieveCustomers } from "./retrieveCustomers";
import { buildRemoveCustomer } from "./removeCustomer";
import { buildRemoveRequest } from "./removeRequest";
import { buildUpdateCustomerInfo } from "./updateCustomerInfo";
import { buildRetrieveCustomerProvider } from "./retrieveCustomerProvider";
import { buildRetrieveCustomerProviderInfo } from "./retrieveCustomerProviderInfo";

export const confirmRequest = buildConfirmRequest({
  findRequestByCustomerId,
  fetchUserById,
  insertCustomer,
});

export const createRequest = buildCreateRequest({
  findRequestByCustomerId,
  fetchUserById,
  fetchRoleByUserId: fetchUserRole,
  insertCustomer,
});

export const rejectRequest = buildRejectRequest({
  findRequestByCustomerId,
  insertCustomer,
});

export const retrieveRequests = buildRetrieveRequests({
  findRequestsByProviderId,
});

export const removeRequest = buildRemoveRequest({
  findRequestByCustomerId,
  insertCustomer,
});

export const retrieveCustomers = buildRetrieveCustomers({
  findCustomersByProviderId,
});

export const removeCustomer = buildRemoveCustomer({
  findCustomer,
  insertCustomer,
});

export const updateCustomerInfo = buildUpdateCustomerInfo({
  findCustomer,
  findRequestByCustomerId,
  insertCustomer,
});

export const retrieveCustomerProvider = buildRetrieveCustomerProvider({
  findProviderByCustomerId,
});

export const retrieveCustomerProviderInfo = buildRetrieveCustomerProviderInfo({
  fetchUserById,
  retrieveCustomerProviderId: retrieveCustomerProvider,
});
