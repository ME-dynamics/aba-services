import {
  findCustomersByProviderId,
  findRequestByCustomerId,
  findRequestsByProviderId,
  findProviderByCustomerId,
  findCustomer,
  fetchUserById,
  fetchUserRole,
  insertRequest,
  insertProviderCustomer,
} from "../adapters";

import { buildConfirmRequest } from "./confirmRequest";
import { buildCreateRequest } from "./createRequest";
import { buildRejectRequest } from "./rejectRequest";
import { buildRemoveRequest } from "./removeRequest";
import { buildRetrieveRequests } from "./retrieveRequests";
import { buildRetrieveCustomers } from "./retrieveCustomers";
import { buildRemoveCustomer } from "./removeCustomer";
import { buildUpdateCustomerInfo } from "./updateCustomerInfo";
import { buildRetrieveCustomerProvider } from "./retrieveCustomerProvider";

export const confirmRequest = buildConfirmRequest({
  findRequestByCustomerId,
  findProviderByCustomerId,
  fetchUserById,
  insertRequest,
  insertProviderCustomer,
});

export const createRequest = buildCreateRequest({
  findRequestByCustomerId,
  fetchUserById,
  fetchRoleByUserId: fetchUserRole,
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
  findRequestsByProviderId,
});

export const retrieveCustomers = buildRetrieveCustomers({
  findCustomersByProviderId,
});

export const removeCustomer = buildRemoveCustomer({
  findCustomer,
  insertProviderCustomer,
  findRequestByCustomerId,
  insertRequest,
});

export const updateCustomerInfo = buildUpdateCustomerInfo({
  findCustomer,
  findRequestByCustomerId,
  insertRequest,
  insertProviderCustomer,
});

export const retrieveCustomerProvider = buildRetrieveCustomerProvider({
  findProviderByCustomerId,
});
