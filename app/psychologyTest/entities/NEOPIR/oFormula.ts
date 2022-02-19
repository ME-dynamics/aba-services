import { reverse } from "./reverse";

export function oFormula(fields: Record<string, number>) {
  const o1 =
    fields["3"] +
    reverse(fields["33"]) +
    fields["63"] +
    reverse(fields["93"]) +
    fields["123"] +
    reverse(fields["153"]) +
    reverse(fields["183"]) +
    reverse(fields["213"]);
  const o2 =
    reverse(fields["8"]) +
    fields["38"] +
    reverse(fields["68"]) +
    fields["98"] +
    reverse(fields["128"]) +
    fields["158"] +
    fields["188"] +
    fields["218"];
  const o3 =
    fields["13"] +
    reverse(fields["43"]) +
    fields["73"] +
    reverse(fields["103"]) +
    fields["133"] +
    reverse(fields["163"]) +
    fields["193"] +
    fields["223"];
  const o4 =
    reverse(fields["18"]) +
    fields["48"] +
    reverse(fields["78"]) +
    fields["108"] +
    reverse(fields["138"]) +
    fields["168"] +
    reverse(fields["198"]) +
    reverse(fields["228"]);
  const o5 =
    fields["23"] +
    reverse(fields["53"]) +
    fields["83"] +
    reverse(fields["113"]) +
    fields["143"] +
    reverse(fields["173"]) +
    fields["203"] +
    fields["233"];
  const o6 =
    reverse(fields["28"]) +
    fields["58"] +
    reverse(fields["88"]) +
    fields["118"] +
    reverse(fields["148"]) +
    fields["178"] +
    reverse(fields["208"]) +
    reverse(fields["238"]);

  const o = o1 + o2 + o3 + o4 + o5 + o6;
  return { o1, o2, o3, o4, o5, o6, o };
}
