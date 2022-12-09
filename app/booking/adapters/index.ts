import { scyllaClient } from "aba-node";
import { scyllaContactPoint } from "../config";

import { buildInitDb } from "./db";

const dbClient = scyllaClient({
  id: undefined,
  applicationName: "",
  applicationVersion: "v1",
  contactPoints: [scyllaContactPoint],
  errorPath: "booking, adapters, db",
  keyspace: "booking",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });
