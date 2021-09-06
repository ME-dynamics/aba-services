import { httpResultClientError, httpResultSuccess } from "aba-node";
import { makeNote } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveNote(args: usecaseTypes.IBuildRemoveNote) {
  const { insertNote, findNoteById } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function removeNote(info: usecaseTypes.IRemoveNote) {
    const { userId, id } = info;
    const noteFound = await findNoteById(id);
    if (!noteFound || noteFound?.softDeleted) {
      return notFound({ error: "note not found" });
    }
    if (noteFound.ownerId !== userId) {
      return forbidden({ error: "you do not have access to this note" });
    }
    const note = makeNote(noteFound);
    note.set.remove();
    await insertNote(note.object());
    return ok<string>({
      payload: "note deleted",
    });
  };
}
