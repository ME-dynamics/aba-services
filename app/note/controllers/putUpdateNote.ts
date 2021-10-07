import { updateNote } from "../usecases";
import { controllerTypes } from "../types";

export function buildPutUpdateNote() {
  return async function putUpdateNote(request: controllerTypes.tPutUpdateNote) {
    const { id, title, content, imageIds } = request.body;
    return await updateNote({
      ownerId: "",
      id,
      title,
      content,
      imageIds,
      
    });
  };
}
