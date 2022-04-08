import { formula } from "./formula";
import type { entityTypes } from "../../types";

export function buildMakeBarretImpulsiveness() {
  return function makeBarretImpulsiveness(fields: entityTypes.tTestFields) {
    const {
      attentionalImpulsiveness,
      motorImpulsiveness,
      nonplanningImpulsiveness,
    } = formula(fields);
    // TODO: do more logic here, validation, etc
    return {
      attentionalImpulsiveness,
      motorImpulsiveness,
      nonplanningImpulsiveness,
    };
  };
}

export { testStructure as bisStructure } from "./testStructure";
