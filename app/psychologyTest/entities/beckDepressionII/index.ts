import { formula } from "./formula"; // TODO: inject formula, makes testing easier
import type { entityTypes } from "../../types";

export function buildMakeBeckDepressionII() {
  return function makeBeckDepressionII(
    fields: entityTypes.tTestFields
  ): entityTypes.ISingleResultTest {
    const { aggregate, interpret, warnings, errors } = formula(fields);
    return {
      aggregate,
      interpret,
      warnings,
      errors
    };
  };
}

export { testStructure as beckDepressionIIStructure } from "./testStructure";
