if (process.env.NODE_ENV !== "production") {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { config } = require("dotenv");
    config();
  } catch (error) {
    console.log(
      "you should install dotenv in dev when not in production environment"
    );
    console.log(error);
    process.exit(1);
  }
}

export const applicationVersion = "v1";
export const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const scyllaContactPoint = process.env.SCYLLA_CONTACT_POINT
  ? process.env.SCYLLA_CONTACT_POINT
  : "127.0.1.1";
export const serverUrl = "https://storage.taskyn.ir";
// TODO: move this to vault

function minioCredentialsGen() {
  if (process.env.NODE_ENV === "production") {
    // TODO: better validation for env vars
    const minioAccessKey = process.env.MINIO_ACCESS_KEY || "";
    const minioSecretKey = process.env.MINIO_SECRET_KEY || "";
    return {
      accessKey: minioAccessKey,
      secretKey: minioSecretKey,
    };
  }
  return {
    accessKey: "root_user",
    secretKey: "root_pass",
  };
}

export const minioCredentials = minioCredentialsGen();
