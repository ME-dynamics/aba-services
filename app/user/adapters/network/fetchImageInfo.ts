import { retrieveImageInfo } from "../../../storage"


export async function fetchImageInfo(imageId: string) {
    const {error, payload} =  await retrieveImageInfo(imageId)
    if(error){
        return undefined;
    }
    return payload?.userId;
}