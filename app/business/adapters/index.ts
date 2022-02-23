import { scyllaClient } from "aba-node";

import {
  buildInitDb,
  buildFindCustomersByProviderId,
  buildFindRequestByCustomerId,
  buildFindRequestsByProviderId,
  buildFindProviderByCustomerId,
  buildInsertCustomer,
  buildFindCustomer,
  buildDeleteCustomer,
} from "./db";

import { rowToCustomer } from "./utils";

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

export const findCustomer = buildFindCustomer({
  select: dbClient.select,
  rowToCustomer,
});

export const findCustomersByProviderId = buildFindCustomersByProviderId({
  select: dbClient.select,
  rowToCustomer,
});
export const findRequestByCustomerId = buildFindRequestByCustomerId({
  select: dbClient.select,
  rowToCustomer,
});
export const findRequestsByProviderId = buildFindRequestsByProviderId({
  select: dbClient.select,
  rowToCustomer,
});
export const findProviderByCustomerId = buildFindProviderByCustomerId({
  select: dbClient.select,
  rowToCustomer,
});

export const insertCustomer = buildInsertCustomer({
  insert: dbClient.insert,
});

export const deleteCustomer = buildDeleteCustomer({
  insert: dbClient.insert,
  remove: dbClient.delete,
});

export { fetchUserById, fetchUserRole } from "./network";
