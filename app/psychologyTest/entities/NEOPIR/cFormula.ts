import { reverse } from "./reverse";

export function cFormula(fields: Record<string, number>) {
  const c1 =
    fields["5"] +
    reverse(fields["35"]) +
    fields["65"] +
    reverse(fields["95"]) +
    fields["125"] +
    reverse(fields["155"]) +
    fields["185"] +
    fields["215"];
  const c2 =
    reverse(fields["10"]) +
    fields["40"] +
    reverse(fields["70"]) +
    fields["100"] +
    reverse(fields["130"]) +
    fields["160"] +
    reverse(fields["190"]) +
    reverse(fields["220"]);
  const c3 =
    fields["15"] +
    reverse(fields["45"]) +
    fields["75"] +
    reverse(fields["105"]) +
    fields["135"] +
    fields["165"] +
    fields["195"] +
    fields["225"];
  const c4 =
    reverse(fields["20"]) +
    fields["50"] +
    reverse(fields["80"]) +
    fields["110"] +
    reverse(fields["140"]) +
    fields["170"] +
    fields["200"] +
    fields["230"];
  const c5 =
    fields["25"] +
    reverse(fields["55"]) +
    fields["85"] +
    reverse(fields["115"]) +
    fields["145"] +
    reverse(fields["175"]) +
    reverse(fields["205"]) +
    fields["235"];
  const c6 =
    reverse(fields["30"]) +
    fields["60"] +
    reverse(fields["90"]) +
    fields["120"] +
    reverse(fields["150"]) +
    fields["180"] +
    fields["210"] +
    fields["240"];
  const c = c1 + c2 + c3 + c4 + c5 + c6;
  return { c1, c2, c3, c4, c5, c6, c };
}
