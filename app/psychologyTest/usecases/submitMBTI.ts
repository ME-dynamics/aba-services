import { httpResult } from "aba-node";
import { makeMBTI, makeTestData, mbtiStructure } from "../entities";

import { entityTypes, usecaseTypes } from "../types";

export function buildSubmitMBTI(args: usecaseTypes.IBuildSubmitMBTI) {
  const { insertTestData } = args;
  const { created } = httpResult.success;
  function formDataInput(
    info: usecaseTypes.ISubmitMBTI
  ): entityTypes.ITestData {
    const { fields, userId } = info;
    const { e, f, i, j, n, p, s, t } = makeMBTI(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "e",
        rawScore: e.score,
        baseRate: e.score,
        label: {
          en: e.enTitle,
          fa: e.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "f",
        rawScore: f.score,
        baseRate: f.score,
        label: {
          en: f.enTitle,
          fa: f.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "i",
        rawScore: i.score,
        baseRate: i.score,
        label: {
          en: i.enTitle,
          fa: i.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "j",
        rawScore: j.score,
        baseRate: j.score,
        label: {
          en: j.enTitle,
          fa: j.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "i",
        rawScore: n.score,
        baseRate: n.score,
        label: {
          en: n.enTitle,
          fa: n.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "p",
        rawScore: p.score,
        baseRate: p.score,
        label: {
          en: p.enTitle,
          fa: p.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "s",
        rawScore: s.score,
        baseRate: s.score,
        label: {
          en: s.enTitle,
          fa: s.faTitle,
        },
        interpret: "",
      },
      {
        type: "factor",
        variable: "t",
        rawScore: t.score,
        baseRate: t.score,
        label: {
          en: t.enTitle,
          fa: t.faTitle,
        },
        interpret: "",
      },
    ];
    const eiChosen = e > i ? "E" : "I";
    const jpChosen = j > p ? "J" : "P";
    const snChosen = s > n ? "S" : "N";
    const tfChosen = t > f ? "T" : "F";

    const personality = `${eiChosen}${snChosen}${tfChosen}${jpChosen}`;
    return {
      id: undefined,
      userId,
      structureId: mbtiStructure.id,
      shortName: "mbti",
      title: {
        en: mbtiStructure.title.en,
        fa: mbtiStructure.title.fa,
      },
      fields,
      results,
      resultSummary: personality,
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  return async function submitMBTI(info: usecaseTypes.ISubmitMBTI) {
    const testData = makeTestData(formDataInput(info));
    await insertTestData(testData.object());
    return created<entityTypes.IMadeTestDataObject>({
      payload: testData.object(),
    });
  };
}
