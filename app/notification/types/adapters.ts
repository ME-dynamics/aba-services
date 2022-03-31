import type { types } from "aba-node";
import type {
  IMadeNotificationObject,
  tProviderType,
  IMadeNotificationTokenObject,
} from "./entities";
export interface IBuildInitDb {
  init: types.tDbInitFunc;
}
export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// insert notification

export type tInsertNotificationFunc = (
  notification: IMadeNotificationObject
) => Promise<void>;

// insert notification tokens

export type tInsertNotificationTokenFunc = (
  notificationToken: IMadeNotificationTokenObject
) => Promise<void>;

// find notification token

export type tRowToNotificationTokenFunc = (
  row: types.tRow
) => IMadeNotificationTokenObject;

export interface IBuildFindNotificationToken {
  select: types.tDbSelectFunc;
  rowToNotificationToken: tRowToNotificationTokenFunc;
}

export interface IFindNotificationToken {
  providerType: tProviderType;
}

export type tFindNotificationTokenFunc = (
  info: IFindNotificationToken
) => Promise<IMadeNotificationTokenObject[] | undefined>;

// network

export type tFetchSmsirTokenFunc = () => Promise<string | undefined>;

export interface ISmsirOtpRequest {
  smsir: {
    ParameterArray: {
      Parameter: string;
      ParameterValue: string;
    }[];
    TemplateId: string;
    Mobile: string;
  }
  token: string;
}

export interface ISmsirOtpResponse {
  verificationId: number;
  success: boolean;
}
export type tFetchSendSmsirOtpFunc = (
  info: ISmsirOtpRequest
) => Promise<ISmsirOtpResponse>;
