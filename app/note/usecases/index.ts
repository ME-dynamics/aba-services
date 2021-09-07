import { insertNote, findUserNotes, findNoteById } from "../adapters";
import { buildCreateNote } from "./createNote";
import { buildRetrieveUserNotes } from "./retrieveUserNotes";
import { buildUpdateNote } from "./updateNote";
import { buildRemoveNote } from "./removeNote";

export const createNote = buildCreateNote({ insertNote });
export const retrieveUserNotes = buildRetrieveUserNotes({ findUserNotes });
export const updateNote = buildUpdateNote({ findNoteById, insertNote });
export const removeNote = buildRemoveNote({ findNoteById, insertNote });
