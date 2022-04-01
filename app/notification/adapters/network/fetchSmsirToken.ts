import fetch from "node-fetch";

function body() {
  return '{"UserApiKey":"f86ff9e75397cb3d11f9e7","SecretKey":"117351d784c5596dc4804ac7050c03195b3048ece93f21f783144a3d9ff407c6"}';
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
