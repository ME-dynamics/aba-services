import { types } from "aba-node";
import {
  IMadeCustomerStaffRequestObject,
  IMadeStaffCustomerObject,
} from "./entities";

// init db

export interface IBuildInit {
  init: types.tDbInitFunc;
}
export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}


// find customer builder
export interface IBuildFindCustomer {
  select: types.tDbSelectFunc;
  rowToStaffCustomer: rowToStaffCustomerFunc;
}

// find customer 

export type tFindCustomerFunc = (customerId:string) => Promise<IMadeStaffCustomerObject | undefined>;

// find customers by staff id func

export type tFindCustomersByStaffIdFunc = (
  staffId: string
) => Promise<IMadeStaffCustomerObject[] | undefined>;


// find staff by customer id func

export type tFindStaffByCustomerId = (
  customerId: string
) => Promise<IMadeStaffCustomerObject | undefined>;


// insert staff customer

export type tInsertStaffCustomerFunc = (
  info: IMadeStaffCustomerObject
) => Promise<void>;







// find requests builder
export interface IBuildFindRequests {
  select: types.tDbSelectFunc;
  rowToCustomerStaffRequest: tRowToCustomerStaffRequestFunc;
}

// find request by customer id func

export type tFindRequestByCustomerId = (
  customerId: string
) => Promise<IMadeCustomerStaffRequestObject | undefined>;

// find request by staff id func

export type tFindRequestsByStaffIdFunc = (
  staffId: string
) => Promise<IMadeCustomerStaffRequestObject[] | undefined>;


// insert request

export type tInsertRequestFunc = (
  request: IMadeCustomerStaffRequestObject
) => Promise<void>;


// network

// find user by id

export interface IUser {
  id: string;
  role: string;
  name: string | undefined;
  imageUrl: string | undefined;
  description: string | undefined;
}

export type tFindUserByIdFunc = (id: string) => Promise<IUser | undefined>;


// utils

export type rowToStaffCustomerFunc = (
  row: types.tRow
) => IMadeStaffCustomerObject;


export type tRowToCustomerStaffRequestFunc = (
  row: types.tRow
) => IMadeCustomerStaffRequestObject;
