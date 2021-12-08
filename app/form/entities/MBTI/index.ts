import { entityTypes } from "../../types";

export function buildMakeMBTI(args: entityTypes.IBuildMakeMBTI) {
  const { eiFormula, jpFormula, snFormula, tfFormula } = args;

  return function makeMBTI(
    fields: entityTypes.tMbtiFields
  ): entityTypes.IMakeMbtiResult {
    const { e, i } = eiFormula(fields);
    const { j, p } = jpFormula(fields);
    const { n, s } = snFormula(fields);
    const { f, t } = tfFormula(fields);
    return {
      aggregates: {
        e,
        f,
        i,
        j,
        n,
        p,
        s,
        t,
      },
    };
  };
}

export { formStructure as mbtiStructure } from "./formStructure";
