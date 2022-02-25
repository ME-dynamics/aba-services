import { reverse } from "./reverse";

export function extinctionFormula(fields: Record<string, number>) {
  const extinction =
    fields["10"] +
    fields["22"] +
    fields["34"] +
    fields["46"] +
    fields["58"] +
    fields["70"] +
    fields["82"] +
    fields["94"] +
    fields["106"] +
    fields["118"] +
    reverse(fields["4"]) +
    reverse(fields["16"]) +
    reverse(fields["28"]) +
    reverse(fields["40"]) +
    reverse(fields["52"]) +
    reverse(fields["64"]) +
    reverse(fields["76"]) +
    reverse(fields["88"]) +
    reverse(fields["100"]) +
    reverse(fields["112"]);
  if (extinction < 13) {
    return {
      aggregate: extinction,
      extinctionInterpret: "خفیف",
    };
  }
  if (13 <= extinction && extinction < 26) {
    return {
      aggregate: extinction,
      extinctionInterpret: "متوسط",
    };
  }
  if (26 <= extinction && extinction <= 40) {
    return {
      aggregate: extinction,
      extinctionInterpret: "شدید",
    };
  }
  return {
    aggregate: -1,
    extinctionInterpret: "نامشخص",
  };
}
