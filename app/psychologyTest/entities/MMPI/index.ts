import { entityTypes } from "../../types";

export function buildMakeMBTI(args: entityTypes.IBuildMakeMBTI) {
  const { eiFormula, jpFormula, snFormula, tfFormula } = args;

  return function makeMBTI(fields: entityTypes.tMbtiFields) {
    const eiGroup = eiFormula(fields);
    const jpGroup = jpFormula(fields);
    const snGroup = snFormula(fields);
    const tfGroup = tfFormula(fields);
    return {
      eiGroup,
      jpGroup,
      snGroup,
      tfGroup,
    };
  };
}

export { testStructure as mbtiStructure } from "./testStructure";
