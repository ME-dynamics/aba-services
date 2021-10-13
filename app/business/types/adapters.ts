import { types } from "aba-node";
import {
  IMadeCustomerProviderRequestObject,
  IMadeProviderCustomerObject,
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
  rowToProviderCustomer: rowToProviderCustomerFunc;
}

// find customer

export type tFindCustomerFunc = (
  customerId: string
) => Promise<IMadeProviderCustomerObject | undefined>;

// find customers by provider id func

export type tFindCustomersByProviderIdFunc = (
  providerId: string
) => Promise<IMadeProviderCustomerObject[] | undefined>;

// find provider by customer id func

export type tFindProviderByCustomerId = (
  customerId: string
) => Promise<IMadeProviderCustomerObject | undefined>;

// insert provider customer

export type tInsertProviderCustomerFunc = (
  info: IMadeProviderCustomerObject
) => Promise<void>;

// find requests builder
export interface IBuildFindRequests {
  select: types.tDbSelectFunc;
  rowToCustomerProviderRequest: tRowToCustomerProviderRequestFunc;
}

// find request by customer id func

export type tFindRequestByCustomerId = (
  customerId: string
) => Promise<IMadeCustomerProviderRequestObject | undefined>;

// find request by provider id func

export type tFindRequestsByProviderIdFunc = (
  ProviderId: string
) => Promise<IMadeCustomerProviderRequestObject[] | undefined>;

// insert request

export type tInsertRequestFunc = (
  request: IMadeCustomerProviderRequestObject
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

export type rowToProviderCustomerFunc = (
  row: types.tRow
) => IMadeProviderCustomerObject;

export type tRowToCustomerProviderRequestFunc = (
  row: types.tRow
) => IMadeCustomerProviderRequestObject;
