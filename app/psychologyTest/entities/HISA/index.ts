import { entityTypes } from "../../types";
import { formula } from "./formula";

export function buildMakeHISA() {
  return function makeHISA(
    fields: Record<string, number>
  ): entityTypes.IHISARResult {
    const { expressingSexualEmotions, sexualIntercourse } = formula(fields);

    return { expressingSexualEmotions, sexualIntercourse };
  };
}

export { testStructure as hisaTestStructure } from "./testStructure";
