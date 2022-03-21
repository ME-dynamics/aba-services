import type { entityTypes } from "../../types"
export function formula(fields: entityTypes.tTestFields) {
  const emotionalDeprivation =
    fields["1"] + fields["2"] + fields["3"] + fields["4"] + fields["5"];
  const abandonment =
    fields["6"] + fields["7"] + fields["8"] + fields["9"] + fields["10"];
  const mistrust =
    fields["11"] + fields["12"] + fields["13"] + fields["14"] + fields["15"];
  const socialIsolation =
    fields["16"] + fields["17"] + fields["18"] + fields["19"] + fields["20"];
  const defectiveness =
    fields["21"] + fields["22"] + fields["23"] + fields["24"] + fields["25"];
  const failure =
    fields["26"] + fields["27"] + fields["28"] + fields["29"] + fields["30"];
  const dependence =
    fields["31"] + fields["32"] + fields["33"] + fields["34"] + fields["35"];
  const vulnerabilityToHarmOrIllness =
    fields["36"] + fields["37"] + fields["38"] + fields["39"] + fields["40"];
  const enmeshment =
    fields["41"] + fields["42"] + fields["43"] + fields["44"] + fields["45"];
  const subjugation =
    fields["46"] + fields["47"] + fields["48"] + fields["49"] + fields["50"];
  const selfSacrifice =
    fields["51"] + fields["52"] + fields["53"] + fields["54"] + fields["55"];
  const emotionalInhibition =
    fields["56"] + fields["57"] + fields["58"] + fields["59"] + fields["60"];
  const unrelentingStandards =
    fields["61"] + fields["62"] + fields["63"] + fields["64"] + fields["65"];
  const entitlement =
    fields["66"] + fields["67"] + fields["68"] + fields["69"] + fields["70"];
  const selfDiscipline =
    fields["71"] + fields["72"] + fields["73"] + fields["74"] + fields["75"];

  return {
    emotionalDeprivation,
    abandonment,
    mistrust,
    socialIsolation,
    defectiveness,
    failure,
    dependence,
    vulnerabilityToHarmOrIllness,
    enmeshment,
    subjugation,
    selfSacrifice,
    emotionalInhibition,
    unrelentingStandards,
    entitlement,
    selfDiscipline,
  };
}
