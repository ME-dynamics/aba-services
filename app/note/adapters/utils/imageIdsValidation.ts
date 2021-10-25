import { fetchImageInfo } from "../network";

export async function imageIdsValidation(
  imageIds: string[],
  providerId: string
) {
  const requests = [];
  for (let index = 0; index < imageIds.length; index++) {
    const image = imageIds[index];
    requests.push(fetchImageInfo(image));
  }
  const results = await Promise.all(requests);
  for (let index = 0; index < results.length; index++) {
    const { error, payload } = results[index];
    if (error) {
      return false;
    }
    if (payload && payload.userId !== providerId) {
      // TODO: log unauthorized error;
      return false;
    }
  }
  return true;
}
