import { entityTypes } from "../../types";
import { oneFormula } from "./RawScroe/Formula_1";

export function buildMakeMBTI(args: entityTypes.IBuildMakeMBTI) {
  // const { eiFormula, jpFormula, snFormula, tfFormula } = args;

  return function makeMBTI(fields: entityTypes.tMbtiFields) {
    const one = oneFormula(fields);

    return {
      one,
    };
  };
}

export { testStructure as mbtiStructure } from "./testStructure";
