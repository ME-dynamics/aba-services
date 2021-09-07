import { reverse } from "./reverse";
export function nFormula(fields: Record<string, number>) {
  const n1 =
    reverse(fields["1"]) +
    fields["31"] +
    reverse(fields["61"]) +
    fields["91"] +
    reverse(fields["121"]) +
    fields["151"] +
    fields["181"] +
    fields["221"];
  const n2 =
    fields["6"] +
    reverse(fields["36"]) +
    fields["66"] +
    reverse(fields["96"]) +
    fields["126"] +
    reverse(fields["156"]) +
    fields["186"] +
    fields["216"];
  const n3 =
    reverse(fields["11"]) +
    fields["41"] +
    reverse(fields["71"]) +
    fields["100"] +
    fields["131"] +
    fields["161"] +
    fields["191"] +
    fields["221"];
  const n4 =
    fields["16"] +
    reverse(fields["46"]) +
    fields["76"] +
    reverse(fields["106"]) +
    fields["136"] +
    reverse(fields["166"]) +
    fields["196"] +
    fields["226"];
  const n5 =
    reverse(fields["21"]) +
    fields["51"] +
    reverse(fields["81"]) +
    fields["111"] +
    reverse(fields["141"]) +
    fields["171"] +
    fields["201"] +
    reverse(fields["231"]);
  const n6 =
    fields["26"] +
    reverse(fields["56"]) +
    fields["86"] +
    reverse(fields["116"]) +
    fields["146"] +
    reverse(fields["176"]) +
    reverse(fields["206"]) +
    reverse(fields["236"]);
  const n = n1 + n2 + n3 + n4 + n5 + n6;
  return { n1, n2, n3, n4, n5, n6, n };
}
