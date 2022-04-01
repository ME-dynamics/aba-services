import type { entityTypes } from "../../types";

export function formula(
  fields: entityTypes.tTestFields
): entityTypes.ISingleResultTest {
  let sum = 0;
  for (let index = 1; index <= 21; index++) {
    sum = sum + fields[`${index}`];
  }
  if (sum <= 7) {
    return {
      aggregate: sum,
      interpret: "هیچ یا کمترین حد",
      warnings: [],
      errors: [],
    };
  }
  if (sum > 7 && sum <= 15) {
    return { aggregate: sum, interpret: "خفیف", warnings: [], errors: [] };
  }
  if (sum > 15 && sum <= 25) {
    return { aggregate: sum, interpret: "متوسط", warnings: [], errors: [] };
  }
  if (sum > 25 && sum <= 63) {
    return { aggregate: sum, interpret: "شدید", warnings: [], errors: [] };
  }
  return { aggregate: -1, interpret: "نامشخص", warnings: [], errors: [] };
}
