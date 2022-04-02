import { httpResult } from "aba-node";
import { makeTestData, makeHISD, testStructures } from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitHISD(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { hisdTestStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitHISD(info: usecaseTypes.ISubmitTest) {
    const { userId, fields } = info;
    const { IndexOfSexualDesire } = makeHISD(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "D",
        rawscore: IndexOfSexualDesire,
        baserate: IndexOfSexualDesire,
        interpret: "",
        label: {
          fa: "شاخص تمایل جنسی",
          en: "index of Sexual Desire",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: hisdTestStructure.title,
      structureId: hisdTestStructure.id,
      shortName: hisdTestStructure.shortName,
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
