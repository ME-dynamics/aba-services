import { reverse } from "./reverse";

export function aFormula(fields: Record<string, number>) {
  const a1 =
    reverse(fields["4"]) +
    fields["34"] +
    reverse(fields["64"]) +
    fields["94"] +
    reverse(fields["124"]) +
    fields["154"] +
    fields["184"] +
    fields["214"];
  const a2 =
    fields["9"] +
    reverse(fields["39"]) +
    fields["69"] +
    reverse(fields["99"]) +
    fields["129"] +
    reverse(fields["159"]) +
    reverse(fields["189"]) +
    reverse(fields["219"]);
  const a3 =
    reverse(fields["14"]) +
    fields["44"] +
    reverse(fields["74"]) +
    fields["104"] +
    reverse(fields["134"]) +
    fields["164"] +
    fields["194"] +
    fields["224"];
  const a4 =
    fields["19"] +
    reverse(fields["49"]) +
    fields["79"] +
    reverse(fields["109"]) +
    fields["139"] +
    reverse(fields["169"]) +
    reverse(fields["199"]) +
    reverse(fields["229"]);
  const a5 =
    reverse(fields["24"]) +
    fields["54"] +
    reverse(fields["84"]) +
    fields["114"] +
    reverse(fields["144"]) +
    fields["174"] +
    fields["204"] +
    reverse(fields["234"]);
  const a6 =
    fields["29"] +
    reverse(fields["59"]) +
    fields["89"] +
    reverse(fields["119"]) +
    fields["149"] +
    fields["179"] +
    fields["209"] +
    fields["239"];
  const a = a1 + a2 + a3 + a4 + a5 + a6;
  return { a1, a2, a3, a4, a5, a6, a };
}
