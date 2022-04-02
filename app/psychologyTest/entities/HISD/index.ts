import { entityTypes } from "../../types";
import { formula } from "./formula";

export function buildMakeHISD() {
  return function makeHISD(
    fields: Record<string, number>
  ): entityTypes.IHISDResult {
    const IndexOfSexualDesire = formula(fields);
    return IndexOfSexualDesire;
  };
}

export { testStructure as hisdTestStructure } from "./testStructure";
