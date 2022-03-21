import { reverse } from "./reverse";
import type { entityTypes } from "../../types"
export function passiveAvoidanceFormula(fields: entityTypes.tTestFields) {
  const passiveAvoidance =
    fields["3"] +
    fields["15"] +
    fields["27"] +
    fields["39"] +
    fields["51"] +
    fields["63"] +
    fields["75"] +
    fields["87"] +
    fields["99"] +
    fields["111"] +
    reverse(fields["9"]) +
    reverse(fields["21"]) +
    reverse(fields["33"]) +
    reverse(fields["45"]) +
    reverse(fields["57"]) +
    reverse(fields["69"]) +
    reverse(fields["81"]) +
    reverse(fields["93"]) +
    reverse(fields["105"]) +
    reverse(fields["117"]);
  if (passiveAvoidance < 11) {
    return {
      aggregate: passiveAvoidance,
      passiveAvoidanceInterpret: "خفیف",
    };
  }
  if (11 <= passiveAvoidance && passiveAvoidance < 24) {
    return {
      aggregate: passiveAvoidance,
      passiveAvoidanceInterpret: "متوسط",
    };
  }
  if (24 <= passiveAvoidance && passiveAvoidance <= 40) {
    return {
      aggregate: passiveAvoidance,
      passiveAvoidanceInterpret: "شدید",
    };
  }
  return {
    aggregate: -1,
    passiveAvoidanceInterpret: "نامشخص",
  };
}
