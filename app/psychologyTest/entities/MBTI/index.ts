import { entityTypes } from "../../types";
// FIXME: inject mbti interpret
import { mbtiInterpret } from "./interpret";
export function buildMakeMBTI(args: entityTypes.IBuildMakeMBTI) {
  const { eiFormula, jpFormula, snFormula, tfFormula } = args;

  return function makeMBTI(
    fields: entityTypes.tMbtiFields
  ): entityTypes.IMakeMbtiResult {
    const { e, i } = eiFormula(fields);
    const { j, p } = jpFormula(fields);
    const { n, s } = snFormula(fields);
    const { f, t } = tfFormula(fields);
    const interpret = mbtiInterpret({ e, f, i, j, n, p, s, t });
    return {
      interpret,
      aggregates: [
        {
          title: "e",
          aggregate: e,
        },
        {
          title: "i",
          aggregate: i,
        },
        {
          title: "j",
          aggregate: j,
        },
        {
          title: "p",
          aggregate: p,
        },
        {
          title: "n",
          aggregate: n,
        },
        {
          title: "s",
          aggregate: s,
        },
        {
          title: "f",
          aggregate: f,
        },
        {
          title: "t",
          aggregate: t,
        },
      ],
    };
  };
}

export { formStructure as mbtiStructure } from "./formStructure";
