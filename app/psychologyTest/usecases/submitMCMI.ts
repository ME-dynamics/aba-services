import { httpResult } from "aba-node";
import { makeMCMI, makeTestData, testStructures } from "../entities";

import type { entityTypes, usecaseTypes } from "../types";

export function buildSubmitMCMI(args: usecaseTypes.IBuildSubmitTest) {
  const { insertTestData } = args;
  const { mcmiStructure } = testStructures;
  const { created } = httpResult.success;
  return async function submitMCMI(info: usecaseTypes.ISubmitMCMI) {
    const { fields, userId, gender } = info;
    const { rawScore, menBaseRate, womenBaseRate } = makeMCMI(fields);
    const baseRate = gender === "male" ? menBaseRate : womenBaseRate;
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "1",
        rawscore: rawScore.one,
        baserate: baseRate.one,
        interpret: "",
        label: {
          en: "schizoid",
          fa: "اسکیزوئید",
        },
      },
      {
        type: "factor",
        variable: "2A",
        rawscore: rawScore.twoA,
        baserate: baseRate.twoA,
        interpret: "",
        label: {
          en: "Avoidant",
          fa: "اجتنابی",
        },
      },
      {
        type: "factor",
        variable: "2B",
        rawscore: rawScore.twoB,
        baserate: baseRate.twoB,
        interpret: "",
        label: {
          en: "Depressive",
          fa: "افسرده",
        },
      },
      {
        type: "factor",
        variable: "3",
        rawscore: rawScore.three,
        baserate: baseRate.three,
        interpret: "",
        label: {
          en: "Dependent",
          fa: "وابسته",
        },
      },
      {
        type: "factor",
        variable: "4",
        rawscore: rawScore.four,
        baserate: baseRate.four,
        interpret: "",
        label: {
          en: "Historic",
          fa: "نمایشی",
        },
      },
      {
        type: "factor",
        variable: "5",
        rawscore: rawScore.five,
        baserate: baseRate.five,
        interpret: "",
        label: {
          en: "Narcissistic",
          fa: "خودشیفته",
        },
      },
      {
        type: "factor",
        variable: "6A",
        rawscore: rawScore.sixA,
        baserate: baseRate.sixA,
        interpret: "",
        label: {
          en: "Antisocial",
          fa: "ضد اجتماعی",
        },
      },
      {
        type: "factor",
        variable: "6B",
        rawscore: rawScore.sixB,
        baserate: baseRate.sixB,
        interpret: "",
        label: {
          en: "Sadistic",
          fa: "آزارگر",
        },
      },
      {
        type: "factor",
        variable: "7",
        rawscore: rawScore.seven,
        baserate: baseRate.seven,
        interpret: "",
        label: {
          en: "Compulsive",
          fa: "اجباری",
        },
      },
      {
        type: "factor",
        variable: "8A",
        rawscore: rawScore.eightA,
        baserate: baseRate.eightA,
        interpret: "",
        label: {
          en: "Negativistic",
          fa: "منفی گرا",
        },
      },
      {
        type: "factor",
        variable: "8B",
        rawscore: rawScore.eightB,
        baserate: baseRate.eightB,
        interpret: "",
        label: {
          en: "Self-defeating",
          fa: "خود ناکام ساز",
        },
      },
      {
        type: "factor",
        variable: "S",
        rawscore: rawScore.s,
        baserate: baseRate.S,
        interpret: "",
        label: {
          en: "Schizotypal",
          fa: "اسکیزوتایپی",
        },
      },
      {
        type: "factor",
        variable: "C",
        rawscore: rawScore.c,
        baserate: baseRate.C,
        interpret: "",
        label: {
          en: "Borderline",
          fa: "مرزی",
        },
      },
      {
        type: "factor",
        variable: "P",
        rawscore: rawScore.p,
        baserate: baseRate.P,
        interpret: "",
        label: {
          en: "Paranoid",
          fa: "پارانوئید",
        },
      },
      {
        type: "factor",
        variable: "A",
        rawscore: rawScore.a,
        baserate: baseRate.A,
        interpret: "",
        label: {
          en: "Anxiety disorder",
          fa: "اختلال اضطراب",
        },
      },
      {
        type: "factor",
        variable: "H",
        rawscore: rawScore.h,
        baserate: baseRate.H,
        interpret: "",
        label: {
          en: "Somatoform",
          fa: "اختلال شبه جسمی",
        },
      },
      {
        type: "factor",
        variable: "N",
        rawscore: rawScore.n,
        baserate: baseRate.N,
        interpret: "",
        label: {
          en: "Bipolar: Manic",
          fa: "دوقطبی: اختلال مانیک",
        },
      },
      {
        type: "factor",
        variable: "D",
        rawscore: rawScore.d,
        baserate: baseRate.D,
        interpret: "",
        label: {
          en: "Dysthymic",
          fa: "افسرده خویی",
        },
      },
      {
        type: "factor",
        variable: "B",
        rawscore: rawScore.b,
        baserate: baseRate.B,
        interpret: "",
        label: {
          en: "Alcohol Dependence",
          fa: "وابسته به الکل",
        },
      },
      {
        type: "factor",
        variable: "T",
        rawscore: rawScore.t,
        baserate: baseRate.T,
        interpret: "",
        label: {
          en: "Drug Dependence",
          fa: "وابستگی به مواد",
        },
      },
      {
        type: "factor",
        variable: "R",
        rawscore: rawScore.r,
        baserate: baseRate.R,
        interpret: "",
        label: {
          en: "PTSD",
          fa: "اختلال استرس پس از ضربه",
        },
      },
      {
        type: "factor",
        variable: "SS",
        rawscore: rawScore.ss,
        baserate: baseRate.SS,
        interpret: "",
        label: {
          en: "Thought Disorder",
          fa: "اختلال تفکر",
        },
      },
      {
        type: "factor",
        variable: "CC",
        rawscore: rawScore.cc,
        baserate: baseRate.CC,
        interpret: "",
        label: {
          en: "Major Depression",
          fa: "افسردگی اساسی",
        },
      },
      {
        type: "factor",
        variable: "PP",
        rawscore: rawScore.pp,
        baserate: baseRate.PP,
        interpret: "",
        label: {
          en: "Delusional Disorder",
          fa: "اختلال هذیانی",
        },
      },
    ];
    const testData = makeTestData({
      id: undefined,
      structureId: mcmiStructure.id,
      userId,
      title: mcmiStructure.title,
      shortName: mcmiStructure.shortName,
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
