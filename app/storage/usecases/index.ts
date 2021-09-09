import { pump } from "aba-node";
import {
  imageTransformer,
  uploadToMinio,
  insertImage,
  insertFileSession,
  findFileSession,
  findImageById,
  minioClient,
} from "../adapters";
import { buildUploadImage } from "./uploadImage";
import { buildCreateFileSession } from "./createFileSession";
import { buildRetrievePrivateImage } from "./retrievePrivateImage";
export const createFileSession = buildCreateFileSession({
  insertFileSession,
});

export const uploadImage = buildUploadImage({
  imageTransformer,
  uploadToMinio,
  pump,
  findFileSession,
  insertImage,
  minio: minioClient(),
});

export const retrievePrivateImage = buildRetrievePrivateImage({
  findImageById,
  minio: minioClient(),
});
