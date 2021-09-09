// start your http, grpc, kafka , etc interface here
import { types } from "aba-node";
import multipart from "fastify-multipart";
import { uploadImage } from "./uploadImage";
import { uploadSession } from "./fileSession";
import { retrievePrivateImage } from "./retrievePrivateImage";
import {
  sFileSessionSchema,
  sUploadImage,
  sRetrievePrivateImage,
} from "../schemas";
const version = "v1";
const customerEndpoint = `/${version}/customer`;
const internal = `/${version}/internal`;

export async function startStorageServer(app: types.tHttpInstance) {
  app.register(multipart, {
    limits: {
      fieldNameSize: 2000,
      fieldSize: 2000,
      fields: 1,
      fileSize: 5e6, // 5 megabyte for file limit 5e6
      files: 1,
      headerPairs: 2000,
    },
  });
  app.get(
    `${customerEndpoint}/image/private/:imageId`,
    { schema: sRetrievePrivateImage },
    retrievePrivateImage
  );
  app.post(
    `${customerEndpoint}/image/upload`,
    { schema: sUploadImage },
    uploadImage
  );
  app.post(
    `${internal}/file/session`,
    { schema: sFileSessionSchema },
    uploadSession
  );
}
