import type { entityTypes } from "../types";

export function buildMakeNotification(
  args: entityTypes.IBuildMakeNotification
) {
  const { uuid } = args;
  return function makeNotification(
    notification: entityTypes.IMakeNotification
  ): entityTypes.IMadeNotification {
    const {
      userId,
      id = uuid(),
      message,
      messageId,

      createdAt = new Date(),
      modifiedAt = new Date(),
    } = notification;
    let { sent, received, read, metadata } = notification;
    function setSent(isSent: boolean) {
      sent = isSent;
      modifiedAt.setDate(Date.now());
    }
    function setReceived(isReceived: boolean) {
      received = isReceived;
      modifiedAt.setDate(Date.now());
    }
    function setRead(isRead: boolean) {
      read = isRead;
      modifiedAt.setDate(Date.now());
    }
    function setMetadata(newMetadata: Record<string, string> | undefined) {
      metadata = newMetadata;
      modifiedAt.setDate(Date.now());
    }
    const madeNotification: entityTypes.IMadeNotification = {
      get: {
        userId: () => userId,
        id: () => id,
        message: () => message,
        messageId: () => messageId,
        sent: () => sent,
        received: () => received,
        read: () => read,
        metadata: () => metadata,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      set: {
        sent: setSent,
        received: setReceived,
        read: setRead,
        metadata: setMetadata,
      },
      object: () => ({
        userId,
        id,
        message,
        messageId,
        sent,
        received,
        read,
        metadata,
        createdAt,
        modifiedAt,
      }),
    };
    return madeNotification;
  };
}
