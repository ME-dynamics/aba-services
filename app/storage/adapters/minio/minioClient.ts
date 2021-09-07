import { Client } from "minio";
import { adapterTypes } from "../../types";

export function buildMinioClient(args: adapterTypes.IBuildMinioClient) {
  const { Client } = args;
  const errorPath = "storage service, adapters, upload to minio";
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

  // const imagesPolicy = `
  // {
  //   "Version": "2012-10-17",
  //   "Statement": [
  //     {
  //       "Action": [
  //         "s3:GetBucketLocation",
  //         "s3:ListBucket"
  //       ],
  //       "Effect": "Allow",
  //       "Principal": {
  //         "AWS": [
  //           "*"
  //         ]
  //       },
  //       "Resource": [
  //         "arn:aws:s3:::images"
  //       ],
  //       "Sid": ""
  //     },
  //     {
  //       "Action": [
  //         "s3:GetObject"
  //       ],
  //       "Effect": "Allow",
  //       "Principal": {
  //         "AWS": [
  //           "*"
  //         ]
  //       },
  //       "Resource": [
  //         "arn:aws:s3:::images/*"
  //       ],
  //       "Sid": ""
  //     }
  //   ]
  // }`;
  return function minioClient(): Client {
    return client;
  };
}
