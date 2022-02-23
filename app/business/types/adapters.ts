import { types } from "aba-node";
import { IMadeCustomersObject } from "./entities";

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
  rowToCustomer: tRowToCustomersFunc;
}

// find customer

export type tFindCustomerFunc = (
  customerId: string
) => Promise<IMadeCustomersObject | undefined>;

// find customers by provider id func

export type tFindCustomersByProviderIdFunc = (
  providerId: string
) => Promise<IMadeCustomersObject[] | undefined>;

// find provider by customer id func

export type tFindProviderByCustomerId = (
  customerId: string
) => Promise<IMadeCustomersObject | undefined>;

// find requests builder
export interface IBuildFindRequests {
  select: types.tDbSelectFunc;
  rowToCustomer: tRowToCustomersFunc;
}

// find request by customer id func

export type tFindRequestByCustomerId = (
  customerId: string
) => Promise<IMadeCustomersObject | undefined>;

// find request by provider id func

export type tFindRequestsByProviderIdFunc = (
  ProviderId: string
) => Promise<IMadeCustomersObject[] | undefined>;

// delete customer

export interface IBuildDeleteCustomer {
  remove: types.tDbDeleteFunc;
  insert: types.tDbUpsertFunc;
}

export interface IDeleteCustomer {
  customerId: string;
  providerId: string;
  businessId: string;
}

export type tDeleteCustomerFunc = (info: IDeleteCustomer) => Promise<void>;
// insert customer

export type tInsertCustomerFunc = (
  customer: IMadeCustomersObject
) => Promise<void>;

// network
export interface IUser {
  id: string;
  name: string;
  profilePictureUrl: string;
  description: string;
}
export type tFetchUserByIdFunc = (userId: string) => Promise<IUser | undefined>;

export interface IRole {
  role: string;
}

export type tFetchRoleByUserIdFunc = (
  userId: string
) => Promise<IRole | undefined>;

// utils

export type tRowToCustomersFunc = (row: types.tRow) => IMadeCustomersObject;
