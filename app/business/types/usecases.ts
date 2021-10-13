import {
  tFindCustomerFunc,
  tFindCustomersByProviderIdFunc,
  tFindRequestByCustomerId,
  tFindRequestsByProviderIdFunc,
  tFindProviderByCustomerId,
  tFindUserByIdFunc,
  tInsertRequestFunc,
  tInsertProviderCustomerFunc,
} from "./adapters";

// create request;
export interface IBuildCreateRequest {
  findUserById: tFindUserByIdFunc;
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertRequest: tInsertRequestFunc;
}

export interface ICreateRequest {
  providerId: string;
  customerId: string;
}

// remove request

export interface IBuildRemoveRequest {
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertRequest: tInsertRequestFunc;
}

// confirm request

export interface IBuildConfirmRequest {
  findUserById: tFindUserByIdFunc;
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertRequest: tInsertRequestFunc;
  insertProviderCustomer: tInsertProviderCustomerFunc;
  findProviderByCustomerId: tFindProviderByCustomerId;
}
export interface IConfirmRequest {
  providerId: string;
  customerId: string;
}
// reject request
export interface IBuildRejectRequest {
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertRequest: tInsertRequestFunc;
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

export interface IBuildRetrieveCustomerProvider {
  findProviderByCustomerId: tFindProviderByCustomerId;
}

// remove customer by id
export interface IBuildRemoveCustomer {
  findCustomer: tFindCustomerFunc;
  insertProviderCustomer: tInsertProviderCustomerFunc;
}

export interface IRemoveCustomer {
  providerId: string;
  customerId: string;
}

// update customer info -- internal

export interface IBuildUpdateCustomerInfo {
  findRequestByCustomerId: tFindRequestByCustomerId;
  findCustomer: tFindCustomerFunc;
  insertRequest: tInsertRequestFunc;
  insertProviderCustomer: tInsertProviderCustomerFunc;
}

export interface IUpdateCustomerInfo {
  id: string;
  name: string | undefined;
  description: string | undefined;
  imageUrl: string | undefined;
}
