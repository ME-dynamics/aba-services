import { v4 } from "uuid";
import { buildMakeTestData } from "./testData";
import { aFormula } from "./NEOPIR/aFormula";
import { cFormula } from "./NEOPIR/cFormula";
import { eFormula } from "./NEOPIR/eFormula";
import { nFormula } from "./NEOPIR/nFormula";
import { oFormula } from "./NEOPIR/oFormula";
import { rules } from "./NEOPIR/rules";
import { buildMakeNEOPIR, NEOPIRStructure } from "./NEOPIR";

import { eiFormula } from "./MBTI/eiFormula";
import { jpFormula } from "./MBTI/jpFormula";
import { snFormula } from "./MBTI/snFormula";
import { tfFormula } from "./MBTI/tfFormula";
import { buildMakeMBTI, mbtiStructure } from "./MBTI";

import { buildMakeGaryWilson, garyWilsonStructure } from "./garyWilson";

import {
  buildMakeBeckAnxiety,
  beckAnxietyFormula,
  beckAnxietyStructure,
} from "./beckAnxiety";
import {
  buildMakeBeckDepressionII,
  beckDepressionIIStructure,
} from "./beckDepressionII";
import { buildMakeMCMI, mcmiStructure } from "./MCMI";

import { buildMakeYEMSQ, yemsqStructure } from "./YEMSQ";

import { hisaTestStructure, buildMakeHISA } from "./HISA";
import { buildMakeHISD, hisdTestStructure } from "./HISD";
import { buildMakeMMPI, mmpiStructure } from "./MMPI";
import {
  bisStructure,
  buildMakeBarretImpulsiveness,
} from "./barretImpulsiveness";

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

export const makeBeckAnxiety = buildMakeBeckAnxiety({
  formula: beckAnxietyFormula,
});
export const makeBeckDepressionII = buildMakeBeckDepressionII();
export const makeGaryWilson = buildMakeGaryWilson();
export const makeMCMI = buildMakeMCMI();
export const makeYEMSQ = buildMakeYEMSQ();
export const makeHISA = buildMakeHISA();
export const makeHISD = buildMakeHISD();
export const makeMMPI = buildMakeMMPI();
export const makeBarretImpulsiveness = buildMakeBarretImpulsiveness();

export const testStructures = {
  NEOPIRStructure,
  mbtiStructure,
  beckAnxietyStructure,
  beckDepressionIIStructure,
  mcmiStructure,
  garyWilsonStructure,
  yemsqStructure,
  hisaTestStructure,
  hisdTestStructure,
  mmpiStructure,
  bisStructure,
};
