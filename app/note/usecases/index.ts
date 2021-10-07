import {
  insertNote,
  findUserNotes,
  findNoteById,
  imageIdsValidation,
} from "../adapters";
import { buildCreateNote } from "./createNote";
import { buildRetrieveUserNotes } from "./retrieveUserNotes";
import { buildUpdateNote } from "./updateNote";
import { buildRemoveNote } from "./removeNote";

export const createNote = buildCreateNote({ insertNote, imageIdsValidation });
export const retrieveUserNotes = buildRetrieveUserNotes({ findUserNotes });
export const updateNote = buildUpdateNote({
  findNoteById,
  insertNote,
  imageIdsValidation,
});
export const removeNote = buildRemoveNote({ findNoteById, insertNote });
