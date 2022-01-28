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

export const formStructure: entityTypes.IFormStructure = {
  id: "beckAnxiety",
  title: {
    fa: "پرسشنامه اضطراب بک",
    en: "Beck anxiety inventory (BAI)",
  },
  description: "",
  fields: {
    "1": {
      question: "کرخی و گز گز شدن (مور مور شدن)",
      choices,
    },
    "2": {
      question: "احساس داغی (گرما)",
      choices,
    },
    "3": {
      question: "لرزش در پاها",
      choices,
    },
    "4": {
      question: "ناتوانی در آرامش",
      choices,
    },
    "5": {
      question: "ترس از وقوع حادثه بد",
      choices,
    },
    "6": {
      question: "سرگیجه و منگی",
      choices,
    },
    "7": {
      question: "تپش قلب و نفس نفس زدن",
      choices,
    },
    "8": {
      question: "حالت متغیر (بی ثبات)",
      choices,
    },
    "9": {
      question: "وحشت زده",
      choices,
    },
    "10": {
      question: "عصبی",
      choices,
    },
    "11": {
      question: "احساس خفگی",
      choices,
    },
    "12": {
      question: "لرزش دست",
      choices,
    },
    "13": {
      question: "لرزش بدن",
      choices,
    },
    "14": {
      question: "ترس از دست دادن کنترل",
      choices,
    },
    "15": {
      question: "به سختی نفس کشیدن",
      choices,
    },
    "16": {
      question: "ترس از مردن",
      choices,
    },
    "17": {
      question: "ترسیده (حالت ترس)",
      choices,
    },
    "18": {
      question: "سوء هاضمه و ناراحتی در شکم",
      choices,
    },
    "19": {
      question: "غش کردن (از حال رفتن)",
      choices,
    },
    "20": {
      question: "سرخ شدن صورت",
      choices,
    },
    "21": {
      question: "عرق کردن (نه در اثر گرما)",
      choices,
    },
  },
};
