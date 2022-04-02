import { httpResult } from "aba-node";
import { testStructures } from "../entities";

export function buildRetrieveTestById() {
  const { ok } = httpResult.success;
  const { notFound } = httpResult.clientError;
  const {
    NEOPIRStructure,
    beckAnxietyStructure,
    beckDepressionIIStructure,
    garyWilsonStructure,
    mbtiStructure,
    mcmiStructure,
    yemsqStructure,
    hisaTestStructure,
    hisdTestStructure,
    mmpiStructure,
  } = testStructures;
  return function retrieveTestById(testId: string) {
    switch (testId) {
      case NEOPIRStructure.id:
        return ok({ payload: NEOPIRStructure });
      case beckAnxietyStructure.id:
        return ok({ payload: beckAnxietyStructure });
      case beckDepressionIIStructure.id:
        return ok({ payload: beckDepressionIIStructure });
      case garyWilsonStructure.id:
        return ok({ payload: garyWilsonStructure });
      case mbtiStructure.id:
        return ok({ payload: mbtiStructure });
      case mcmiStructure.id:
        return ok({ payload: mcmiStructure });
      case yemsqStructure.id:
        return ok({ payload: yemsqStructure });
      case hisaTestStructure.id:
        return ok({ payload: hisaTestStructure });
      case hisdTestStructure.id:
        return ok({ payload: hisdTestStructure });
      case mmpiStructure.id:
        return ok({ payload: mmpiStructure });
      default:
        return notFound({ error: "test not found" });
    }
  };
}
