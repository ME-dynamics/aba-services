import { reverse } from "./reverse";
import type { entityTypes } from "../../types";
export function approachFormula(fields: entityTypes.tTestFields) {
  const approach =
    fields["1"] +
    fields["13"] +
    fields["25"] +
    fields["37"] +
    fields["49"] +
    fields["61"] +
    fields["73"] +
    fields["85"] +
    fields["97"] +
    fields["109"] +
    reverse(fields["7"]) +
    reverse(fields["19"]) +
    reverse(fields["31"]) +
    reverse(fields["43"]) +
    reverse(fields["55"]) +
    reverse(fields["67"]) +
    reverse(fields["79"]) +
    reverse(fields["91"]) +
    reverse(fields["103"]) +
    reverse(fields["115"]);
  if (approach < 11) {
    return {
      aggregate: approach,
      approachInterpret: "خفیف",
    };
  }
  if (11 <= approach && approach < 25) {
    return {
      aggregate: approach,
      approachInterpret: "متوسط",
    };
  }
  if (25 <= approach && approach <= 40) {
    return {
      aggregate: approach,
      approachInterpret: "شدید",
    };
  }
  return {
    aggregate: -1,
    approachInterpret: "نامشخص",
  };
}
