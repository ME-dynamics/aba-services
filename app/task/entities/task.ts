import { entityTypes } from "../types";

export function buildMakeTask(args: entityTypes.IBuildMakeTask) {
  const { uuid } = args;
  return function makeTask(task: entityTypes.IMakeTask) {
    const {
      userId,
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = task;
    let { content, done, softDeleted } = task;

    // Setters
    function setContent(newContent: string) {
      content = newContent;
      modifiedAt.setTime(Date.now());
    }
    function setDone() {
      done = true;
      modifiedAt.setTime(Date.now());
    }
    function undone() {
      done = false;
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
    const madeTask: entityTypes.IMadeTask = {
      get: {
        userId: () => userId,
        id: () => id,
        content: () => content,
        done: () => done,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        content: setContent,
        done: setDone,
        undone,
        remove,
        restore,
      },
      object: () => {
        return {
          userId,
          id,
          content,
          done,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeTask;
  };
}
