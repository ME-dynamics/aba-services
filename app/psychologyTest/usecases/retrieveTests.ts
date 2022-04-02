import { httpResult } from "aba-node";

import { testStructures } from "../entities";

export function buildRetrieveTests() {
  const { ok } = httpResult.success;
  const {
    NEOPIRStructure,
    beckAnxietyStructure,
    beckDepressionIIStructure,
    garyWilsonStructure,
    mbtiStructure,
    mcmiStructure,
    yemsqStructure,
    hisaTestStructure,
  } = testStructures;
  const mbti = {
    id: mbtiStructure.id,
    title: mbtiStructure.title,
    shortName: mbtiStructure.shortName,
  };
  const beckAnxiety = {
    id: beckAnxietyStructure.id,
    title: beckAnxietyStructure.title,
    shortName: beckAnxietyStructure.shortName,
  };
  const beckDepressionII = {
    id: beckDepressionIIStructure.id,
    title: beckDepressionIIStructure.title,
    shortName: beckDepressionIIStructure.shortName,
  };
  const neopir = {
    id: NEOPIRStructure.id,
    title: NEOPIRStructure.title,
    shortName: NEOPIRStructure.shortName,
  };
  const garyWilson = {
    id: garyWilsonStructure.id,
    title: garyWilsonStructure.title,
    shortName: garyWilsonStructure.shortName,
  };
  const mcmi = {
    id: mcmiStructure.id,
    title: mcmiStructure.title,
    shortName: mcmiStructure.shortName,
  };
  const yemsq = {
    id: yemsqStructure.id,
    title: yemsqStructure.title,
    shortName: yemsqStructure.shortName,
  };
  const hisa = {
    id: hisaTestStructure.id,
    title: hisaTestStructure.title,
    shortName: hisaTestStructure.shortName,
  };
  return function retrieveTests() {
    return ok({
      payload: [
        mbti,
        beckAnxiety,
        beckDepressionII,
        neopir,
        garyWilson,
        mcmi,
        yemsq,
        hisa,
      ],
    });
  };
}
