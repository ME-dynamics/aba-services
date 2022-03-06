import type { entityTypes } from "../../types";

export function buildMakeMBTI(args: entityTypes.IBuildMakeMBTI) {
  const { eiFormula, jpFormula, snFormula, tfFormula } = args;

  return function makeMBTI(
    fields: entityTypes.tMbtiFields
  ): entityTypes.IMbtiAggregates {
    const { e, i } = eiFormula(fields);
    const { j, p } = jpFormula(fields);
    const { n, s } = snFormula(fields);
    const { f, t } = tfFormula(fields);
    return {
      e: {
        enTitle: "Extravert",
        faTitle: "برون گرا",
        score: e,
      },
      i: {
        enTitle: "Introvert",
        faTitle: "درون گرا",
        score: i,
      },
      s: {
        enTitle: "Sensing",
        faTitle: "حسی",
        score: s,
      },
      n: {
        enTitle: "Intuition",
        faTitle: "شهودی",
        score: n,
      },
      t: {
        enTitle: "Thinking",
        faTitle: "تفکری",
        score: t,
      },
      f: {
        enTitle: "Feeling",
        faTitle: "احساسی",
        score: f,
      },
      j: {
        enTitle: "Judging",
        faTitle: "داوری کننده",
        score: j,
      },
      p: {
        enTitle: "Perceiving",
        faTitle: "ادراک کننده",
        score: p,
      },
    };
  };
}
export { testStructure as mbtiStructure } from "./testStructure";
