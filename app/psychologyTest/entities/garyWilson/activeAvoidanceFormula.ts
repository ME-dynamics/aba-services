import { reverse } from "./reverse";
import type { entityTypes} from "../../types"
export function activeAvoidanceFormula(fields: entityTypes.tTestFields) {
  const activeAvoidance =
    fields["8"] +
    fields["20"] +
    fields["32"] +
    fields["44"] +
    fields["56"] +
    fields["68"] +
    fields["80"] +
    fields["92"] +
    fields["104"] +
    fields["116"] +
    reverse(fields["110"]) +
    reverse(fields["98"]) +
    reverse(fields["86"]) +
    reverse(fields["74"]) +
    reverse(fields["62"]) +
    reverse(fields["50"]) +
    reverse(fields["38"]) +
    reverse(fields["26"]) +
    reverse(fields["14"]) +
    reverse(fields["2"]);
  if (activeAvoidance < 17) {
    return {
      aggregate: activeAvoidance,
      activeAvoidanceInterpret: "خفیف",
    };
  }
  if (17 <= activeAvoidance && activeAvoidance < 30) {
    return {
      aggregate: activeAvoidance,
      activeAvoidanceInterpret: "متوسط",
    };
  }
  if (30 <= activeAvoidance && activeAvoidance <= 40) {
    return {
      aggregate: activeAvoidance,
      activeAvoidanceInterpret: "شدید",
    };
  }
  return {
    aggregate: -1,
    activeAvoidanceInterpret: "نامشخص",
  };
}
