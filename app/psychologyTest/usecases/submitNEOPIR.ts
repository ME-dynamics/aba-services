import { httpResult } from "aba-node";
import { makeNEOPIR, makeTestData, testStructures } from "../entities";
import { entityTypes, usecaseTypes } from "../types";
export function buildSubmitNEOPIR(args: usecaseTypes.IBuildSubmitNEOPIR) {
  const { insertTestData } = args;
  const { NEOPIRStructure } = testStructures;
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
    const results: entityTypes.ITestResult[] = [];
    for (let index = 0; index < warnings.length; index++) {
      const warning = warnings[index];
      results.push({
        type: "warning",
        rawscore: -1,
        baserate: -1,
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
      results.push({
        type: "error",
        rawscore: -1,
        baserate: -1,
        variable: "",
        interpret: "",
        label: {
          en: "",
          fa: error,
        },
      });
    }
    results.push({
      type: "factor",
      rawscore: n,
      baserate: n,
      variable: "n",
      interpret: "",
      label: {
        en: "Neuroticism",
        fa: "آزرده گرایی",
      },
    });
    results.push({
      type: "facet",
      rawscore: n1,
      baserate: n1,
      variable: "n1",
      interpret: "",
      label: {
        en: "Anxiety",
        fa: "اضطراب",
      },
    });
    results.push({
      type: "facet",
      rawscore: n2,
      baserate: n2,
      variable: "n2",
      interpret: "",
      label: {
        en: "Angry Hostility",
        fa: "خصومت",
      },
    });
    results.push({
      type: "facet",
      rawscore: n3,
      baserate: n3,
      variable: "n3",
      interpret: "",
      label: {
        en: "Depression",
        fa: "افسردگی",
      },
    });
    results.push({
      type: "facet",
      rawscore: n4,
      baserate: n4,
      variable: "n4",
      interpret: "",
      label: {
        en: "Self-Consciousness",
        fa: "هوشیاری نسبت به خود",
      },
    });
    results.push({
      type: "facet",
      rawscore: n5,
      baserate: n5,
      variable: "n5",
      interpret: "",
      label: {
        en: "Impulsiveness",
        fa: "شتابزدگی یا تکانشوری",
      },
    });
    results.push({
      type: "facet",
      rawscore: n6,
      baserate: n6,
      variable: "n6",
      interpret: "",
      label: {
        en: "Vulnerability",
        fa: "آسیب پذیری",
      },
    });
    results.push({
      type: "factor",
      rawscore: e,
      baserate: e,
      variable: "e",
      interpret: "",
      label: {
        en: "Extraversion",
        fa: "برون گرایی",
      },
    });
    results.push({
      type: "facet",
      rawscore: e1,
      baserate: e1,
      variable: "e1",
      interpret: "",
      label: {
        en: "Warmth",
        fa: "گرم بودن",
      },
    });
    results.push({
      type: "facet",
      rawscore: e2,
      baserate: e2,
      variable: "e2",
      interpret: "",
      label: {
        en: "Gregariousness",
        fa: "معاشرتی بودن",
      },
    });
    results.push({
      type: "facet",
      rawscore: e3,
      baserate: e3,
      variable: "e3",
      interpret: "",
      label: {
        en: "Assertiveness",
        fa: "ابراز وجود",
      },
    });
    results.push({
      type: "facet",
      rawscore: e4,
      baserate: e4,
      variable: "e4",
      interpret: "",
      label: {
        en: "Activity",
        fa: "فعال بودن",
      },
    });
    results.push({
      type: "facet",
      rawscore: e5,
      baserate: e5,
      variable: "e5",
      interpret: "",
      label: {
        en: "Excitement-seeking",
        fa: "هیجان خواهی",
      },
    });
    results.push({
      type: "facet",
      rawscore: e6,
      baserate: e6,
      variable: "e6",
      interpret: "",
      label: {
        en: "Positive Emotions",
        fa: "هیجان مثبت",
      },
    });
    results.push({
      type: "factor",
      rawscore: o,
      baserate: o,
      variable: "o",
      interpret: "",
      label: {
        en: "Openness to Experience",
        fa: "گشودگی",
      },
    });
    results.push({
      type: "facet",
      rawscore: o1,
      baserate: o1,
      variable: "o1",
      interpret: "",
      label: {
        en: "Fantasy",
        fa: "تخیل",
      },
    });
    results.push({
      type: "facet",
      rawscore: o2,
      baserate: o2,
      variable: "o2",
      interpret: "",
      label: {
        en: "Aesthetic",
        fa: "زیباپسندی یا زیبایی شناسی",
      },
    });
    results.push({
      type: "facet",
      rawscore: o3,
      baserate: o3,
      variable: "o3",
      interpret: "",
      label: {
        en: "Feelings",
        fa: "احساسات",
      },
    });
    results.push({
      type: "facet",
      rawscore: o4,
      baserate: o4,
      variable: "o4",
      interpret: "",
      label: {
        en: "Actions",
        fa: "کنش ها",
      },
    });
    results.push({
      type: "facet",
      rawscore: o5,
      baserate: o5,
      variable: "o5",
      interpret: "",
      label: {
        en: "Ideas",
        fa: "دیدگاه ها",
      },
    });
    results.push({
      type: "facet",
      rawscore: o6,
      baserate: o6,
      variable: "o6",
      interpret: "",
      label: {
        en: "Values",
        fa: "ارزش ها",
      },
    });
    results.push({
      type: "factor",
      rawscore: a,
      baserate: a,
      variable: "a",
      interpret: "",
      label: {
        en: "Agreeableness",
        fa: "موافق بودن",
      },
    });
    results.push({
      type: "facet",
      rawscore: a1,
      baserate: a1,
      variable: "a1",
      interpret: "",
      label: {
        en: "Trust",
        fa: "اعتماد",
      },
    });
    results.push({
      type: "facet",
      rawscore: a2,
      baserate: a2,
      variable: "a2",
      interpret: "",
      label: {
        en: "Straightforwardness",
        fa: "رک گویی",
      },
    });
    results.push({
      type: "facet",
      rawscore: a3,
      baserate: a3,
      variable: "a3",
      interpret: "",
      label: {
        en: "Altruism",
        fa: "نوع دوستی",
      },
    });
    results.push({
      type: "facet",
      rawscore: a4,
      baserate: a4,
      variable: "a4",
      interpret: "",
      label: {
        en: "Compliance",
        fa: "همراهی",
      },
    });
    results.push({
      type: "facet",
      rawscore: a5,
      baserate: a5,
      variable: "a5",
      interpret: "",
      label: {
        en: "Modesty",
        fa: "تواضع",
      },
    });
    results.push({
      type: "facet",
      rawscore: a6,
      baserate: a6,
      variable: "a6",
      interpret: "",
      label: {
        en: "Tender-Mindedness",
        fa: "دلرحم بودن",
      },
    });
    results.push({
      type: "factor",
      rawscore: c,
      baserate: c,
      variable: "c",
      interpret: "",
      label: {
        en: "Conscientiousness",
        fa: "باوجدان بودن",
      },
    });
    results.push({
      type: "facet",
      rawscore: c1,
      baserate: c1,
      variable: "c1",
      interpret: "",
      label: {
        en: "Competence",
        fa: "کفایت یا شایستگی",
      },
    });
    results.push({
      type: "facet",
      rawscore: c2,
      baserate: c2,
      variable: "c2",
      interpret: "",
      label: {
        en: "Order",
        fa: "نظم و ترتیب",
      },
    });
    results.push({
      type: "facet",
      rawscore: c3,
      baserate: c3,
      variable: "c3",
      interpret: "",
      label: {
        en: "Dutifulness",
        fa: "وظیفه شناسی",
      },
    });
    results.push({
      type: "facet",
      rawscore: c4,
      baserate: c4,
      variable: "c4",
      interpret: "",
      label: {
        en: "Achievement Striving",
        fa: "تلاش برای موفقیت",
      },
    });
    results.push({
      type: "facet",
      rawscore: c5,
      baserate: c5,
      variable: "c5",
      interpret: "",
      label: {
        en: "Self-discipline",
        fa: "خویشتن داری، نظم درونی",
      },
    });
    results.push({
      type: "facet",
      rawscore: c6,
      baserate: c6,
      variable: "c6",
      interpret: "",
      label: {
        en: "Deliberation",
        fa: "محتاط در تصمیم گیری",
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
      results,
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
