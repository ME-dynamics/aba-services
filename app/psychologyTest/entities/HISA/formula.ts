import { reverse } from "./reverse";

export function formula(fields: Record<string, number>) {
  //ابراز عواطف و احساسات جنسی
  const a =
    fields["1"] +
    fields["2"] +
    fields["3"] +
    fields["4"] +
    fields["5"] +
    fields["6"] +
    fields["8"] +
    fields["9"] +
    fields["11"] +
    fields["12"] +
    fields["21"] +
    fields["25"];
  //مولفه روابط جنسی
  const b =
    fields["7"] +
    fields["10"] +
    reverse(fields["13"]) +
    reverse(fields["14"]) +
    fields["15"] +
    fields["16"] +
    fields["17"] +
    fields["18"] +
    fields["19"] +
    reverse(fields["20"]) +
    fields["22"] +
    fields["23"] +
    fields["24"];
  return { a, b };
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
