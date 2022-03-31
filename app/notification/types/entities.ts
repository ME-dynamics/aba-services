export interface IBuildMakeNotification {
  uuid: () => string;
}

export interface IMakeNotification {
  userId: string;
  id: string | undefined;
  message: string;
  messageId: string;
  sent: boolean;
  received: boolean;
  read: boolean;
  metadata: Record<string, string> | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeNotificationObject extends IMakeNotification {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeNotification {
  get: {
    userId: () => string;
    id: () => string;
    message: () => string;
    messageId: () => string;
    sent: () => boolean;
    received: () => boolean;
    read: () => boolean;
    metadata: () => Record<string, string> | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  set: {
    sent: (isSent: boolean) => void;
    received: (isReceived: boolean) => void;
    read: (isRead: boolean) => void;
    metadata: (newMetadata: Record<string, string> | undefined) => void;
  };
  object: () => IMadeNotificationObject;
}

// notification tokens
export type tProviderType = "sms" | "whatsapp" | "push";
export interface INotificationToken {
  providerType: tProviderType;
  provider: string;
  token: string;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeNotificationTokenObject extends INotificationToken {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeNotificationToken {
  get: {
    providerType: () => tProviderType;
    provider: () => string;
    token: () => string;
    isTokenExpired: () => boolean;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  set: {
    token: (newToken: string) => void;
  };
  object: () => IMadeNotificationTokenObject;
}
