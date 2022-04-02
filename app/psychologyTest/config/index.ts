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

export const scyllaContactPoint =
  process.env.SCYLLA_CONTACT_POINT || "127.0.1.1";

export const applicationVersion = "v1";
