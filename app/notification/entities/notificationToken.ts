import type { entityTypes } from "../types";

export function buildMakeNotificationToken() {
  // will use twenty five minutes as time limit to ensure that token refresh works
  const twentyFiveMinutesInMilliSeconds = 1500000;
  return function makeNotificationToken(
    notificationToken: entityTypes.INotificationToken
  ) {
    const {
      providerType,
      provider,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = notificationToken;
    let { token } = notificationToken;
    function setToken(newToken: string) {
      token = newToken;
      modifiedAt.setTime(Date.now());
    }
    function isTokenExpired() {
      // if service provider is sms.ir, token will expire after 30 minutes
      if (provider === "smsir") {
        return (
          twentyFiveMinutesInMilliSeconds < Date.now() - modifiedAt.getTime()
        );
      }
      return false;
    }
    const madeNotificationToken: entityTypes.IMadeNotificationToken = {
      get: {
        providerType: () => providerType,
        provider: () => provider,
        token: () => token,
        isTokenExpired,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      set: {
        token: setToken,
      },
      object: () => ({
        providerType,
        provider,
        token,
        createdAt,
        modifiedAt,
      }),
    };
    return madeNotificationToken;
  };
}
