import { reverse } from "./reverse";
import type { entityTypes } from "../../types";

export function formula(fields: entityTypes.tTestFields) {
  const attentionalImpulsiveness =
    fields["5"] +
    fields["6"] +
    reverse(fields["9"]) +
    fields["11"] +
    reverse(fields["20"]) +
    fields["24"] +
    fields["26"] +
    fields["28"];
  const motorImpulsiveness =
    fields["2"] +
    fields["3"] +
    fields["4"] +
    fields["16"] +
    fields["17"] +
    fields["19"] +
    fields["21"] +
    fields["22"] +
    fields["23"] +
    fields["25"] +
    reverse(fields["30"]);
  const nonplanningImpulsiveness =
    reverse(fields["1"]) +
    reverse(fields["7"]) +
    reverse(fields["8"]) +
    reverse(fields["10"]) +
    reverse(fields["12"]) +
    reverse(fields["13"]) +
    fields["14"] +
    reverse(fields["15"]) +
    fields["18"] +
    fields["27"] +
    reverse(fields["29"]);
  return {
    attentionalImpulsiveness,
    motorImpulsiveness,
    nonplanningImpulsiveness,
  };
}
