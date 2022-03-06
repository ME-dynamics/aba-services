import { httpResult } from "aba-node";
import { makeNote } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildCreateNote(args: usecaseTypes.IBuildCreateNote) {
  const { insertNote, imageIdsValidation } = args;
  const { created } = httpResult.success;
  const { forbidden } = httpResult.clientError;
  function noteInput(info: usecaseTypes.ICreateNote): entityTypes.IMakeNote {
    const { providerId, customerId, title, content, imageIds } = info;
    return {
      providerId,
      customerId,
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
    const { imageIds, providerId } = info;
    if (imageIds) {
      const imagesValid = await imageIdsValidation(imageIds, providerId);
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
