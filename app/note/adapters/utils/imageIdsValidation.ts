import { fetchImageInfo } from "../network";

export async function imageIdsValidation(imageIds: string[], ownerId: string) {
  for (let index = 0; index < imageIds.length; index++) {
    const image = imageIds[index];
    const { error, payload } = await fetchImageInfo(image);
    if (error) {
      return false;
    }
    if (payload) {
      if (payload.userId !== ownerId) {
        // TODO: log unauthorized error;
        return false;
      }
    }
  }
  return true;
}
