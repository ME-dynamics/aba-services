import { httpResultSuccess } from "aba-node";
import { makeNote } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateNote(args: usecaseTypes.IBuildCreateNote) {
  const { insertNote } = args;
  const { created } = httpResultSuccess;
  function noteInput(info: usecaseTypes.ICreateNote): entityTypes.IMakeNote {
    const { ownerId, userId, title, content, imageToken } = info;
    return {
      ownerId,
      userId,
      id: undefined,
      title,
      content,
      imageIds: undefined,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function createNote(info: usecaseTypes.ICreateNote) {
    // get images if exists;
    // create note
    // insert note

    const note = makeNote(noteInput(info));
    await insertNote(note.object());
    return created<entityTypes.IMadeNoteObject>({
      payload: note.object(),
    });
  };
}
