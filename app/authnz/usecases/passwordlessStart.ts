import { makeOtp } from "../entities";
import {
  httpResultSuccess,
  httpResultClientError,
  httpResultServerError,
} from "aba-node";
import {
  usecaseTypes,
  entityTypes
} from "../types";

export function buildPasswordlessStart(args: usecaseTypes.IBuildPasswordlessStart) {
  const { findOtpByPhone, insertOtp, sendOtpBySms, otpGen } = args;
  const { created } = httpResultSuccess;
  const { forbidden, tooManyRequests } = httpResultClientError;
  const { internalServerError } = httpResultServerError;

  function otpInput(phoneNumber: string): entityTypes.IOtp {
    return {
      id: undefined,
      deviceId: undefined,
      phoneNumber,
      phoneConfirm: false,
      otpCode: undefined,
      otpCodeResendCount: 0,
      otpTempBlockDate: undefined,
      otpToken: undefined,
      otpTokenValidDate: undefined,
      permanentBlock: false,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function passwordlessStart(info: usecaseTypes.IPasswordlessStart) {
    const { phoneNumber } = info;
    // find otp in db
    const otpFound = await findOtpByPhone(phoneNumber);
    // create otp entity
    const otp: Readonly<entityTypes.IMadeOtp> = otpFound
      ? makeOtp(otpFound)
      : makeOtp(otpInput(phoneNumber)); // using function instead of spread makes it about 50 time faster !
    // check if it's not permanently blocked
    // TODO: these to checks only needed when otp found
    if (otp.get.permanentBlock()) {
      return forbidden({
        error: "your number is permanently blocked",
      });
    }
    const tempBlockTime = otp.get.otpTempBlockDate();
    if (tempBlockTime && tempBlockTime.getTime() > Date.now()) {
      return tooManyRequests({
        error: "you need to wait at least one minute",
      });
    }
    // generate new token and otp code;
    const {
      otpCode,
      hashedOtpCode,
      otpTempBlockDate,
      otpToken,
      otpTokenValidDate,
    } = await otpGen();

    otp.set.otp(hashedOtpCode, otpToken, otpTokenValidDate, otpTempBlockDate);

    // check if permanent block is applied after setting new otp
    // TODO: only when otp found
    if (otp.get.permanentBlock()) {
      return forbidden({ error: "your number in permanently blocked" });
    }
    // insert new codes to db;
    await insertOtp(otp.object());
    
    // send otp code by sms
    const smsSent = await sendOtpBySms({ otpCode, phoneNumber });
    if (!smsSent) {
      return internalServerError({
        error: "SMS not sent",
      });
    }

    return created<usecaseTypes.IPasswordlessStartResult>({
      payload: {
        otpToken,
        deviceId: otp.get.deviceId(),
      },
    });
  };
}
