import type { add } from "date-fns";
export interface IBuildNextPeriodStartEnd {
  getNow: () => Date;
  add: typeof add;
}
