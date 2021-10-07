import { httpResultSuccess, httpResultClientError } from "aba-node";
import { makeNote } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateNote(args: usecaseTypes.IBuildCreateNote) {
  const { insertNote, imageIdsValidation } = args;
  const { created } = httpResultSuccess;
  const { forbidden } = httpResultClientError;
  function noteInput(info: usecaseTypes.ICreateNote): entityTypes.IMakeNote {
    const { ownerId, userId, title, content, imageIds } = info;
    return {
      ownerId,
      userId,
      id: undefined,
      title,
      content,
      imageIds,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function createNote(info: usecaseTypes.ICreateNote) {
    const { imageIds, ownerId } = info;
    if (imageIds) {
      const imagesValid = await imageIdsValidation(imageIds, ownerId);
      if (!imagesValid) {
        return forbidden({ error: "image is not valid" });
      }
    }
    const note = makeNote(noteInput(info));
    await insertNote(note.object());
    return created<entityTypes.IMadeNoteObject>({
      payload: note.object(),
    });
  };
}
