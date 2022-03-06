import { httpResult } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveCustomerNotes(
  args: usecaseTypes.IBuildRetrieveNote
) {
  const { findCustomerNotes } = args;
  const { ok } = httpResult.success;
  const { notFound } = httpResult.clientError;
  return async function retrieveCustomerNotes(
    info: usecaseTypes.IRetrieveNote
  ) {
    const notes = await findCustomerNotes(info);
    if (!notes) {
      return notFound({ error: "notes not found" });
    }
    return ok<entityTypes.IMadeNoteObject[]>({
      payload: notes,
    });
  };
}
