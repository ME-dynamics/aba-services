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

export const applicationName = "business";
export const applicationVersion = "v1";

export { strings } from "./strings";
