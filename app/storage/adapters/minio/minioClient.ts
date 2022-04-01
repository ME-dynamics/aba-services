import { Client } from "minio";
import { minioCredentials } from "../../config"
import { adapterTypes } from "../../types";

export function buildMinioClient(args: adapterTypes.IBuildMinioClient) {
  const { Client } = args;
  const region = "est-ir";
  const endPoint = "127.0.0.1";
  const port = 9000;
  const { accessKey, secretKey } = minioCredentials;
  const client = new Client({
    endPoint,
    port,
    accessKey,
    secretKey,
    useSSL: false,
    region,

  });
  return function minioClient(): Client {
    return client;
  };
}
