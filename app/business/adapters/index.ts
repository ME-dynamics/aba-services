import { scyllaClient } from "aba-node";

import {
  buildInitDb,
  buildFindCustomersByProviderId,
  buildFindRequestByCustomerId,
  buildFindRequestsByProviderId,
  buildFindProviderByCustomerId,
  buildInsertProviderCustomer,
  buildInsertRequest,
  buildFindCustomer
} from "./db";

import { rowToCustomerProviderRequest, rowToProviderCustomer } from "./utils";

const dbClient = scyllaClient({
  contactPoints: ["127.0.1.1"],
  localDataCenter: "datacenter1",
  keyspace: "business",
  applicationName: "business",
  applicationVersion: "v1",
  errorPath: "business service, adapters, scylla client",
  id: undefined,
});

export const initDb = buildInitDb({ init: dbClient.init });


export const findCustomer = buildFindCustomer({select: dbClient.select, rowToProviderCustomer})

export const findCustomersByProviderId = buildFindCustomersByProviderId({
  select: dbClient.select,
  rowToProviderCustomer,
});
export const findRequestByCustomerId = buildFindRequestByCustomerId({
  select: dbClient.select,
  rowToCustomerProviderRequest,
});
export const findRequestsByProviderId = buildFindRequestsByProviderId({
  select: dbClient.select,
  rowToCustomerProviderRequest,
});
export const findProviderByCustomerId = buildFindProviderByCustomerId({
  select: dbClient.select,
  rowToProviderCustomer,
});

export const insertProviderCustomer = buildInsertProviderCustomer({
  insert: dbClient.insert,
});
export const insertRequest = buildInsertRequest({ insert: dbClient.insert });


export { fetchUserById, fetchUserRole } from "./network"