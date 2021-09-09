import {
  tFindCustomerFunc,
  tFindCustomersByStaffIdFunc,
  tFindRequestByCustomerId,
  tFindRequestsByStaffIdFunc,
  tFindStaffByCustomerId,
  tFindUserByIdFunc,
  tInsertRequestFunc,
  tInsertStaffCustomerFunc,
} from "./adapters";

// create request;
export interface IBuildCreateRequest {
  findUserById: tFindUserByIdFunc;
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertRequest: tInsertRequestFunc;
}

export interface ICreateRequest {
  staffId: string;
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
  insertStaffCustomer: tInsertStaffCustomerFunc;
  findStaffByCustomerId: tFindStaffByCustomerId;
}
export interface IConfirmRequest {
  staffId: string;
  customerId: string;
}
// reject request
export interface IBuildRejectRequest {
  findRequestByCustomerId: tFindRequestByCustomerId;
  insertRequest: tInsertRequestFunc;
}

export interface IRejectRequest {
  staffId: string;
  customerId: string;
}

// retrieve requests
export interface IBuildRetrieveRequests {
  findRequestsByStaffId: tFindRequestsByStaffIdFunc;
}

// retrieve customers by staff id

export interface IBuildRetrieveCustomers {
  findCustomersByStaffId: tFindCustomersByStaffIdFunc;
}

// remove customer by id
export interface IBuildRemoveCustomer {
  findCustomer: tFindCustomerFunc;
  insertStaffCustomer: tInsertStaffCustomerFunc;
}

export interface IRemoveCustomer {
  staffId: string;
  customerId: string;
}

// update customer info -- internal

export interface IBuildUpdateCustomerInfo {
  findRequestByCustomerId: tFindRequestByCustomerId;
  findCustomer: tFindCustomerFunc;
  insertRequest: tInsertRequestFunc;
  insertStaffCustomer: tInsertStaffCustomerFunc;
}

export interface IUpdateCustomerInfo {
  id: string;
  name: string | undefined;
  description: string | undefined;
  imageUrl: string | undefined;
}
