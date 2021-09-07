import { reverse } from "./reverse";
export function eFormula(fields: Record<string, number>) {
  const e1 =
    fields["2"] +
    reverse(fields["32"]) +
    fields["62"] +
    reverse(fields["92"]) +
    fields["122"] +
    fields["152"] +
    fields["182"] +
    fields["212"];
  const e2 =
    reverse(fields["7"]) +
    fields["37"] +
    reverse(fields["67"]) +
    fields["97"] +
    reverse(fields["127"]) +
    fields["157"] +
    reverse(fields["187"]) +
    fields["217"];
  const e3 =
    fields["12"] +
    reverse(fields["42"]) +
    fields["72"] +
    reverse(fields["102"]) +
    fields["132"] +
    reverse(fields["162"]) +
    fields["192"] +
    reverse(fields["222"]);
  const e4 =
    reverse(fields["17"]) +
    fields["47"] +
    reverse(fields["77"]) +
    fields["107"] +
    reverse(fields["137"]) +
    fields["167"] +
    fields["197"] +
    fields["227"];
  const e5 =
    fields["22"] +
    reverse(fields["52"]) +
    fields["82"] +
    reverse(fields["112"]) +
    fields["142"] +
    fields["172"] +
    fields["202"] +
    fields["232"];
  const e6 =
    reverse(fields["27"]) +
    fields["57"] +
    reverse(fields["87"]) +
    fields["117"] +
    reverse(fields["147"]) +
    fields["177"] +
    reverse(fields["207"]) +
    fields["237"];
  const e = e1 + e2 + e3 + e4 + e5 + e6;
  return { e1, e2, e3, e4, e5, e6, e };
}
