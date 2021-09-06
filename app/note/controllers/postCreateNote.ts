import { createNote } from "../usecases"
import { controllerTypes } from "../types";
import { v4 } from "uuid";

export function buildPostCreateNote() {
  return async function postCreateNote(
    request: controllerTypes.tPostCreateNote
  ) {
      const { ownerId, title, content, imageToken } = request.body;
      
      return await createNote({
          ownerId,
          title,
          content,
          imageToken,
          userId: v4()
      })
  };
}
