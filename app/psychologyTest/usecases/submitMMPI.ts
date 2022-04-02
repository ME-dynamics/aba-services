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
    const isMale = gender === "male";
    const tWithK = isMale ? tWithKMenCal : tWithKWoMenCal;
    const tWithoutK = isMale ? tWithOutKMenCal : tWithOutKWoMenCal;
    const results: entityTypes.ITestResult[] = [
      {
        type: "factor",
        variable: "L",
        rawscore: rawScore.L,
        baserate: tWithoutK.L,
        interpret: "",
        label: {
          fa: "دروغ",
          en: "Lie",
        },
      },
      {
        type: "factor",
        variable: "F",
        rawscore: rawScore.F,
        baserate: tWithoutK.F,
        interpret: "",
        label: {
          fa: "ندرت وقوع / غیر معمولی",
          en: "Infrequency",
        },
      },
      {
        type: "factor",
        variable: "K",
        rawscore: rawScore.K,
        baserate: tWithoutK.K,
        interpret: "",
        label: {
          fa: "حالت تدافعی",
          en: "Defensiveness",
        },
      },
      {
        type: "factor",
        variable: "Hs",
        rawscore: rawScore.Hs,
        baserate: tWithoutK.Hs,
        interpret: "",
        label: {
          fa: "خودبیمار پنداری",
          en: "Hypochondriasis",
        },
      },
      {
        type: "factor",
        variable: "Hs+K",
        rawscore: rawScore.Hs,
        baserate: tWithK.Hs,
        interpret: "",
        label: {
          fa: "خودبیمار پنداری",
          en: "Hypochondriasis",
        },
      },
      {
        type: "factor",
        variable: "D",
        rawscore: rawScore.D,
        baserate: tWithoutK.D,
        interpret: "",
        label: {
          fa: "افسردگی",
          en: "Depression",
        },
      },
      {
        type: "factor",
        variable: "Hy",
        rawscore: rawScore.Hy,
        baserate: tWithoutK.Hy,
        interpret: "",
        label: {
          fa: "هیستری",
          en: "Hysteria",
        },
      },
      {
        type: "factor",
        variable: "Pd",
        rawscore: rawScore.Pd,
        baserate: tWithoutK.Pd,
        interpret: "",
        label: {
          fa: "انحراف روانی - اجتماعی",
          en: "Psychopathic Deviate",
        },
      },
      {
        type: "factor",
        variable: "Pd+K",
        rawscore: rawScore.Pd,
        baserate: tWithK.Pd,
        interpret: "",
        label: {
          fa: "انحراف روانی - اجتماعی",
          en: "Psychopathic Deviate",
        },
      },
      isMale
        ? {
            type: "factor",
            variable: "Mm",
            rawscore: rawScore.Mm,
            //@ts-expect-error
            baserate: tWithoutK.Mm,
            interpret: "",
            label: {
              fa: "مردانگی",
              en: "Masculinity",
            },
          }
        : {
            type: "factor",
            variable: "MF",
            rawscore: rawScore.Mf,
            //@ts-expect-error
            baserate: tWithoutK.Mf,
            interpret: "",
            label: {
              fa: "زنانگی",
              en: "Femininity",
            },
          },
      {
        type: "factor",
        variable: "Pa",
        rawscore: rawScore.Pa,
        baserate: tWithoutK.Pa,
        interpret: "",
        label: {
          fa: "پارانویا",
          en: "Paranoia",
        },
      },
      {
        type: "factor",
        variable: "Pt",
        rawscore: rawScore.Pt,
        baserate: tWithoutK.Pt,
        interpret: "",
        label: {
          fa: "ضعف روانی",
          en: "Psychasthenia",
        },
      },
      {
        type: "factor",
        variable: "Pt+K",
        rawscore: rawScore.Pt,
        baserate: tWithK.Pt,
        interpret: "",
        label: {
          fa: "ضعف روانی",
          en: "Psychasthenia",
        },
      },
      {
        type: "factor",
        variable: "Sc",
        rawscore: rawScore.Sc,
        baserate: tWithoutK.Sc,
        interpret: "",
        label: {
          fa: "اسکیزوفرنی",
          en: "Schizophrenia",
        },
      },
      {
        type: "factor",
        variable: "Sc+K",
        rawscore: rawScore.Sc,
        baserate: tWithK.Sc,
        interpret: "",
        label: {
          fa: "اسکیزوفرنی",
          en: "Schizophrenia",
        },
      },
      {
        type: "factor",
        variable: "Ma",
        rawscore: rawScore.Ma,
        baserate: tWithoutK.Ma,
        interpret: "",
        label: {
          fa: "هیپومانیا",
          en: "Hypomania",
        },
      },
      {
        type: "factor",
        variable: "Ma+K",
        rawscore: rawScore.Ma,
        baserate: tWithK.Ma,
        interpret: "",
        label: {
          fa: "هیپومانیا",
          en: "Hypomania",
        },
      },
      {
        type: "factor",
        variable: "Si",
        rawscore: rawScore.Si,
        baserate: tWithoutK.Si,
        interpret: "",
        label: {
          fa: "درون گرایی اجتماعی",
          en: "Social Introversion",
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
