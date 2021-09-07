import { updateNote } from "../usecases";
import { controllerTypes } from "../types";
import { v4 } from "uuid";

export function buildPutUpdateNote() {
  return async function putUpdateNote(request: controllerTypes.tPutUpdateNote) {
    const { id, title, content, imageIds, imageToken } = request.body;
    return await updateNote({
      userId: v4(),
      id,
      title,
      content,
      imageIds,
      imageToken,
    });
  };
}
