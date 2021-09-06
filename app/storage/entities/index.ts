// inject and export entities
import { nanoid } from "nanoid";
import { v4 } from "uuid";

import { buildMakeFileSession } from "./fileSession";
import { buildMakeImage } from "./image";

export const makeFileSession = buildMakeFileSession({ nanoid });
export const makeImage = buildMakeImage({ uuid: v4 });
