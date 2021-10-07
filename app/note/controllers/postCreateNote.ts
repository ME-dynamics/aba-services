import { createNote } from "../usecases"
import { controllerTypes } from "../types";
import { v4 } from "uuid";

export function buildPostCreateNote() {
  return async function postCreateNote(
    request: controllerTypes.tPostCreateNote
  ) {
      const { ownerId, title, content, imageIds } = request.body;
      
      return await createNote({
          ownerId,
          title,
          content,
          imageIds,
          userId: v4()
      })
  };
}
