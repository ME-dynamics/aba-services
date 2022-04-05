import type { types } from "aba-node";
import {
  tFetchSmsirTokenFunc,
  tFindNotificationTokenFunc,
  tInsertNotificationTokenFunc,
  tInsertNotificationFunc,
  tFetchSendSmsirOtpFunc,
  tFetchSendKavenegarOtpFunc
} from "./adapters";

export interface IBuildRetrieveSmsirToken {
  fetchSmsirToken: tFetchSmsirTokenFunc;
  findNotificationToken: tFindNotificationTokenFunc;
  insertNotificationToken: tInsertNotificationTokenFunc;
}

export type tRetrieveSmsirTokenFunc = () => Promise<
  types.IPayloadResult<string> | types.IErrorResult
>;

export interface IBuildSendOtpSms {
  insertNotification: tInsertNotificationFunc;
  retrieveSmsirToken: tRetrieveSmsirTokenFunc;
  fetchSendOtpBySmsir: tFetchSendSmsirOtpFunc;
  fetchSendOtpByKavenegar: tFetchSendKavenegarOtpFunc;
}

export interface ISendOtpSms {
  userId: string;
  otpCode: number;
  phoneNumber: string;
}
