import { pump } from "aba-node";
import { stream } from "file-type";
import {
  imageTransformer,
  uploadToMinio,
  insertImage,
  // insertFileSession,
  findImageById,
  minioClient,
} from "../adapters";
import { buildRetrieveImageInfo } from "./retrieveImageInfo";
import { buildUploadImage } from "./uploadImage";
// import { buildCreateFileSession } from "./createFileSession";
import { buildRetrievePrivateImage } from "./retrievePrivateImage";
// export const createFileSession = buildCreateFileSession({
//   insertFileSession,
// });

export const uploadImage = buildUploadImage({
  imageTransformer,
  uploadToMinio,
  pump,
  fileType: stream,
  insertImage,
  minio: minioClient(),
});

export const retrievePrivateImage = buildRetrievePrivateImage({
  findImageById,
  minio: minioClient(),
});

export const retrieveImageInfo = buildRetrieveImageInfo({ findImageById });
