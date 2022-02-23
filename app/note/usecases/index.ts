import {
  insertNote,
  findCustomerNotes,
  findNoteById,
  imageIdsValidation,
  deleteNote
} from "../adapters";
import { buildCreateNote } from "./createNote";
import { buildRetrieveCustomerNotes } from "./retrieveCustomerNotes";
import { buildUpdateNote } from "./updateNote";
import { buildRemoveNote } from "./removeNote";

export const createNote = buildCreateNote({ insertNote, imageIdsValidation });
export const retrieveUserNotes = buildRetrieveCustomerNotes({ findCustomerNotes });
export const updateNote = buildUpdateNote({
  findNoteById,
  insertNote,
  imageIdsValidation,
});
export const removeNote = buildRemoveNote({ findNoteById, deleteNote });
