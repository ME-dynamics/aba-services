import { makeImage } from "../entities";
import { httpResultClientError, httpResultSuccess } from "aba-node";
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
    const { file, session, userId } = info;
    const fileSessionObject = await findFileSession(session);
    if (!fileSessionObject || fileSessionObject.softDeleted) {
      return forbidden({ error: "action not allowed" });
    }
    // AUTHORIZE
    if (fileSessionObject.userId !== userId) {
      return forbidden({ error: "action not allowed" });
    }
    const { access } = fileSessionObject;
    const image = makeImage(imageInput(info, access));
    const imageTransform = imageTransformer({ width: 1280, height: 800 });
    const uploadStream = uploadToMinio({
      bucketName: access === "private" ? image.get.userId() : access,
      objectName: image.get.id(),
    });
    if (access === "private") {
      const bucketExists = await minio.bucketExists(image.get.userId());
      if (!bucketExists) {
        await minio.makeBucket(image.get.userId(), "est-ir");
      }
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
