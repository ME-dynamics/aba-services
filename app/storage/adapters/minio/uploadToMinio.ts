import { ErrorFactory } from "aba-node";
import { adapterTypes } from "../../types";

export function buildUploadToMinio(args: adapterTypes.IBuildUploadToMinio) {
  const { minio, PassThrough } = args;
  const errorPath = "storage service, adapters, upload to minio";

  return function uploadToMinio(info: adapterTypes.IUploadToMinio) {
    const { bucketName, objectName } = info;
    const uploadStream = new PassThrough();
    minio.putObject(
      bucketName,
      objectName,
      uploadStream,
      function minioPutObjectCb(err, result) {
        if (err) {
          uploadStream.destroy();
          throw new ErrorFactory({
            name: "putObjectFailed",
            message: "uploading object to minio failed",
            detail: "",
            nativeError: err,
            path: errorPath,
          });
        }
      }
    );
    uploadStream.on("error", (err) => {
      uploadStream.destroy();
      throw new ErrorFactory({
        name: "putObjectFailed",
        message: "uploading object to minio failed",
        detail: "",
        nativeError: err,
        path: errorPath,
      });
    });
    return uploadStream;
  };
}
