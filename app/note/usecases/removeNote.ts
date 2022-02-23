import { httpResult } from "aba-node";
import { makeNote } from "../entities";
import { usecaseTypes } from "../types";

export function buildRemoveNote(args: usecaseTypes.IBuildRemoveNote) {
  const { deleteNote, findNoteById } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function removeNote(info: usecaseTypes.IRemoveNote) {
    const { providerId, id } = info;
    const noteFound = await findNoteById(id);
    if (!noteFound || noteFound?.softDeleted) {
      return notFound({ error: "note not found" });
    }
    // AUTHORIZE
    if (noteFound.providerId !== providerId) {
      return forbidden({ error: "you do not have access to this note" });
    }
    const note = makeNote(noteFound);
    await deleteNote({
      customerId: note.get.customerId(),
      providerId: note.get.providerId(),
      createdAt: note.get.createdAt(),
    });
    return ok<string>({
      payload: "note deleted",
    });
  };
}
