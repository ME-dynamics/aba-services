import { httpResult } from "aba-node";
import { sendOtpBySms } from "../../../notification";
import { isDev } from "../../config";
import type { adaptersTypes } from "../../types";

export function buildFetchSendOtpBySms() {
  if (isDev) {
    const { ok } = httpResult.success;
    return async function fetchSendOtpBySms(info: adaptersTypes.ISendOtpSms) {
      const { otpCode, phoneNumber } = info;
      // make a request to sms service;
      // store information, id maybe
      console.log(`${phoneNumber} code is: ${otpCode} `);
      return ok({ payload: "otp sent" });
    };
  }
  return sendOtpBySms;
}
