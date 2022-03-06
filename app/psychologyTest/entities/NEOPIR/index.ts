import { entityTypes } from "../../types";

export function buildMakeNEOPIR(args: entityTypes.IBuildNEOPIR) {
  const { aFormula, cFormula, eFormula, nFormula, oFormula, rules } = args;
  return function makeNEOPIR(
    fields: entityTypes.tNEOFields
  ): entityTypes.INEOPIRResult {
    const aGroup = aFormula(fields);
    const cGroup = cFormula(fields);
    const eGroup = eFormula(fields);
    const nGroup = nFormula(fields);
    const oGroup = oFormula(fields);
    const { errors, warnings } = rules(fields);
    return {
      aGroup,
      cGroup,
      eGroup,
      nGroup,
      oGroup,
      warnings,
      errors,
    };
  };
}

export { testStructure as NEOPIRStructure } from "./testStructure";
