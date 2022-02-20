import { entityTypes } from "../../types";

export function buildMakeBeckAnxiety(args: entityTypes.IBuildMakeBeckAnxiety) {
  const { formula } = args;

  return function makeBeckAnxiety(fields: entityTypes.tBeckAnxietyFields) {
    const { aggregate, interpret } = formula(fields);
    return {
      aggregate,
      interpret,
    };
  };
}

export { testStructure as beckAnxietyStructure } from "./testStructure";
