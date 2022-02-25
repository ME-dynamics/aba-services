import type { entityTypes } from "../../../types";

export function formulaX(args: entityTypes.IFormulaX) {
  const {
    one,
    twoA,
    twoB,
    three,
    four,
    five,
    sixA,
    sixB,
    seven,
    eightA,
    eightB,
  } = args;
  const sum =
    one +
    twoA +
    twoB +
    three +
    four +
    sixA +
    sixB +
    seven +
    eightA +
    eightB +
    five * 0.67;
  return Math.round(sum);
}
