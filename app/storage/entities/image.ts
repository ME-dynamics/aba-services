import { ErrorFactory } from "aba-node";
import { entityTypes } from "../types";

export function buildMakeImage(args: entityTypes.IBuildMakeImage) {
  const { uuid, serverUrl } = args;
  const errorPath = "storage, entities, make image";
  return function makeImage(image: entityTypes.IMakeImage) {
    const {
      userId,
      id = uuid(),
      access,

      createdAt = new Date(),
      modifiedAt = new Date(),
    } = image;
    let { url } = image;
    if (access === "private" && url) {
      throw new ErrorFactory({
        name: "url_must_not_be_defined",
        message: "if access is set to private, url must not be defined",
        detail: "",
        path: errorPath,
        nativeError: undefined,
      });
    }
    if (access === "public") {
      url = `${serverUrl}/public/${id}`;
    }
    
    const madeImage: entityTypes.IMadeImage = {
      get: {
        userId: () => userId,
        id: () => id,
        access: () => access,
        url: () => url,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      object: () => {
        return {
          userId,
          id,
          access,
          url,
          createdAt,
          modifiedAt,
        };
      },
    };
    return madeImage;
  };
}
