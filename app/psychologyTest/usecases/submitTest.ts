import { httpResult } from "aba-node";
import { testStructures } from "../entities";
import type { usecaseTypes } from "../types";

export function buildSubmitTest(args: usecaseTypes.IBuildSubmitTestById) {
  const {
    submitBeckAnxiety,
    submitBeckDepressionII,
    submitGaryWilson,
    submitMBTI,
    submitMCMI,
    submitNEOPIR,
    submitYEMSQ,
    submitHISA,
    submitHISD,
    submitMMPI,
    submitBIS,
  } = args;
  const { notFound, badRequest } = httpResult.clientError;
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
    bisStructure,
  } = testStructures;
  return async function submitTest(info: usecaseTypes.ISubmitTestById) {
    const { fields, gender, userId, testId } = info;
    switch (testId) {
      case NEOPIRStructure.id:
        return await submitNEOPIR({ userId, fields });
      case beckAnxietyStructure.id:
        return await submitBeckAnxiety({ userId, fields });
      case beckDepressionIIStructure.id:
        return await submitBeckDepressionII({ userId, fields });
      case garyWilsonStructure.id:
        return await submitGaryWilson({ userId, fields });
      case mbtiStructure.id:
        return await submitMBTI({ userId, fields });
      case mcmiStructure.id:
        if (!gender) {
          return badRequest({ error: "gender should be defined for mcmi" });
        }
        return await submitMCMI({ userId, fields, gender });
      case yemsqStructure.id:
        return await submitYEMSQ({ userId, fields });
      case hisaTestStructure.id:
        return await submitHISA({ userId, fields });
      case hisdTestStructure.id:
        return await submitHISD({ userId, fields });
      case mmpiStructure.id:
        if (!gender) {
          return badRequest({ error: "gender should be defined for mmpi" });
        }
        return await submitMMPI({ userId, fields, gender });
      case bisStructure.id:
        return await submitBIS({ userId, fields });
      default:
        return notFound({ error: "test not found" });
    }
  };
}
