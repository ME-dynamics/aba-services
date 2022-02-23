import {
  findCustomersByProviderId,
  findRequestByCustomerId,
  findRequestsByProviderId,
  findProviderByCustomerId,
  findCustomer,
  fetchUserById,
  fetchUserRole,
  insertCustomer,
  deleteCustomer,
} from "../adapters";

import { buildConfirmRequest } from "./confirmRequest";
import { buildCreateRequest } from "./createRequest";
import { buildRejectRequest } from "./rejectRequest";
import { buildRetrieveProviderRequests } from "./retrieveProviderRequests";
import { buildRetrieveCustomers } from "./retrieveCustomers";
import { buildRemoveCustomer } from "./removeCustomer";
import { buildRemoveProvider } from "./removeProvider";
import { buildRemoveRequest } from "./removeRequest";
import { buildUpdateCustomerInfo } from "./updateCustomerInfo";
import { buildRetrieveCustomerProvider } from "./retrieveCustomerProvider";
import { buildRetrieveCustomerProviderInfo } from "./retrieveCustomerProviderInfo";
import { buildRetrieveCustomerRequest } from "./retrieveCustomerRequest";

export const confirmRequest = buildConfirmRequest({
  findRequestByCustomerId,
  fetchUserById,
  insertCustomer,
  deleteCustomer,
});

export const createRequest = buildCreateRequest({
  findRequestByCustomerId,
  fetchUserById,
  fetchRoleByUserId: fetchUserRole,
  insertCustomer,
  deleteCustomer,
});

export const rejectRequest = buildRejectRequest({
  findRequestByCustomerId,
  deleteCustomer,
});

export const retrieveProviderRequests = buildRetrieveProviderRequests({
  findRequestsByProviderId,
});

export const removeRequest = buildRemoveRequest({
  findRequestByCustomerId,
  deleteCustomer,
});

export const retrieveCustomers = buildRetrieveCustomers({
  findCustomersByProviderId,
});

export const retrieveCustomerRequest = buildRetrieveCustomerRequest({
  findRequestByCustomerId,
});

export const removeCustomer = buildRemoveCustomer({
  findCustomer,
  deleteCustomer,
});

export const removeProvider = buildRemoveProvider({
  findCustomer,
  deleteCustomer,
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
