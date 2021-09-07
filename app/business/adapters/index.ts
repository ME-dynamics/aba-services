import { scyllaClient } from "aba-node";

import {
  buildInitDb,
  buildFindCustomersByStaffId,
  buildFindRequestByCustomerId,
  buildFindRequestsByStaffId,
  buildFindStaffByCustomerId,
  buildInsertStaffCustomer,
  buildInsertRequest,
  buildFindCustomer
} from "./db";

import { rowToCustomerStaffRequest, rowToStaffCustomer } from "./utils";

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


export const findCustomer = buildFindCustomer({select: dbClient.select, rowToStaffCustomer})

export const findCustomersByStaffId = buildFindCustomersByStaffId({
  select: dbClient.select,
  rowToStaffCustomer,
});
export const findRequestByCustomerId = buildFindRequestByCustomerId({
  select: dbClient.select,
  rowToCustomerStaffRequest,
});
export const findRequestsByStaffId = buildFindRequestsByStaffId({
  select: dbClient.select,
  rowToCustomerStaffRequest,
});
export const findStaffByCustomerId = buildFindStaffByCustomerId({
  select: dbClient.select,
  rowToStaffCustomer,
});

export const insertStaffCustomer = buildInsertStaffCustomer({
  insert: dbClient.insert,
});
export const insertRequest = buildInsertRequest({ insert: dbClient.insert });
