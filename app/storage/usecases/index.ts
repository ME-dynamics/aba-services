import { pump } from "aba-node";
import {
  imageTransformer,
  uploadToMinio,
  insertImage,
  insertFileSession,
  findFileSession,
  minioClient,
} from "../adapters";
import { buildUploadImage } from "./uploadImage";
import { buildCreateFileSession } from "./createFileSession";
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
