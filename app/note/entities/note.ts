import { entityTypes } from "../types";

export function buildMakeNote(args: entityTypes.IBuildMakeNote) {
  const { uuid } = args;
  return function makeNote(note: entityTypes.IMakeNote) {
    const {
      providerId,
      customerId,
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = note;
    let { title, content, imageIds, softDeleted } = note;

    // * Setters
    function setTitle(newTitle: string) {
      title = newTitle;
      modifiedAt.setTime(Date.now());
    }
    function setContent(newContent: string) {
      content = newContent;
      modifiedAt.setTime(Date.now());
    }
    function setImageIds(newImageIds: string[] | undefined) {
      imageIds = newImageIds;
      modifiedAt.setTime(Date.now());
    }
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    const madeNote: entityTypes.IMadeNote = {
      get: {
        providerId: () => providerId,
        customerId: () => customerId,
        id: () => id,
        title: () => title,
        content: () => content,
        imageIds: () => imageIds,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        title: setTitle,
        content: setContent,
        imageIds: setImageIds,
        remove,
        restore,
      },
      object: () => {
        return {
          providerId,
          customerId,
          id,
          title,
          content,
          imageIds,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeNote;
  };
}
