import { v4 } from "uuid";

import { buildMakeNotification } from "./notification";

export const makeNotification = buildMakeNotification({ uuid: v4 });
