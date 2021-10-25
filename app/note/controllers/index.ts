import { fetchCustomerProvider } from "../adapters";
import { buildPostCreateNote } from "./postCreateNote";
import { buildPutUpdateNote } from "./putUpdateNote";
import { buildGetCustomerNotes } from "./getCustomerNotes";
import { buildDeleteNote } from "./deleteNote";

export const postCreateNote = buildPostCreateNote({ fetchCustomerProvider });
export const putUpdateNote = buildPutUpdateNote();
export const getCustomerNotes = buildGetCustomerNotes({ fetchCustomerProvider });
export const deleteNote = buildDeleteNote({ fetchCustomerProvider });
