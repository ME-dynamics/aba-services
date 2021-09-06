import { scyllaClient } from "aba-node";
import { applicationVersion } from "../config";
import {
  buildFindNoteById,
  buildFindUserNotes,
  buildInitDb,
  buildInsertNote,
} from "./db";
import { rowToNote } from "./utils";

const dbClient = scyllaClient({
  applicationName: "notes",
  applicationVersion,
  contactPoints: ["127.0.1.1"],
  errorPath: "notes, adapters, db client",
  id: undefined,
  keyspace: "notes",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });

export const findNoteById = buildFindNoteById({
  select: dbClient.select,
  rowToNote,
});
export const findUserNotes = buildFindUserNotes({
  select: dbClient.select,
  rowToNote,
});

export const insertNote = buildInsertNote({ insert: dbClient.insert });
