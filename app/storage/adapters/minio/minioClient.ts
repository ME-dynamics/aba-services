import { Client } from "minio";
import { adapterTypes } from "../../types";

export function buildMinioClient(args: adapterTypes.IBuildMinioClient) {
  const { Client } = args;
  const region = "est-ir";
  const endPoint = "127.0.0.1";
  const port = 9000;
  const client = new Client({
    endPoint,
    port,
    accessKey: "root_user",
    secretKey: "root_pass",
    useSSL: false,
    region,
  });
  return function minioClient(): Client {
    return client;
  };
}
