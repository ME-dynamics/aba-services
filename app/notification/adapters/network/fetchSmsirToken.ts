import { request } from "undici";
import { smsirApiKey, smsirSecretKey } from "../../config";
function bodyGen() {
  return `{"UserApiKey":"${smsirApiKey}","SecretKey":"${smsirSecretKey}"}`;
}

export async function fetchSmsirToken(): Promise<string | undefined> {
  const { body } = await request("https://RestfulSms.com/api/Token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyGen(),
  });
  const data = Object(await body.json());
  // console.log(data);
  const success = Boolean(data.IsSuccessful);
  const token = `${data.TokenKey}`;
  if (!success) {
    return undefined;
  }
  return token;
}
