// import { entityTypes } from "../../../types";

// import { ENFJInterpret } from "./ENFJ";
// import { ENFPInterpret } from "./ENFP";
// import { ENTJInterpret } from "./ENTJ";
// import { ENTPInterpret } from "./ENTP";
// import { ESFJInterpret } from "./ESFJ";
// import { ESFPInterpret } from "./ESFP";
// import { ESTJInterpret } from "./ESTJ";
// import { ESTPInterpret } from "./ESTP";
// import { INFJInterpret } from "./INFJ";
// import { INFPInterpret } from "./INFP";
// import { INTJInterpret } from "./INTJ";
// import { INTPInterpret } from "./INTP";
// import { ISFJInterpret } from "./ISFJ";
// import { ISFPInterpret } from "./ISFP";
// import { ISTJInterpret } from "./ISTJ";
// import { ISTPInterpret } from "./ISTP";

// // interpret type

// const interpret: entityTypes.tInterpretCollection = {
//   ENFJ: ENFJInterpret,
//   ENFP: ENFPInterpret,
//   ENTJ: ENTJInterpret,
//   ENTP: ENTPInterpret,
//   ESFJ: ESFJInterpret,
//   ESFP: ESFPInterpret,
//   ESTJ: ESTJInterpret,
//   ESTP: ESTPInterpret,
//   INFJ: INFJInterpret,
//   INFP: INFPInterpret,
//   INTJ: INTJInterpret,
//   INTP: INTPInterpret,
//   ISFJ: ISFJInterpret,
//   ISFP: ISFPInterpret,
//   ISTJ: ISTJInterpret,
//   ISTP: ISTPInterpret,
// };

// export function mbtiInterpret(args: entityTypes.tMbtiInterpret) {
//   const { e, i, f, j, n, p, s, t } = args;
//   const eiChosen = e > i ? "E" : "I";
//   const jpChosen = j > p ? "J" : "P";
//   const snChosen = s > n ? "S" : "N";
//   const tfChosen = t > f ? "T" : "F";

//   const personality = `${eiChosen}${snChosen}${tfChosen}${jpChosen}`;
//   return interpret[personality];
// }
