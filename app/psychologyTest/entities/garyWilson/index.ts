import { entityTypes } from "../../types";

import { activeAvoidanceFormula } from "./activeAvoidanceFormula";
import { passiveAvoidanceFormula } from "./passiveAvoidanceFormula";
import { approachFormula } from "./approachFormula";
import { extinctionFormula } from "./extinctionFormula";
import { fightFormula } from "./fightFormula";
import { flightFormula } from "./flightFormula";

export function buildMakeGaryWilson() {
  return function makeGaryWilson(fields: entityTypes.tGaryWilsonFields) {
    const activeAvoidance = activeAvoidanceFormula(fields);
    const passiveAvoidance = passiveAvoidanceFormula(fields);
    const approach = approachFormula(fields);
    const extinction = extinctionFormula(fields);
    const fight = fightFormula(fields);
    const flight = flightFormula(fields);
    return {
      activeAvoidance,
      passiveAvoidance,
      approach,
      extinction,
      fight,
      flight,
    };
  };
}

export { testStructure as garyWilsonStructure } from "./testStructure";
