import { buildPostCreateNote } from "./postCreateNote";
import { buildPutUpdateNote } from "./putUpdateNote";
import { buildGetRetrieveUserNotes } from "./getRetrieveUserNotes";
import { buildDeleteRemoveNote } from "./deleteRemoveNote";

export const postCreateNote = buildPostCreateNote();
export const putUpdateNote = buildPutUpdateNote();
export const getRetrieveUserNotes = buildGetRetrieveUserNotes();
export const deleteRemoveNote = buildDeleteRemoveNote();
