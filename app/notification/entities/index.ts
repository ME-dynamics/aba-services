import { v4 } from "uuid";

import { buildMakeNotification } from "./notification";
import { buildMakeNotificationToken } from "./notificationToken";

export const makeNotification = buildMakeNotification({ uuid: v4 });
export const makeNotificationToken = buildMakeNotificationToken();
