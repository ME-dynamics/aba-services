import { httpResult } from "aba-node";
import { makeTestData, makeMMPI, testStructures } from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitMMPI(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { mmpiStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitMMPI(info: usecaseTypes.ISubmitTestWithGender) {
    const { userId, fields, gender } = info;
    const {
      rawScore,
      tWithKMenCal,
      tWithKWoMenCal,
      tWithOutKMenCal,
      tWithOutKWoMenCal,
    } = makeMMPI(fields);
    const tWithK = gender === "male" ? tWithKMenCal : tWithKWoMenCal;
    const tWithoutK = gender === "male" ? tWithOutKMenCal : tWithOutKWoMenCal;
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "D",
        rawscore: rawScore.D,
        baserate: tWithK.D,
        interpret: "",
        label: {
          fa: "",
          en: "",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: mmpiStructure.title,
      structureId: mmpiStructure.id,
      shortName: mmpiStructure.shortName,
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
