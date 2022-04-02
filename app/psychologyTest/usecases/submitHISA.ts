import { httpResult } from "aba-node";
import { makeTestData, makeHISA, testStructures } from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitHISA(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { hisaTestStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitHISA(info: usecaseTypes.ISubmitTest) {
    const { userId, fields } = info;
    const { expressingSexualEmotions, sexualIntercourse } = makeHISA(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "E",
        rawscore: expressingSexualEmotions,
        baserate: expressingSexualEmotions,
        interpret: "",
        label: {
          fa: "ابراز عواطف و احساسات جنسی",
          en: "Expressing Sexual Emotions",
        },
      },
      {
        type: "factor",
        variable: "S",
        rawscore: sexualIntercourse,
        baserate: sexualIntercourse,
        interpret: "",
        label: {
          fa: "روابط جنسی",
          en: "Sexual Intercourse",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: hisaTestStructure.title,
      structureId: hisaTestStructure.id,
      shortName: hisaTestStructure.shortName,
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
