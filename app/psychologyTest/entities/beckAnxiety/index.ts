import { entityTypes } from "../../types";

export function buildMakeBeckAnxiety(args: entityTypes.IBuildMakeBeckAnxiety) {
  const { formula } = args;

  return function makeMBTI(fields: entityTypes.tBeckAnxietyFields) {
    const { aggregate, interpret } = formula(fields);
    return {
      aggregate,
      interpret,
    };
  };
}

export { formStructure as beckAnxietyStructure } from "./formStructure";
