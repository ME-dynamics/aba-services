// start your http, grpc, kafka , etc interface here
import { types, buildRouteGenerator } from "aba-node";
import multipart from "@fastify/multipart";
import { uploadImage } from "./uploadImage";
// import { uploadSession } from "./fileSession";
import { retrievePrivateImage } from "./retrievePrivateImage";
import {
  // sFileSessionSchema,
  sUploadImage,
  sRetrievePrivateImage,
} from "../schemas";
import { applicationVersion } from "../config";

export async function startStorageServer(app: types.tHttpInstance) {
  const routeGen = buildRouteGenerator({
    service: "storage",
    version: applicationVersion,
  });
  app.register(multipart, {
    limits: {
      fieldNameSize: 8000,
      fieldSize: 8000,
      fields: 2,
      fileSize: 12e6, // 8 megabyte for file limit 8e6
      files: 1,
      headerPairs: 2000,
    },
  });
  app.get(
    routeGen(["private", ":imageId"]),
    { schema: sRetrievePrivateImage },
    retrievePrivateImage
  );
  app.post(routeGen(["upload"]), { schema: sUploadImage }, uploadImage);
  // app.post(
  //   `${internal}/file/session`,
  //   { schema: sFileSessionSchema },
  //   uploadSession
  // );
}
