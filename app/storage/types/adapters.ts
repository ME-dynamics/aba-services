import { types } from "aba-node";
import { Client } from "minio";
import sharp, { Sharp } from "sharp";
import { PassThrough } from "stream";
import {
  IMadeFileSession,
  IMadeFileSessionObject,
  IMadeImageObject,
  IMakeImage,
} from "./entities";

//  minio
export interface IBuildUploadToMinio {
  minio: Client;
  PassThrough: typeof PassThrough;
}
export interface IBuildMinioClient {
  Client: typeof Client;
}
export type tUploadToMinioFunc = (info: IUploadToMinio) => PassThrough;
export interface IUploadToMinio {
  bucketName: string;
  objectName: string;
}

export interface IBuildSetPolicy {
  minio: Client;
}
// utils
export interface IBuildImageTransformer {
  sharp: typeof sharp;
}
export interface IImageTransformer {
  width: number;
  height: number;
}
export type tImageTransformerFunc = (args: IImageTransformer) => Sharp;
export type tRowToImage = (row: types.tRow) => IMadeImageObject;
export type tRowToFileSession = (row: types.tRow) => IMadeFileSessionObject;
// db
export interface IBuildInit {
  init: types.tDbInitFunc;
}

export type tFindImageByUserId = (
  userId: string
) => Promise<IMadeImageObject[] | undefined>;
export type tInsertImage = (info: IMadeImageObject) => Promise<void>;

export interface IBuildFindBy {
  select: types.tDbSelectFunc;
  rowToImage: tRowToImage;
}
export interface IBuildFindByFileSession {
  select: types.tDbSelectFunc;
  rowToFileSession: tRowToFileSession;
}
export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}
export type tFindFileSession = (
  token: string
) => Promise<IMadeFileSessionObject | undefined>;
export type tInsertFileSession = (
  fileSession: IMadeFileSessionObject
) => Promise<void>;
