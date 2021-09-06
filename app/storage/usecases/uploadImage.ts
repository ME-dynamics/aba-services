import { makeFileSession, makeImage } from "../entities";
import {
  httpResultClientError,
  httpResultSuccess,
  httpResultServerError,
} from "aba-node"; // import http_result_* modules that you need here
import { entityTypes, usecaseTypes } from "../types";
import { stream } from "file-type";
export function buildUploadImage(args: usecaseTypes.IBuildUploadImage) {
  const {
    pump,
    uploadToMinio,
    imageTransformer,
    insertImage,
    findFileSession,
    minio,
  } = args;
  const { forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  function imageInput(
    info: usecaseTypes.IUploadImage,
    access: "private" | "public"
  ): entityTypes.IMakeImage {
    const { userId } = info;
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
  return async function uploadImage(info: usecaseTypes.IUploadImage) {
    const { file, session } = info;
    const fileSessionObject = await findFileSession(session);
    if (!fileSessionObject) {
      return forbidden({ error: "action not allowed" });
    }
    const image = makeImage(imageInput(info, fileSessionObject.access));
    const imageTransform = imageTransformer({ width: 1280, height: 800 });
    const uploadStream = uploadToMinio({
      bucketName: image.get.userId(),
      objectName: image.get.id(),
    });
    const bucketExists = await minio.bucketExists(image.get.userId());
    if (!bucketExists) {
      await minio.makeBucket(image.get.userId(), "est-ir");
    }
    const typeStream = await stream(file);
    if (!typeStream.fileType) {
      return forbidden({ error: "allowed file types : jpg, png" });
    }
    if (
      !(typeStream.fileType.ext === "jpg" || typeStream.fileType.ext === "png")
    ) {
      return forbidden({ error: "allowed file types : jpg, png" });
    }

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
