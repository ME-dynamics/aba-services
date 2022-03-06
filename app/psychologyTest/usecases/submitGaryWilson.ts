import { httpResult } from "aba-node";
import { makeTestData, makeGaryWilson, testStructures } from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitGaryWilson(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { created } = httpResult.success;
  return async function submitGaryWilson(info: usecaseTypes.ISubmitGaryWilson) {
    const { fields, userId } = info;
    const { garyWilsonStructure } = testStructures;
    const {
      activeAvoidance,
      approach,
      extinction,
      fight,
      flight,
      passiveAvoidance,
    } = makeGaryWilson(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "approach",
        rawscore: approach.aggregate,
        baserate: approach.aggregate,
        interpret: approach.approachInterpret,
        label: {
          fa: "روی آوری",
          en: "approach",
        },
      },
      {
        type: "factor",
        variable: "activeAvoidance",
        rawscore: activeAvoidance.aggregate,
        baserate: activeAvoidance.aggregate,
        interpret: activeAvoidance.activeAvoidanceInterpret,
        label: {
          fa: "اجتناب فعال",
          en: "active avoidance",
        },
      },
      {
        type: "factor",
        variable: "passiveAvoidance",
        rawscore: passiveAvoidance.aggregate,
        baserate: passiveAvoidance.aggregate,
        interpret: passiveAvoidance.passiveAvoidanceInterpret,
        label: {
          fa: "اجتناب منفعل",
          en: "passive avoidance",
        },
      },
      {
        type: "factor",
        variable: "extinction",
        rawscore: extinction.aggregate,
        baserate: extinction.aggregate,
        interpret: extinction.extinctionInterpret,
        label: {
          fa: "خاموشی",
          en: "extinction",
        },
      },
      {
        type: "factor",
        variable: "fight",
        rawscore: fight.aggregate,
        baserate: fight.aggregate,
        interpret: fight.fightInterpret,
        label: {
          fa: "جنگ",
          en: "fight",
        },
      },
      {
        type: "factor",
        variable: "flight",
        rawscore: flight.aggregate,
        baserate: flight.aggregate,
        interpret: flight.flightInterpret,
        label: {
          fa: "گریز",
          en: "flight",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: garyWilsonStructure.title,
      structureId: garyWilsonStructure.id,
      shortName: garyWilsonStructure.shortName,
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
