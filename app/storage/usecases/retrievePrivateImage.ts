import { httpResultClientError, httpResultSuccess } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrievePrivateImage(
  args: usecaseTypes.IBuildRetrievePrivateImage
) {
  const { findImageById, minio } = args;
  const { notFound, forbidden } = httpResultClientError;
  const { ok } = httpResultSuccess;
  const expiry = 1 * 60 * 60; // one hour in seconds
  const minioUrl = "http://127.0.0.1:9000";
  const serverUrl = "https://127.0.0.1:13000";
  return async function retrievePrivateImage(
    info: usecaseTypes.IRetrievePrivateImage
  ) {
    const { imageId, userId } = info;
    const imageFound = await findImageById(imageId);
    if (!imageFound) {
      return notFound({ error: "image not found" });
    }
    // AUTHORIZE
    if (imageFound.userId !== userId) {
      return forbidden({ error: "access is not allowed" });
    }

    const url = await minio.presignedUrl("GET", userId, imageId, expiry);

    return ok<usecaseTypes.IRetrievePrivateImageResult>({
      payload: {
        url: url.replace(minioUrl, serverUrl),
      },
    });
  };
}
