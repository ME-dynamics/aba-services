import { ErrorFactory } from "aba-node";
import { entityTypes } from "../types";

export function buildMakeImage(args: entityTypes.IBuildMakeImage) {
  const { uuid } = args;
  const errorPath = "storage, entities, make image";
  return function makeImage(image: entityTypes.IMakeImage) {
    const {
      userId,
      id = uuid(),
      access,
      url,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = image;
    let { softDeleted } = image;
    if (access === "private" && url) {
      throw new ErrorFactory({
        name: "urlMustNotBeDefined",
        message: "if access is set to private, url must not be defined",
        detail: "",
        path: errorPath,
        nativeError: undefined,
      });
    }
    // * Setters
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    const madeImage: entityTypes.IMadeImage = {
      get: {
        userId: () => userId,
        id: () => id,
        access: () => access,
        url: () => url,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        remove,
        restore,
      },
      object: () => {
        return {
          userId,
          id,
          access,
          url,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeImage;
  };
}
