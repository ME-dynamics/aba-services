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

export { strings } from "./strings";

export const applicationName = "authnz";
export const applicationVersion = "v1";

export const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

export const scyllaContactPoint =
  process.env.SCYLLA_CONTACT_POINT || "127.0.1.1";

export const jwtIssuer = process.env.JWT_ISSUER || "https://taskyn.ir";

export const scyllaKeySpace = "authnz";

export const jwtExpires = process.env.JWT_EXPIRES
  ? parseInt(process.env.JWT_EXPIRES)
  : 13;

function exitIfAdminNotDefined() {
  console.log("admin not defined");
  console.log({ admin: process.env.ADMIN });
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "process won't exit in development mode, but admin must be defined"
    );
    return;
  }
  process.exit(1);
}

export const admin = process.env.ADMIN
  ? process.env.ADMIN.split(",")
  : exitIfAdminNotDefined();
