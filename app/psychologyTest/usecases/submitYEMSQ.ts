import { httpResult } from "aba-node";
import { testStructures, makeYEMSQ, makeTestData } from "../entities";
import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitYEMSQ(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { yemsqStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitYEMSQ(info: usecaseTypes.ISubmitYEMSQ) {
    const { fields, userId } = info;
    const {
      abandonment,
      defectiveness,
      dependence,
      emotionalDeprivation,
      emotionalInhibition,
      enmeshment,
      entitlement,
      failure,
      mistrust,
      selfDiscipline,
      selfSacrifice,
      socialIsolation,
      subjugation,
      unrelentingStandards,
      vulnerabilityToHarmOrIllness,
    } = makeYEMSQ(fields);
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "abandonment",
        rawscore: abandonment,
        baserate: abandonment,
        interpret: "",
        label: {
          en: "Abandonment",
          fa: "رها شدگی/ بی ثباتی",
        },
      },
      {
        type: "factor",
        variable: "mistrust",
        rawscore: mistrust,
        baserate: mistrust,
        interpret: "",
        label: {
          en: "Mistrust",
          fa: "بی اعتمادی",
        },
      },
      {
        type: "factor",
        variable: "emotionalDeprivation",
        rawscore: emotionalDeprivation,
        baserate: emotionalDeprivation,
        interpret: "",
        label: {
          en: "Emotional Deprivation",
          fa: "محرومیت هیجانی",
        },
      },
      {
        type: "factor",
        variable: "defectiveness",
        rawscore: defectiveness,
        baserate: defectiveness,
        interpret: "",
        label: {
          en: "Defectiveness",
          fa: "نقص / شرم",
        },
      },
      {
        type: "factor",
        variable: "socialIsolation",
        rawscore: socialIsolation,
        baserate: socialIsolation,
        interpret: "",
        label: {
          en: "Social isolation",
          fa: "انزوای اجتماعی",
        },
      },
      {
        type: "factor",
        variable: "dependence",
        rawscore: dependence,
        baserate: dependence,
        interpret: "",
        label: {
          en: "Dependence",
          fa: "وابستگی",
        },
      },
      {
        type: "factor",
        variable: "vulnerabilityToHarmOrIllness",
        rawscore: vulnerabilityToHarmOrIllness,
        baserate: vulnerabilityToHarmOrIllness,
        interpret: "",
        label: {
          en: "Vulnerability to Harm or Illness",
          fa: "آسیب پذیری نسبت به ضرر یا بیماری",
        },
      },
      {
        type: "factor",
        variable: "enmeshment",
        rawscore: enmeshment,
        baserate: enmeshment,
        interpret: "",
        label: {
          en: "Enmeshment",
          fa: "گرفتاری",
        },
      },
      {
        type: "factor",
        variable: "failure",
        rawscore: failure,
        baserate: failure,
        interpret: "",
        label: {
          en: "Failure",
          fa: "شکست",
        },
      },
      {
        type: "factor",
        variable: "entitlement",
        rawscore: entitlement,
        baserate: entitlement,
        interpret: "",
        label: {
          en: "Entitlement",
          fa: "استحقاق",
        },
      },
      {
        type: "factor",
        variable: "selfDiscipline",
        rawscore: selfDiscipline,
        baserate: selfDiscipline,
        interpret: "",
        label: {
          en: "Self discipline",
          fa: "خویشتن داری و خودانضباطی ناکافی",
        },
      },
      {
        type: "factor",
        variable: "subjugation",
        rawscore: subjugation,
        baserate: subjugation,
        interpret: "",
        label: {
          en: "Subjugation",
          fa: "اطاعت",
        },
      },
      {
        type: "factor",
        variable: "selfSacrifice",
        rawscore: selfSacrifice,
        baserate: selfSacrifice,
        interpret: "",
        label: {
          en: "Self-sacrifice",
          fa: "ایثار",
        },
      },
      {
        type: "factor",
        variable: "emotionalInhibition",
        rawscore: emotionalInhibition,
        baserate: emotionalInhibition,
        interpret: "",
        label: {
          en: "Emotional inhibition",
          fa: "بازداری هیجانی",
        },
      },
      {
        type: "factor",
        variable: "unrelentingStandards",
        rawscore: unrelentingStandards,
        baserate: unrelentingStandards,
        interpret: "",
        label: {
          en: "Unrelenting Standards",
          fa: "معیارهای سرسختانه",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      userId,
      title: yemsqStructure.title,
      shortName: yemsqStructure.shortName,
      structureId: yemsqStructure.id,
      fields,
      resultSummary: "",
      results,
      createdAt: undefined,
      modifiedAt: undefined,
    });
    await insertTestData(testData.object());
    return created({
      payload: testData.object(),
    });
  };
}
