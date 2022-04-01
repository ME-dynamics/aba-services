import { entityTypes } from "../../types";

const choices = [
  {
    label: "اصلا",
    value: 0,
  },
  {
    label: "خفیف (زیاد ناراحتم نکرده است)",
    value: 1,
  },
  {
    label: "متوسط (خیلی ناخوشایند بود اما تحمل کردم)",
    value: 2,
  },
  {
    label: "شدید (نمی توانستم آن را تحمل کنم)",
    value: 3,
  },
];

export const testStructure: entityTypes.ITestStructure = {
  id: "beckAnxiety",
  title: {
    fa: "پرسشنامه اضطراب بک",
    en: "Beck anxiety inventory (BAI)",
  },
  minutesToFill: 15,
  chartType: ["line"],
  shortName: "BAI",
  description: "",
  fields: {
    "1": {
      question: "کرخی و گز گز شدن (مور مور شدن)",
      questionHint: undefined,
      choices,
    },
    "2": {
      question: "احساس داغی (گرما)",
      questionHint: undefined,
      choices,
    },
    "3": {
      question: "لرزش در پاها",
      questionHint: undefined,
      choices,
    },
    "4": {
      question: "ناتوانی در آرامش",
      questionHint: undefined,
      choices,
    },
    "5": {
      question: "ترس از وقوع حادثه بد",
      questionHint: undefined,
      choices,
    },
    "6": {
      question: "سرگیجه و منگی",
      questionHint: undefined,
      choices,
    },
    "7": {
      question: "تپش قلب و نفس نفس زدن",
      questionHint: undefined,
      choices,
    },
    "8": {
      question: "حالت متغیر (بی ثبات)",
      questionHint: undefined,
      choices,
    },
    "9": {
      question: "وحشت زده",
      questionHint: undefined,
      choices,
    },
    "10": {
      question: "عصبی",
      questionHint: undefined,
      choices,
    },
    "11": {
      question: "احساس خفگی",
      questionHint: undefined,
      choices,
    },
    "12": {
      question: "لرزش دست",
      questionHint: undefined,
      choices,
    },
    "13": {
      question: "لرزش بدن",
      questionHint: undefined,
      choices,
    },
    "14": {
      question: "ترس از دست دادن کنترل",
      questionHint: undefined,
      choices,
    },
    "15": {
      question: "به سختی نفس کشیدن",
      questionHint: undefined,
      choices,
    },
    "16": {
      question: "ترس از مردن",
      questionHint: undefined,
      choices,
    },
    "17": {
      question: "ترسیده (حالت ترس)",
      questionHint: undefined,
      choices,
    },
    "18": {
      question: "سوء هاضمه و ناراحتی در شکم",
      questionHint: undefined,
      choices,
    },
    "19": {
      question: "غش کردن (از حال رفتن)",
      questionHint: undefined,
      choices,
    },
    "20": {
      question: "سرخ شدن صورت",
      questionHint: undefined,
      choices,
    },
    "21": {
      question: "عرق کردن (نه در اثر گرما)",
      questionHint: undefined,
      choices,
    },
  },
};
