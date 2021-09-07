import { adapterTypes } from "../../types";



export function buildInitPublicBucket(args: adapterTypes.IBuildSetPolicy) {
    const { minio } = args;
    const publicPolicy = `
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "readonly",
                "Effect": "Allow",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": "arn:aws:s3:::public/*"
            },
            {
                "Sid": "readonly",
                "Effect": "Allow",
                "Action": [
                    "s3:GetBucketPolicy"
                ],
                "Resource": "arn:aws:s3:::public"
            }
        ]
    }`;
    return async function initPublicBucket() {
        const bucketExists =  await minio.bucketExists("public");
        if(!bucketExists) {
            await minio.makeBucket("public", "est-ir");
        }
        await minio.setBucketPolicy("public", publicPolicy)
    }
} 