import { httpResult } from "aba-node";
import { makeNEOPIR, makeTestData, NEOPIRStructure } from "../entities";
import { entityTypes, usecaseTypes } from "../types";
export function buildSubmitNEOPIR(args: usecaseTypes.IBuildSubmitNEOPIR) {
  const { insertTestData } = args;
  const { created } = httpResult.success;
  function formDataInput(
    info: usecaseTypes.ISubmitNEOPIR
  ): entityTypes.ITestData {
    const { fields, userId } = info;
    const { aGroup, cGroup, eGroup, nGroup, oGroup, errors, warnings } =
      makeNEOPIR(fields);
    const { n, n1, n2, n3, n4, n5, n6 } = nGroup;
    const { e, e1, e2, e3, e4, e5, e6 } = eGroup;
    const { o, o1, o2, o3, o4, o5, o6 } = oGroup;
    const { a, a1, a2, a3, a4, a5, a6 } = aGroup;
    const { c, c1, c2, c3, c4, c5, c6 } = cGroup;
    const result: entityTypes.ITestResult[] = [];
    for (let index = 0; index < warnings.length; index++) {
      const warning = warnings[index];
      result.push({
        type: "warning",
        rawScore: -1,
        baseRate: -1,
        variable: "",
        interpret: "",
        label: {
          en: "",
          fa: warning,
        },
      });
    }
    for (let index = 0; index < errors.length; index++) {
      const error = errors[index];
      result.push({
        type: "warning",
        rawScore: -1,
        baseRate: -1,
        variable: "",
        interpret: "",
        label: {
          en: "",
          fa: error,
        },
      });
    }
    result.push({
      type: "factor",
      rawScore: n,
      baseRate: n,
      variable: "n",
      interpret: "",
      label: {
        en: "Neuroticism",
        fa: "آزرده گرایی",
      },
    });
    result.push({
      type: "factor",
      rawScore: n1,
      baseRate: n1,
      variable: "n1",
      interpret: "",
      label: {
        en: "Anxiety",
        fa: "اضطراب",
      },
    });
    result.push({
      type: "factor",
      rawScore: n2,
      baseRate: n2,
      variable: "n2",
      interpret: "",
      label: {
        en: "Angry Hostility",
        fa: "خصومت",
      },
    });
    result.push({
      type: "factor",
      rawScore: n3,
      baseRate: n3,
      variable: "n3",
      interpret: "",
      label: {
        en: "Depression",
        fa: "افسردگی",
      },
    });
    return {
      id: undefined,
      userId,
      structureId: "NEOPIR",
      shortName: "NEOPIR",
      title: {
        en: NEOPIRStructure.title.en,
        fa: NEOPIRStructure.title.fa,
      },
      fields,
      results: [],
      resultSummary: "",
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  return async function submitNEOPIR(info: usecaseTypes.ISubmitNEOPIR) {
    //TODO: should check if structure exists

    const testData = makeTestData(formDataInput(info));
    await insertTestData(testData.object());
    return created<entityTypes.IMadeTestDataObject>({
      payload: testData.object(),
    });
  };
}
