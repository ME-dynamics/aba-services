import { scyllaClient } from "aba-node";

// TODO: move all this to config file
const dbClient = scyllaClient({
  id: undefined,
  applicationName: "notification",
  applicationVersion: "v1",
  keyspace: "notification",
  localDataCenter: "datacenter1",
  contactPoints: ["127.0.1.1"],
  errorPath: "notification, adapters",
});
