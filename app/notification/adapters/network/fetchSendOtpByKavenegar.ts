import { KavenegarApi } from "kavenegar";
import { kavenegarApiKey } from "../../config";
import type { adapterTypes } from "../../types";

const kavenegar = KavenegarApi({
  apikey: kavenegarApiKey,
});

function verifyLookup(
  info: adapterTypes.IKavenegarVerifyLookup
): Promise<adapterTypes.IFetchOtpResponse> {
  return new Promise((resolve, reject) => {
    const { receptor, template, token } = info;
    kavenegar.VerifyLookup(
      {
        receptor,
        token,
        template,
      },
      function kavenegarCallBack(response, status) {
        if (status === 200) {
          resolve({
            success: true,
            verificationId: response[0].messageid,
          });
        } else {
          reject({
            success: false,
            verificationId: -1,
          });
        }
      }
    );
  });
}

export async function fetchSendOtpByKavenegar(
  info: adapterTypes.IKavenegarOtpRequest
): Promise<adapterTypes.IFetchOtpResponse> {
  const { phoneNumber, otpCode, template } = info;
  return await verifyLookup({
    receptor: phoneNumber,
    token: otpCode,
    template,
  });
}
