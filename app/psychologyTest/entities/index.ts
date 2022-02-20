import { v4 } from "uuid";
import { buildMakeTestData } from "./testData";
import { aFormula } from "./NEOPIR/aFormula";
import { cFormula } from "./NEOPIR/cFormula";
import { eFormula } from "./NEOPIR/eFormula";
import { nFormula } from "./NEOPIR/nFormula";
import { oFormula } from "./NEOPIR/oFormula";
import { rules } from "./NEOPIR/rules";
import { buildMakeNEOPIR } from "./NEOPIR";

import { eiFormula } from "./MBTI/eiFormula";
import { jpFormula } from "./MBTI/jpFormula";
import { snFormula } from "./MBTI/snFormula";
import { tfFormula } from "./MBTI/tfFormula";
import { buildMakeMBTI } from "./MBTI";

export const makeTestData = buildMakeTestData({ uuid: v4 });
export const makeNEOPIR = buildMakeNEOPIR({
  aFormula,
  cFormula,
  eFormula,
  nFormula,
  oFormula,
  rules,
});

export const makeMBTI = buildMakeMBTI({
  eiFormula,
  jpFormula,
  snFormula,
  tfFormula,
});
export { NEOPIRStructure } from "./NEOPIR";
export { mbtiStructure } from "./MBTI";
export { beckAnxietyStructure } from "./beckAnxiety";
export { beckDepressionIIStructure } from "./beckDepressionII";
