import {
  tFindCustomerFunc,
  tFindCustomersByProviderIdFunc,
  tFindRequestByCustomerId,
  tFindRequestsByProviderIdFunc,
  tFindProviderByCustomerId,
  tFetchUserByIdFunc,
  tInsertCustomerFunc,
  tFetchRoleByUserIdFunc,
} from "./adapters";

// create request;
export interface IBuildCreateRequest {
  fetchUserById: tFetchUserByIdFunc;
  fetchRoleByUserId: tFetchRoleByUserIdFunc;
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertCustomer: tInsertCustomerFunc;
}

export interface ICreateRequest {
  providerId: string;
  customerId: string;
}

// remove request

export interface IBuildRemoveRequest {
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertCustomer: tInsertCustomerFunc;
}

// confirm request

export interface IBuildConfirmRequest {
  fetchUserById: tFetchUserByIdFunc;
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertCustomer: tInsertCustomerFunc;
}
export interface IConfirmRequest {
  providerId: string;
  customerId: string;
}
// reject request
export interface IBuildRejectRequest {
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertCustomer: tInsertCustomerFunc;
}

export interface IRejectRequest {
  providerId: string;
  customerId: string;
}

// retrieve requests
export interface IBuildRetrieveRequests {
  findRequestsByProviderId: tFindRequestsByProviderIdFunc;
}

// retrieve customers by provider id

export interface IBuildRetrieveCustomers {
  findCustomersByProviderId: tFindCustomersByProviderIdFunc;
}
// retrieve customer Provider by customer id

// TODO: combine these two functions;
export interface IBuildRetrieveCustomerProviderId {
  findProviderByCustomerId: tFindProviderByCustomerId;
}

export type tRetrieveCustomerProviderIdFunc = (
  customerId: string
) => Promise<string | undefined>;

// find customer provider info

export interface IBuildRetrieveCustomerProviderInfo {
  retrieveCustomerProviderId: tRetrieveCustomerProviderIdFunc;
  fetchUserById: tFetchUserByIdFunc;
}

// remove customer by id
export interface IBuildRemoveCustomer {
  findCustomer: tFindCustomerFunc;
  insertCustomer: tInsertCustomerFunc;
}

export interface IRemoveCustomer {
  providerId: string;
  customerId: string;
}

// update customer info -- internal

export interface IBuildUpdateCustomerInfo {
  findRequestByCustomerId: tFindRequestByCustomerId;
  findCustomer: tFindCustomerFunc;
  insertCustomer: tInsertCustomerFunc;
}

export interface IUpdateCustomerInfo {
  id: string;
  name: string | undefined;
  description: string | undefined;
  profilePictureUrl: string | undefined;
}
