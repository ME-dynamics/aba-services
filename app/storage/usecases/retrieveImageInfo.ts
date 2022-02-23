import { httpResult } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrieveImageInfo(
  args: usecaseTypes.IBuildRetrieveImageInfo
) {
  const { findImageById } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrieveImageInfo(imageId: string) {
    const imageFound = await findImageById(imageId);
    if (!imageFound) {
      return notFound({ error: "image not found" });
    }
    return ok({ payload: imageFound });
  };
}
