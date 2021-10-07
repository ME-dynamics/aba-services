import { makeImage } from "../entities";
import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";
export function buildUploadImage(args: usecaseTypes.IBuildUploadImage) {
  const {
    pump,
    uploadToMinio,
    imageTransformer,
    insertImage,
    fileType,
    minio,
  } = args;
  const { forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  function imageInput(info: usecaseTypes.IUploadImage): entityTypes.IMakeImage {
    const { userId, access } = info;
    return {
      userId,
      id: undefined,
      access,
      url: undefined,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  function transformSize(transform: "profile" | "note") {
    if (transform === "profile") {
      return { width: 360, height: 360 };
    }
    return { width: 1280, height: 800 };
  }
  return async function uploadImage(info: usecaseTypes.IUploadImage) {
    const { file, access, transform } = info;
    
    const typeStream = await fileType(file);
    if (!typeStream.fileType) {
      return forbidden({ error: "allowed file types : jpg, png" });
    }
    if (
      !(typeStream.fileType.ext === "jpg" || typeStream.fileType.ext === "png")
    ) {
      return forbidden({ error: "allowed file types : jpg, png" });
    }
    const image = makeImage(imageInput(info));
    const imageTransform = imageTransformer(transformSize(transform));
    if (access === "private") {
      const bucketExists = await minio.bucketExists(image.get.userId());
      if (!bucketExists) {
        await minio.makeBucket(image.get.userId(), "est-ir");
      }
    } 
    const uploadStream = uploadToMinio({
      bucketName: access === "private" ? image.get.userId() : access,
      objectName: image.get.id(),
    });
    await pump(typeStream, imageTransform, uploadStream);

    await insertImage(image.object());
    return ok<usecaseTypes.IUploadImageResult>({
      payload: {
        id: image.get.id(),
        url: image.get.url(),
      },
    });
  };
}
