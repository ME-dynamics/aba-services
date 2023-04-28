import type { entityTypes, adapterTypes } from "../../types";

export function buildNextPeriodStartEnd(
  args: adapterTypes.IBuildNextPeriodStartEnd
) {
  const { getNow, add } = args;

  function extractUnit(period: entityTypes.tPeriod) {
    let numberStr = "";
    let unit = "";
    const lastIndex = period.length - 1;
    for (let index = 0; index < period.length; index++) {
      const char = period[index];
      if (index === lastIndex) {
        unit = char;
        continue;
      }
      numberStr += char;
    }
    const time = parseInt(numberStr, 10);
    if (isNaN(time)) {
      return { time: 0, unit: "m" };
    }
    return { time, unit };
  }
  return function nextPeriodStartEnd(period: entityTypes.tPeriod) {
    const { time, unit } = extractUnit(period);
    if (!time) {
      throw new Error("Invalid period");
    }
    const now = getNow();
    // on 60 minutes will go to next hour
    if (unit === "m") {
      const currentMinutes = now.getMinutes();
      const nextMinutePeriod = Math.floor(currentMinutes / time) * time + time;
      const nextPeriodStart = add(now, {
        minutes: nextMinutePeriod - currentMinutes,
      });
      return nextPeriodStart;
    }
    // on 23 hours will go to next day
    if (unit === "h") {
      const nextPeriodStart = add(now, {
        hours: time
      });
      nextPeriodStart.setMinutes(0);
      return nextPeriodStart;
    }
    // on the end of the month will go to next month
    if (unit === "d") {
      const currentDay = now.getDate();
      const nextDayPeriod = Math.floor(currentDay / time) * time + time;
      const nextPeriodStart = add(now, { days: nextDayPeriod - currentDay });
      return nextPeriodStart;
    }
    // on the end of the month will go to next month
    if (unit === "w") {
      // const currentDay = now.getDate() + 1;
      const weekToDays = time * 7;
      // const nextDayPeriod =
      //   Math.floor(currentDay / weekToDays) * weekToDays + weekToDays;
      const nextPeriodStart = add(now, { days: weekToDays });
      return nextPeriodStart;
    }
    // on the end of the year will go to next year
    if (unit === "M") {
      const nextPeriodStart = add(now, { months: 1 });
      return nextPeriodStart;
    }
  };
}
