import { ISendOtpSms } from "../../types";

export function buildSendOtpBySms() {
  // need to inject http request by fetch;
  // or later grpc for service
  // need insert to db function
  // insert to db query
  return async function sendOtpBySms(info: ISendOtpSms): Promise<boolean> {
    const { otpCode, phoneNumber } = info;
    // make a request to sms service;
    // store information, id maybe
    console.log(`${phoneNumber} code is: ${otpCode} `);
    return true;
  };
}
