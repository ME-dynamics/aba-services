import type { types } from "aba-node";
import {
  tFetchSmsirTokenFunc,
  tFindNotificationTokenFunc,
  tInsertNotificationTokenFunc,
  tInsertNotificationFunc,
  tFetchSendSmsirOtpFunc,
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
}

export interface ISendOtpSms {
  userId: string;
  otpCode: number;
  phoneNumber: string;
}
