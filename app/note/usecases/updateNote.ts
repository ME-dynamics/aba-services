import { httpResult } from "aba-node";
import { makeNote } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildUpdateNote(args: usecaseTypes.IBuildUpdateNote) {
  const { findNoteById, insertNote, imageIdsValidation } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function updateNote(info: usecaseTypes.IUpdateNote) {
    const { id, providerId, title, content, imageIds } = info;
    const noteFound = await findNoteById(id);
    if (!noteFound || noteFound?.softDeleted) {
      return notFound({ error: "note not found" });
    }
    // AUTHORIZE
    if (noteFound.providerId !== providerId) {
      return forbidden({ error: "you don't have access to note" });
    }
    if (imageIds) {
      const imageValid = await imageIdsValidation(imageIds, providerId);
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
