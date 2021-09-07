import { v4 } from "uuid";
import { buildMakeTask } from "./task";

export const makeTask = buildMakeTask({ uuid: v4 });
