import { httpResult } from "aba-node";

import { makeNotification } from "../entities";

import type { usecaseTypes, adapterTypes, entityTypes } from "../types";

export function buildSendOtpBySms(args: usecaseTypes.IBuildSendOtpSms) {
  // TODO: add multi services and random algo to choose them for sms provider
  const { insertNotification, retrieveSmsirToken, fetchSendOtpBySmsir } = args;
  function smsirInput(
    phoneNumber: string,
    otpCode: number,
    token: string
  ): adapterTypes.ISmsirOtpRequest {
    return {
      smsir: {
        ParameterArray: [
          { Parameter: "VerificationCode", ParameterValue: `${otpCode}` },
        ],
        TemplateId: "64129",
        Mobile: phoneNumber,
      },
      token,
    };
  }
  function notificationInput(
    userId: string,
    verificationId: number,
    phoneNumber: string
  ): entityTypes.IMakeNotification {
    return {
      userId,
      id: undefined,
      message: `phone number: ${phoneNumber} otp code was sent`,
      messageId: `${verificationId}`,
      metadata: {},
      sent: true,
      received: false,
      read: false,
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  const { internalServerError } = httpResult.serverError;
  const { ok } = httpResult.success;
  return async function sendOtpBySms(info: usecaseTypes.ISendOtpSms) {
    const { userId, otpCode, phoneNumber } = info;
    const smsirToken = await retrieveSmsirToken();
    const { error, payload: token } = smsirToken;
    if (error || !token) {
      return smsirToken;
    }
    const { success, verificationId } = await fetchSendOtpBySmsir(
      smsirInput(phoneNumber, otpCode, token)
    );
    if (!success) {
      return internalServerError({ error: "could not send sms" });
    }
    const notification = makeNotification(
      notificationInput(userId, verificationId, phoneNumber)
    );
    await insertNotification(notification.object());
    return ok({
      payload: "otp code was sent, by smsir",
    });
  };
}
