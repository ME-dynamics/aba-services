import { httpResult } from "aba-node";

import { makeNotificationToken } from "../entities";

import type { usecaseTypes, entityTypes } from "../types";

export function buildRetrieveSmsirToken(
  args: usecaseTypes.IBuildRetrieveSmsirToken
) {
  const { fetchSmsirToken, findNotificationToken, insertNotificationToken } =
    args;
  const { serviceUnavailable } = httpResult.serverError;
  const { created, ok } = httpResult.success;
  function notificationTokenInput(
    token: string
  ): entityTypes.INotificationToken {
    return {
      providerType: "sms",
      provider: "smsir",
      token,
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  async function refreshToken() {
    const token = await fetchSmsirToken();
    console.log({token})
    if (!token) {
      return serviceUnavailable({ error: "sms service is unavailable" });
    }
    const notificationToken = makeNotificationToken(
      notificationTokenInput(token)
    );
    await insertNotificationToken(notificationToken.object());
    return created({
      payload: notificationToken.get.token(),
    });
  }
  return async function retrieveNotificationToken() {
    const notificationTokenFound = await findNotificationToken({
      providerType: "sms",
    });
    if (!notificationTokenFound) {
      // if no token found retrieve a token
      return await refreshToken();
    }
    const smsirObject = notificationTokenFound.find(
      (nToken) => nToken.provider === "smsir"
    );
    if (!smsirObject) {
      return await refreshToken();
    }
    const notificationToken = makeNotificationToken(smsirObject);
    if (notificationToken.get.isTokenExpired()) {
      return await refreshToken();
    }
    return ok({
      payload: smsirObject.token,
    });
  };
}
