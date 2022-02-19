import { entityTypes } from "../../types";

export function formula(
  fields: Record<string, number>
): entityTypes.IBeckAnxietyResult {
  let sum = 0;
  for (let index = 1; index <= 21; index++) {
    sum = sum + fields[`${index}`];
  }
  if (sum <= 7) {
    return {
      aggregate: { total: sum },
      interpret: { result: "هیچ یا کمترین حد" },
    };
  }
  if (sum > 7 && sum <= 15) {
    return { aggregate: { total: sum }, interpret: { result: "خفیف" } };
  }
  if (sum > 15 && sum <= 25) {
    return { aggregate: { total: sum }, interpret: { result: "متوسط" } };
  }
  if (sum > 25 && sum <= 63) {
    return { aggregate: { total: sum }, interpret: { result: "شدید" } };
  }
  return { aggregate: { total: sum }, interpret: { result: "شدید" } };
}
