// start your http, grpc, kafka , etc interface here
import { httpClient } from "aba-node";
import multipart from "fastify-multipart";
import { uploadImage } from "./uploadImage";
import { uploadSession } from "./fileSession";
import { fileSessionSchema } from "../schemas";
import { port } from "../config";
const app = httpClient({ dev: true });
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
const version = "v1";
const customerEndpoint = `/${version}/customer`;
const internal = `/${version}/internal`;
app.post(`${customerEndpoint}/upload/image`, uploadImage);
app.post(
  `${internal}/file/session`,
  { schema: fileSessionSchema },
  uploadSession
);


export async function startServer() {
  try {
    await app.listen(port, "0.0.0.0");
  } catch (error) {
    app.log.fatal(error);
    process.exit(1);
  }
}
