import type { entityTypes } from "../../types";
import { bdiChoiceMap } from "./testStructure";
export function formula(
  fields: entityTypes.tTestFields
): entityTypes.ISingleResultTest {
  let total = 0;
  for (let index = 1; index <= 21; index++) {
    const choiceValue = bdiChoiceMap[index][fields[index]];
    total = total + choiceValue;
  }

  if (total <= 13) {
    const warning = total < 4 ? "اختمال انکار افسردگی" : "";

    return {
      aggregate: total,
      interpret: "هیچ یا کمترین",
      warnings: [warning],
      errors: [],
    };
  }
  if (total >= 14 && total <= 19) {
    return {
      aggregate: total,
      interpret: "افسردگی خفیف",
      warnings: [],
      errors: [],
    };
  }
  if (total >= 20 && total <= 28) {
    return {
      aggregate: total,
      interpret: "افسردگی متوسط",
      warnings: [],
      errors: [],
    };
  }
  if (total >= 29 && total <= 63) {
    return {
      aggregate: total,
      interpret: "افسردگی شدید",
      warnings: [],
      errors: [],
    };
  }
  return {
    aggregate: total,
    interpret: "تعداد جواب ها نادرست است.",
    warnings: [],
    errors: [],
  };
}
