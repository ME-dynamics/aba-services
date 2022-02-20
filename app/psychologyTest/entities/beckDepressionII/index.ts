import { formula } from "./formula"; // TODO: inject formula, makes testing easier
import type { entityTypes } from "../../types";

export function buildMakeBeckDepressionII() {
  return function makeBeckDepressionII(
    fields: entityTypes.tBeckDepressionIIFields
  ) {
    const { aggregate, interpret, warning } = formula(fields);
    return {
      aggregate,
      interpret,
      warning,
    };
  };
}

export { testStructure as beckDepressionIIStructure } from "./testStructure";
