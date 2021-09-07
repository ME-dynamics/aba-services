import { v4 } from "uuid";
import { nanoid } from "nanoid";

import { buildMakeUser } from "./user";

export const makeUser = buildMakeUser({ uuid: v4, nanoid });
