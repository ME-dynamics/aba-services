import { makeOtp } from "../entities";
import {
  httpResultSuccess,
  httpResultClientError,
  httpResultServerError,
} from "aba-node";
import {
  IBuildPasswordlessStart,
  IMadeOtp,
  IOtp,
  IPasswordlessStart,
  IPasswordlessStartResult,
} from "../types";

export function buildPasswordlessStart(args: IBuildPasswordlessStart) {
  const { findOtpByPhone, insertOtp, sendOtpBySms, otpGen } = args;
  const { created } = httpResultSuccess;
  const { forbidden, tooManyRequests } = httpResultClientError;
  const { internalServerError } = httpResultServerError;

  function otpObj(phoneNumber: string): IOtp {
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
  return async function passwordlessStart(info: IPasswordlessStart) {
    const { phoneNumber } = info;
    // find otp in db
    const otpFound = await findOtpByPhone(phoneNumber);
    // create otp entity
    const otp: Readonly<IMadeOtp> = otpFound
      ? makeOtp(otpFound)
      : makeOtp(otpObj(phoneNumber)); // using this function instead of spread makes it about 50 time faster !
    // check if it's not permanently blocked
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
    if (otp.get.permanentBlock()) {
      return forbidden({ error: "your number in permanently blocked" });
    }
    // insert new codes to db;
    await insertOtp(otp.object());
    // send otp code by sms
    // only send sms if data was inserted

    const smsSent = await sendOtpBySms({ otpCode, phoneNumber });
    if (!smsSent) {
      return internalServerError({
        error: "SMS not sent",
      });
    }

    return created<IPasswordlessStartResult>({
      payload: {
        otpToken,
        deviceId: otp.get.deviceId(),
      },
    });
  };
}
