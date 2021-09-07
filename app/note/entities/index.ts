import { v4 } from "uuid";
import { buildMakeNote } from "./note";

export const makeNote = buildMakeNote({ uuid: v4 });
