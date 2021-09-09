// inject and export adapters
import { PassThrough } from "stream";
import { Client } from "minio";
import sharp from "sharp";
import { scyllaClient } from "aba-node";

import { scyllaContactPoint } from "../config";
import {
  buildFindFileSession,
  buildFindImageById,
  buildInitDb,
  buildInsertFileSession,
  buildInsertImage,
} from "./db";
import {
  buildMinioClient,
  buildUploadToMinio,
  buildInitPublicBucket,
} from "./minio";
import { buildImageTransformer, rowToFileSession, rowToImage } from "./utils";

const dbClient = scyllaClient({
  applicationName: "storage",
  applicationVersion: "v1",
  id: undefined,
  contactPoints: [scyllaContactPoint],
  keyspace: "storage",
  errorPath: "storage, adapters",
  localDataCenter: "datacenter1",
});

export const minioClient = buildMinioClient({ Client });
export const uploadToMinio = buildUploadToMinio({
  minio: minioClient(),
  PassThrough,
});
export const initPublicBucket = buildInitPublicBucket({ minio: minioClient() });
export const imageTransformer = buildImageTransformer({ sharp });
export const initDb = buildInitDb({ init: dbClient.init });
export const findFileSession = buildFindFileSession({
  select: dbClient.select,
  rowToFileSession,
});
export const findImageById = buildFindImageById({
  select: dbClient.select,
  rowToImage,
});

export const insertFileSession = buildInsertFileSession({
  insert: dbClient.insert,
});
export const insertImage = buildInsertImage({ insert: dbClient.insert });
