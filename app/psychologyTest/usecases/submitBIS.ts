import { httpResult } from "aba-node";
import {
  makeTestData,
  makeBarretImpulsiveness,
  testStructures,
} from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitBIS(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { bisStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitBIS(info: usecaseTypes.ISubmitTest) {
    const { userId, fields } = info;
    const {
      attentionalImpulsiveness,
      motorImpulsiveness,
      nonplanningImpulsiveness,
    } = makeBarretImpulsiveness(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "A",
        rawscore: attentionalImpulsiveness,
        baserate: attentionalImpulsiveness,
        interpret: "",
        label: {
          fa: "تکانشگری شناختی",
          en: "Attentional Impulsiveness",
        },
      },
      {
        type: "factor",
        variable: "M",
        rawscore: motorImpulsiveness,
        baserate: motorImpulsiveness,
        interpret: "",
        label: {
          fa: "تکانشگری حرکتی",
          en: "Motor Impulsiveness",
        },
      },
      {
        type: "factor",
        variable: "NP",
        rawscore: nonplanningImpulsiveness,
        baserate: nonplanningImpulsiveness,
        interpret: "",
        label: {
          fa: "تکانشگری عدم برنامه ریزی",
          en: "Non planning Impulsiveness",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: bisStructure.title,
      structureId: bisStructure.id,
      shortName: bisStructure.shortName,
      fields,
      results,
      resultSummary: "",
      createdAt: undefined,
      modifiedAt: undefined,
    });
    await insertTestData(testData.object());
    return created({
      payload: testData.object(),
    });
  };
}
