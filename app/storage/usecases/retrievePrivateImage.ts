import { httpResult } from "aba-node";
import { serverUrl } from "../config"
import { usecaseTypes } from "../types";

export function buildRetrievePrivateImage(
  args: usecaseTypes.IBuildRetrievePrivateImage
) {
  const { findImageById, minio } = args;
  const { notFound, forbidden } = httpResult.clientError;
  const { ok } = httpResult.success;
  const expiry = 3 * 60; // 5 minutes in seconds
  const minioUrl = "http://127.0.0.1:9000";
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
    try {
      const url = await minio.presignedUrl("GET", userId, imageId, expiry, {prefix: "privateImage"});
      return ok<usecaseTypes.IRetrievePrivateImageResult>({
        payload: {
          url: url.replace(minioUrl, serverUrl),
        },
      });
    } catch (error) {
      return notFound({ error: "image not found" });
    }
  };
}
