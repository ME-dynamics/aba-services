import { reverse } from "./reverse";

export function formula(fields: Record<string, number>) {
  const result =
    reverse(fields["1"]) +
    fields["2"] +
    reverse(fields["3"]) +
    fields["4"] +
    reverse(fields["5"]) +
    fields["6"] +
    reverse(fields["7"]) +
    reverse(fields["8"]) +
    reverse(fields["9"]) +
    reverse(fields["10"]) +
    fields["11"] +
    reverse(fields["12"]) +
    reverse(fields["13"]) +
    fields["14"] +
    fields["15"] +
    fields["16"] +
    reverse(fields["17"]) +
    reverse(fields["18"]) +
    reverse(fields["19"]) +
    reverse(fields["20"]) +
    fields["21"] +
    fields["22"] +
    fields["23"] +
    fields["24"] +
    fields["25"];
  return { result };
}
// const field = {
//   "1": 1,
//   "2": 3,
//   "3": 0,
//   "4": 2,
//   "5": 2,
//   "6": 3,
//   "7": 0,
//   "8": 2,
//   "9": 3,
//   "10": 2,
//   "11": 1,
//   "12": 2,
//   "13": 3,
//   "14": 4,
//   "15": 3,
//   "16": 2,
//   "17": 0,
//   "18": 2,
//   "19": 3,
//   "20": 2,
//   "21": 1,
//   "22": 2,
//   "23": 2,
//   "24": 2,
//   "25": 2,
// };
// formula(field);
