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
    accessKey: "d91a608b05c0eb50586eba31cb9931157a01cb3d78c17e2cbc57d71ecb8c79e6e037a3a3326500a3c853b14553240a452c8334b08eb9cfd5b6c51d51d2e21f40",
    secretKey: "f5d1b5870939ee32473350d5ceccbfbd81dd0e6bcd454b541f92e0522f9ad44a6267d066175d0aa1933d04d8240fdf2f7a2df902002ff1bcfbac467bc38ced45",
    useSSL: false,
    region,
  });
  return function minioClient(): Client {
    return client;
  };
}
