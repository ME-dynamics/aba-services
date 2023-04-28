import { add } from "date-fns";
import { buildNextPeriodStartEnd } from "../../../adapters/utils/nextPeriodStartEnd";

describe("nextPeriodStartEnd", () => {
  const nextPeriodStartEnd = buildNextPeriodStartEnd({
    getNow: () => new Date("2021-01-01T00:01:00.000Z"),
    add,
  });
  it("should return the next 5 minutes period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("5m");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-01T00:05:00.000Z").getTime()
    );
  });
  it("should return the next 15 minutes period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("15m");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-01T00:15:00.000Z").getTime()
    );
  });
  it("should return the next 30 minutes period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("30m");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-01T00:30:00.000Z").getTime()
    );
  });
  it("should return the next 1 hour period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("1h");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-01T01:00:00.000Z").getTime()
    );
  });
  it("should return the next 2 hours period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("2h");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-01T02:00:00.000Z").getTime()
    );
  });
  it("should return the next 4 hours period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("4h");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-01T04:00:00.000Z").getTime()
    );
  });
  it("should return the next day", () => {
    const nextPeriodStart = nextPeriodStartEnd("1d");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-02T00:00:00.000Z").getTime()
    );
  })
  it("should return the next week period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("1w");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-01-08T00:00:00.000Z").getTime()
    );
  });
  it("should return the next month period start date", () => {
    const nextPeriodStart = nextPeriodStartEnd("1M");
    expect(nextPeriodStart?.getTime()).toBe(
      new Date("2021-02-01T00:00:00.000Z").getTime()
    );
  });
});
