import { httpResult } from "aba-node";
import {
  makeTestData,
  makeBeckDepressionII,
  testStructures,
} from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitBeckDepressionII(
  args: usecaseTypes.IBuildSubmitTest
) {
  const { insertTestData } = args;
  const { beckDepressionIIStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitBeckDepressionII(
    info: usecaseTypes.ISubmitBeckDepressionII
  ) {
    const { fields, userId } = info;
    const { aggregate, interpret } = makeBeckDepressionII(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "depression",
        rawscore: aggregate,
        baserate: aggregate,
        interpret: interpret,
        label: {
          fa: "افسردگی",
          en: "depression",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: beckDepressionIIStructure.title,
      structureId: beckDepressionIIStructure.id,
      shortName: beckDepressionIIStructure.shortName,
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
