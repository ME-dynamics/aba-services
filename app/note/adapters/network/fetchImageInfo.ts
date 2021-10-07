import { retrieveImageInfo } from "../../../storage"



export async function fetchImageInfo(imageId: string) {
    return await retrieveImageInfo(imageId);
}
