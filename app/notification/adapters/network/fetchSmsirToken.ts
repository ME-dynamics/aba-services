import fetch from "node-fetch";
import { smsirApiKey, smsirSecretKey } from "../../config";
function body() {
  return `{"UserApiKey":"${smsirApiKey}","SecretKey":"${smsirSecretKey}"}`;
}

export async function fetchSmsirToken(): Promise<string | undefined> {
  const result = await fetch("https://RestfulSms.com/api/Token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body(),
  });
  const data = Object(await result.json());
  // console.log(data);
  const success = Boolean(data.IsSuccessful);
  const token = `${data.TokenKey}`;
  if (!success) {
    return undefined;
  }
  return token;
}
