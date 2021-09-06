import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveUserNotes(args: usecaseTypes.IBuildRetrieveNote) {
  const { findUserNotes } = args;
  const { ok } = httpResultSuccess;
  const { notFound } = httpResultClientError;
  return async function retrieveUserNotes(info: usecaseTypes.tRetrieveNote) {
    const notes = await findUserNotes(info);
    if (!notes) {
      return notFound({ error: "notes not found" });
    }
    return ok<entityTypes.IMadeNoteObject[]>({
      payload: notes,
    });
  };
}
