import { buildPostUploadImage } from "./postUploadImage";
import { buildGetPrivateImage } from "./getPrivateImage";
import { buildPostFileSession } from "./postFileSession";

export const getPrivateImage = buildGetPrivateImage();


export const postUploadImage = buildPostUploadImage();

export const postFileSession = buildPostFileSession();

