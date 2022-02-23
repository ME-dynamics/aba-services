import { entityTypes } from "../types";

export function buildMakeTask(args: entityTypes.IBuildMakeTask) {
  const { uuid } = args;
  return function makeTask(task: entityTypes.IMakeTask) {
    const {
      userId,
      providerId,
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = task;
    let { content, done } = task;

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

    const madeTask: entityTypes.IMadeTask = {
      get: {
        userId: () => userId,
        providerId: () => providerId,
        id: () => id,
        content: () => content,
        done: () => done,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      set: {
        content: setContent,
        done: setDone,
        undone,
      },
      object: () => {
        return {
          userId,
          providerId,
          id,
          content,
          done,
          createdAt,
          modifiedAt,
        };
      },
    };
    return madeTask;
  };
}
