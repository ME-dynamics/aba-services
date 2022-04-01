import { reverse } from "./reverse";
import type { entityTypes } from "../../types";
export function formula(fields: entityTypes.tTestFields) {
  //ابراز عواطف و احساسات جنسی
  const expressingSexualEmotions =
    fields["1"] +
    fields["2"] +
    fields["3"] +
    fields["4"] +
    fields["5"] +
    fields["6"] +
    fields["8"] +
    fields["9"] +
    fields["11"] +
    fields["12"] +
    fields["21"] +
    fields["25"];
  //مولفه روابط جنسی
  const sexualIntercourse =
    fields["7"] +
    fields["10"] +
    reverse(fields["13"]) +
    reverse(fields["14"]) +
    fields["15"] +
    fields["16"] +
    fields["17"] +
    fields["18"] +
    fields["19"] +
    reverse(fields["20"]) +
    fields["22"] +
    fields["23"] +
    fields["24"];
  return { expressingSexualEmotions, sexualIntercourse };
}
