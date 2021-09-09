import { types } from "aba-node";
import { Client } from "minio";
import internal from "node:stream";
import {
  tImageTransformerFunc,
  tUploadToMinioFunc,
  tInsertImage,
  tFindFileSession,
  tInsertFileSession,
  tFindImageById,
} from "./adapters";

// file session
export interface IBuildCreateFileSession {
  insertFileSession: tInsertFileSession;
}

export interface ICreateFileSession {
  userId: string;
  businessId: string;
  access: "private" | "public";
  countLimit: number;
  sizeLimit: number;
}

export interface IFileSessionResult {
  session: string;
  secret: string;
}

// upload image

export interface IBuildUploadImage {
  pump: types.tPump;
  uploadToMinio: tUploadToMinioFunc;
  imageTransformer: tImageTransformerFunc;
  insertImage: tInsertImage;
  findFileSession: tFindFileSession;
  minio: Client;
}

export interface IUploadImage {
  file: internal.Readable;
  session: string;
  userId: string;
}
export interface IUploadImageResult {
  id: string;
  url: string | undefined;
}

// retrieve private image

export interface IBuildRetrievePrivateImage {
  minio: Client;
  findImageById: tFindImageById;

}

export interface IRetrievePrivateImage {
  userId: string;
  imageId: string
}
export interface IRetrievePrivateImageResult {
  url: string;
}
