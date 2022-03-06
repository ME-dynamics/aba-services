import { reverse } from "./reverse";

export function flightFormula(fields: Record<string, number>) {
  const flight =
    fields["12"] +
    fields["24"] +
    fields["36"] +
    fields["48"] +
    fields["60"] +
    fields["72"] +
    fields["84"] +
    fields["96"] +
    fields["108"] +
    fields["120"] +
    reverse(fields["6"]) +
    reverse(fields["18"]) +
    reverse(fields["30"]) +
    reverse(fields["42"]) +
    reverse(fields["54"]) +
    reverse(fields["66"]) +
    reverse(fields["78"]) +
    reverse(fields["90"]) +
    reverse(fields["102"]) +
    reverse(fields["114"]);
  if (flight < 11) {
    return {
      aggregate: flight,
      flightInterpret: "خفیف",
    };
  }
  if (11 <= flight && flight < 24) {
    return {
      aggregate: flight,
      flightInterpret: "متوسط",
    };
  }
  if (24 <= flight && flight <= 40) {
    return {
      aggregate: flight,
      flightInterpret: "شدید",
    };
  }
  return {
    aggregate: -1,
    flightInterpret: "نامشخص",
  };
}
