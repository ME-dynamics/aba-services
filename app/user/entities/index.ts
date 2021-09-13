import { v4 } from "uuid";
import { nanoid } from "nanoid";

import { buildMakeUser } from "./user";
import { buildMakePatient } from "./patient";

export const makeUser = buildMakeUser({ uuid: v4, nanoid });
export const makePatient = buildMakePatient();
