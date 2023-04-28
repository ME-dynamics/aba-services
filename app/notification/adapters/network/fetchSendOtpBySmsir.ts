import {request} from "undici";

import type { adapterTypes } from "../../types";

export async function fetchSendOtpBySmsir(
  info: adapterTypes.ISmsirOtpRequest
): Promise<adapterTypes.IFetchOtpResponse> {
  const { smsir, token } = info;
  const {body} = await request("https://RestfulSms.com/api/UltraFastSend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-sms-ir-secure-token": token,
    },
    body: JSON.stringify(smsir),
  });
  const data = Object(await body.json());
  return {
    success: Boolean(data.IsSuccessful),
    verificationId: Number(data.VerificationCodeId),
  };
}
