import { scyllaClient } from "aba-node";
import { applicationVersion } from "../config";
import {
  buildFindNoteById,
  buildFindCustomerNotes,
  buildInitDb,
  buildInsertNote,
  buildDeleteNote,
} from "./db";
import { rowToNote } from "./utils";

const dbClient = scyllaClient({
  applicationName: "notes",
  applicationVersion,
  contactPoints: ["127.0.1.1"],
  errorPath: "note, adapters, db client",
  id: undefined,
  keyspace: "note",
  localDataCenter: "datacenter1",
});

export const initDb = buildInitDb({ init: dbClient.init });

export const findNoteById = buildFindNoteById({
  select: dbClient.select,
  rowToNote,
});
export const findCustomerNotes = buildFindCustomerNotes({
  select: dbClient.select,
  rowToNote,
});

export const insertNote = buildInsertNote({ insert: dbClient.insert });

export const deleteNote = buildDeleteNote({
  insert: dbClient.insert,
  remove: dbClient.delete,
});

// network

export { fetchImageInfo, fetchCustomerProvider } from "./network";

// utils
export { imageIdsValidation } from "./utils";
