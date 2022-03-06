import { httpResult } from "aba-node";
import { makeOtp, makeDeviceId } from "../entities";
import { strings } from "../config";
import { usecaseTypes, entityTypes } from "../types";

export function buildPasswordlessStart(
  args: usecaseTypes.IBuildPasswordlessStart
) {
  const {
    findOtpByPhone,
    insertOtp,
    sendOtpBySms,
    otpGen,
    sha512,
    insertDeviceId,
  } = args;
  const { created } = httpResult.success;
  const { forbidden, tooManyRequests } = httpResult.clientError;
  const { serviceUnavailable } = httpResult.serverError;
  function deviceIdInput(
    info: usecaseTypes.IPasswordlessStart
  ): entityTypes.IDeviceId {
    const {
      phoneNumber,
      deviceUniqueId,
      isDevice,
      platform,
      brand,
      manufacturer,
      model,
      modelId,
      designName,
      productName,
      deviceYearClass,
      supportedCpuArch,
      os,
      osVersion,
      osBuildId,
      osInternalBuildId,
      androidApiLevel,
      deviceName,
    } = info;
    const deviceId = sha512(
      `${phoneNumber}${deviceUniqueId}${isDevice}${platform}` +
        `${brand}${manufacturer}${model}${modelId}${designName}` +
        `${productName}${deviceYearClass}${supportedCpuArch}${os}${osVersion}` +
        `${osBuildId}${osInternalBuildId}${androidApiLevel}${deviceName}`
    );
    return {
      deviceId,
      phoneNumber,
      deviceUniqueId,
      isDevice,
      platform,
      brand,
      manufacturer,
      model,
      modelId,
      designName,
      productName,
      deviceYearClass,
      supportedCpuArch,
      os,
      osVersion,
      osBuildId,
      osInternalBuildId,
      androidApiLevel,
      deviceName,
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  function otpInput(phoneNumber: string): entityTypes.IOtp {
    return {
      id: undefined,
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
    };
  }
  return async function passwordlessStart(
    info: usecaseTypes.IPasswordlessStart
  ) {
    const { phoneNumber } = info;
    // find otp in db
    const otpFound = await findOtpByPhone(phoneNumber);
    // create otp entity
    const otp: Readonly<entityTypes.IMadeOtp> = otpFound
      ? makeOtp(otpFound)
      : makeOtp(otpInput(phoneNumber)); // using function instead of spread makes it about 50 time faster !
    // * TODO: these to checks only needed when otp found - DONE
    if (otpFound) {
      // check if it's not permanently blocked

      if (otp.get.permanentBlock()) {
        return forbidden({
          error: strings.numberPermanentlyBlocked.fa,
        });
      }
      const tempBlockTime = otp.get.otpTempBlockDate();
      if (tempBlockTime && tempBlockTime.getTime() > Date.now()) {
        return tooManyRequests({
          error: strings.tooManyAttempts.fa,
        });
      }
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
    if (otpFound && otp.get.permanentBlock()) {
      return forbidden({ error: strings.numberPermanentlyBlocked.fa });
    }
    const deviceId = makeDeviceId(deviceIdInput(info));
    // insert new codes to db;
    await Promise.all([
      insertOtp(otp.object()),
      insertDeviceId(deviceId.object()),
    ]);
    // send otp code by sms
    const smsSent = await sendOtpBySms({ otpCode, phoneNumber });
    if (!smsSent) {
      return serviceUnavailable({
        error: strings.smsNotSent.fa,
      });
    }

    return created<usecaseTypes.IPasswordlessStartResult>({
      payload: {
        otpToken,
        deviceId: deviceId.get.deviceId(),
      },
    });
  };
}
