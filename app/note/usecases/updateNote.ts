import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeNote } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildUpdateNote(args: usecaseTypes.IBuildUpdateNote) {
  const { findNoteById, insertNote, imageIdsValidation } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function updateNote(info: usecaseTypes.IUpdateNote) {
    const { id, ownerId, title, content, imageIds } = info;
    const noteFound = await findNoteById(id);
    if (!noteFound || noteFound?.softDeleted) {
      return notFound({ error: "note not found" });
    }
    // AUTHORIZE
    if (noteFound.ownerId !== ownerId) {
      return forbidden({ error: "you don't have access to note" });
    }
    if (imageIds) {
      const imageValid = await imageIdsValidation(imageIds, ownerId);
      if(!imageValid) {
        return forbidden({ error: "image is not valid" });
      } 
    }
    const note = makeNote(noteFound);
    note.set.title(title);
    note.set.content(content);
    note.set.imageIds(imageIds);
    await insertNote(note.object());
    return ok<entityTypes.IMadeNoteObject>({
      payload: note.object(),
    });
  };
}
