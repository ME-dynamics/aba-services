import { time } from "aba-node";

export interface IGeneratedOtp {
  otpCode: number;
  otpToken: string;
  otpTokenValidDate: number;
  otpTempBlockTime: number;
}
export interface IBuildMakeOtp {
  uuid: () => string;
}

export interface IOtp {
  id: string | undefined;
  phoneNumber: string; // required
  phoneConfirm: boolean;
  otpCode: string | undefined; // hashed otp generated number
  otpToken: string | undefined;
  otpTokenValidDate: Date | undefined;
  otpCodeResendCount: number;
  otpTempBlockDate: Date | undefined;
  permanentBlock: boolean;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}
export interface IMadeOtpObject extends IOtp {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IOtpGen {
  otpCode: number;
  otpToken: string;
}
export interface IMadeOtp {
  get: {
    id: () => string;

    phoneNumber: () => string;
    phoneConfirm: () => boolean;
    otpCode: () => string | undefined;
    otpToken: () => string | undefined;
    otpTokenValidDate: () => Date | undefined;
    otpCodeResendCount: () => number;
    otpTempBlockDate: () => Date | undefined;
    permanentBlock: () => boolean;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  set: {
    phoneConfirmed: () => void;
    otp: (
      newOtpCode: string,
      newOtpToken: string,
      newOtpTokenValidDate: number,
      newOtpTempBlockDate: number
    ) => void;
  };
  object: () => IMadeOtpObject;
}

// tokens

export interface IBuildMakeToken {
  hoursFromNow: typeof time.hoursFromNow;
  nanoid: (size: number) => string;
}

export interface IToken {
  otpId: string;
  deviceId: string | undefined;
  refreshToken: string;
  jwt: string;
  jwtKey: string;
  jwtExpiresAt: Date;
  refreshExpiresAt: Date;
  tokenReCreateCount: number;
  tokenTempBlock: Date | undefined;
  permanentBlock: boolean;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeTokenObject extends IToken {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeToken {
  get: {
    otpId: () => string;
    deviceId: () => string;
    refreshToken: () => string;
    jwt: () => string;
    jwtKey: () => string;
    jwtExpiresAt: () => Date;
    refreshExpiresAt: () => Date;
    tokenReCreateCount: () => number;
    permanentBlock: () => boolean;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  object: () => IMadeTokenObject;
}

// IRole

export type tRole =
  | "admin"
  | "provider"
  | "assistant"
  | "customer"
  | "support"
  | "accountant";

// AL ==> Access level

// export interface IBuildRole {
//   // empty
// }
export interface IRole {
  otpId: string;
  admin: boolean;
  provider: boolean;
  assistant: boolean;
  customer: boolean;
  support: boolean;
  accountant: boolean;
  adminAL: number;
  providerAL: number;
  assistantAL: number;
  customerAL: number;
  supportAL: number;
  accountantAL: number;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}
export interface IMadeRoleObject extends IRole {
  createdAt: Date;
  modifiedAt: Date;
}
export interface IMadeRole {
  get: {
    otpId: () => string;
    admin: () => boolean;
    provider: () => boolean;
    assistant: () => boolean;
    customer: () => boolean;
    support: () => boolean;
    accountant: () => boolean;
    adminAL: () => number;
    providerAL: () => number;
    assistantAL: () => number;
    customerAL: () => number;
    supportAL: () => number;
    accountantAL: () => number;
    role: () => tRole;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  set: {
    admin: (isAdmin: boolean) => void;
    provider: (isProvider: boolean) => void;
    assistant: (isAssistant: boolean) => void;
    customer: (isCustomer: boolean) => void;
    support: (isSupport: boolean) => void;
    accountant: (isAccountant: boolean) => void;
    adminAL: (newAccessLevel: number) => void;
    providerAL: (newAccessLevel: number) => void;
    assistantAL: (newAccessLevel: number) => void;
    customerAL: (newAccessLevel: number) => void;
    supportAL: (newAccessLevel: number) => void;
    accountantAL: (newAccessLevel: number) => void;
  };
  object: () => IMadeRoleObject;
}
