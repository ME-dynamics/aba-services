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

// insert provider customer

export type tInsertProviderCustomerFunc = (
  info: IMadeCustomersObject
) => Promise<void>;

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

// insert request

export type tInsertRequestFunc = (
  request: IMadeCustomersObject
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
