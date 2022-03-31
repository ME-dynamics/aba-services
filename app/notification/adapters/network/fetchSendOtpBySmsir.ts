import fetch from "node-fetch";

import type { adapterTypes } from "../../types";

export async function fetchSendOtpBySmsir(
  info: adapterTypes.ISmsirOtpRequest
): Promise<adapterTypes.ISmsirOtpResponse> {
  const { smsir, token } = info;
  const result = await fetch("https://RestfulSms.com/api/UltraFastSend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-sms-ir-secure-token": token,
    },
    body: JSON.stringify(smsir),
  });
  const data = Object(await result.json());

  return {
    success: Boolean(data.IsSuccessful),
    verificationId: Number(data.VerificationCodeId),
  };
}
