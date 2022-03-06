import { reverse } from "./reverse";

export function fightFormula(fields: Record<string, number>) {
  const fight =
    fields["5"] +
    fields["17"] +
    fields["29"] +
    fields["41"] +
    fields["53"] +
    fields["65"] +
    fields["77"] +
    fields["89"] +
    fields["101"] +
    fields["113"] +
    reverse(fields["11"]) +
    reverse(fields["23"]) +
    reverse(fields["35"]) +
    reverse(fields["47"]) +
    reverse(fields["59"]) +
    reverse(fields["71"]) +
    reverse(fields["83"]) +
    reverse(fields["95"]) +
    reverse(fields["107"]) +
    reverse(fields["119"]);
  if (fight < 12) {
    return {
      aggregate: fight,
      fightInterpret: "خفیف",
    };
  }
  if (12 <= fight && fight < 26) {
    return {
      aggregate: fight,
      fightInterpret: "متوسط",
    };
  }
  if (26 <= fight && fight <= 40) {
    return {
      aggregate: fight,
      fightInterpret: "شدید",
    };
  }
  return {
    aggregate: -1,
    fightInterpret: "نامشخص",
  };
}
