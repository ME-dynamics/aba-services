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

const isDev = process.env.NODE_ENV !== "production";

function getKavenegarApiKey() {
  if (isDev) return "dev key";
  const key = process.env.KAVENEGAR_API_KEY;
  if (!key) {
    console.error("Kavenegar API key is not set");
    process.exit(1);
  }
  return key;
}

function getSMSirApiKey() {
  if (isDev) return "dev key";
  const key = process.env.SMSIR_API_KEY;
  if (!key) {
    console.error("SMSir API key is not set");
    process.exit(1);
  }
  return key;
}
function getSMSirSecretKey() {
  if (isDev) return "dev key";
  const key = process.env.SMSIR_SECRET_KEY;
  if (!key) {
    console.error("SMSir secret key is not set");
    process.exit(1);
  }
  return key;
}


export const kavenegarApiKey = getKavenegarApiKey();

export const smsirApiKey = getSMSirApiKey();
export const smsirSecretKey = getSMSirSecretKey();
export const scyllaContactPoint =
  process.env.SCYLLA_CONTACT_POINT || "127.0.1.1";
