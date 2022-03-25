import { httpResult } from "aba-node";
import {
  makeTestData,
  makeBeckAnxiety,
  testStructures,
} from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitBeckAnxiety(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { beckAnxietyStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitBeckAnxiety(
    info: usecaseTypes.ISubmitBeckAnxiety
  ) {
    const { fields, userId } = info;
    const { aggregate, interpret } = makeBeckAnxiety(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "anxiety",
        rawscore: aggregate,
        baserate: aggregate,
        interpret: interpret,
        label: {
          fa: "اضطراب",
          en: "anxiety",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: beckAnxietyStructure.title,
      structureId: beckAnxietyStructure.id,
      shortName: beckAnxietyStructure.shortName,
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
