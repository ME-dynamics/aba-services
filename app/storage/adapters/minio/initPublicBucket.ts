import { adapterTypes } from "../../types";

export function buildInitPublicBucket(args: adapterTypes.IBuildSetPolicy) {
  const { minio } = args;
  const publicPolicy = JSON.stringify({
    Version: "2012-10-17",
    Statement: [
      {
        Action: ["s3:GetObject"],
        Effect: "Allow",
        Principal: {
          AWS: ["*"],
        },
        Resource: ["arn:aws:s3:::public/*"],
        Sid: "readonly",
      },
      {
        Action: ["s3:GetBucketPolicy", "s3:HeadBucket", "s3:ListBucket"],
        Effect: "Allow",
        Principal: {
          AWS: ["*"],
        },
        Resource: ["arn:aws:s3:::public"],
        Sid: "readonly",
      },
    ],
  });
  return async function initPublicBucket() {
    const bucketExists = await minio.bucketExists("public");
    if (!bucketExists) {
      await minio.makeBucket("public", "est-ir");
    }
    await minio.setBucketPolicy("public", publicPolicy);
  };
}
