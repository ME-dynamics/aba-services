import { removeNote } from "../usecases";
import { controllerTypes } from "../types";
import { v4 } from "uuid";

export function buildDeleteRemoveNote() {
  return async function deleteRemoveNote(
    request: controllerTypes.tDeleteRemoveNote
  ) {
    const { id } = request.params;
    return await removeNote({ ownerId: v4(), id });
  };
}
