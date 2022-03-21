import { entityTypes } from "../../types";

const choices = [
  {
    label: "همیشه",
    value: 0,
  },
  {
    label: "اکثرا",
    value: 1,
  },
  {
    label: "گاهی",
    value: 2,
  },
  {
    label: "به ندرت",
    value: 3,
  },
  {
    label: "هرگز",
    value: 4,
  },
];

export const testStructure: entityTypes.ITestStructure = {
  id: "HISD",
  title: {
    fa: "شاخص تمایل جنسی هالبرت",
    en: "Hullbert Index of Sexual Desire (HISD)",
  },
  minutesToFill: 10,
  shortName: "HISD",
  description: "",
  fields: {
    "1": {
      question:
        "حتی فکر کردن درباره رابطه جنسی با همسرم می تواند مرا تحریک کند.",
      questionHint: undefined,
      choices,
    },
    "2": {
      question:
        "سعی می کنم از موقعیت هایی که همسرم را به رابطه جنسی متمایل می کند، بپرهیزم.",
      questionHint: undefined,
      choices,
    },
    "3": {
      question: "درباره رابطه جنسی خیال پردازی می کنم.",
      questionHint: undefined,
      choices,
    },
    "4": {
      question: "از لحاظ جنسی به سختی تحریک می شوم.",
      questionHint: undefined,
      choices,
    },
    "5": {
      question: "در مقایسه با همسرم، خواهان رابطه جنسی بیشتری هستم.",

      questionHint: undefined,
      choices,
    },
    "6": {
      question: "رویاپردازی درباره مسائل جنسی برایم مشکل است.",
      questionHint: undefined,
      choices,
    },
    "7": {
      question: "میل دارم با همسرم رابطه جنسی برقرار کنم.",
      questionHint: undefined,
      choices,
    },
    "8": {
      question: "تمایل بسیار زیادی به رابطه جنسی دارم.",
      questionHint: undefined,
      choices,
    },
    "9": {
      question: "از خیال پردازی جنسی در طی رابطه جنسی با همسرم لذت می برم.",
      questionHint: undefined,
      choices,
    },
    "10": {
      question: "از لحاظ جنسی به اسانی تحریک می شوم.",
      questionHint: undefined,
      choices,
    },
    "11": {
      question: "تمایل من به رابطه جنسی باید قوی تر شود.",
      questionHint: undefined,
      choices,
    },
    "12": {
      question: "فکر کردن درباره رابطه جنسی برای من لذت بخش است.",

      questionHint: undefined,
      choices,
    },
    "13": {
      question: "خواهان برقراری رابطه جنسی هستم.",
      questionHint: undefined,
      choices,
    },
    "14": {
      question:
        "برایم آسان است هفته ها بدون داشتن رابطه جنسی با همسرم سپری کنم.",
      questionHint: undefined,
      choices,
    },
    "15": {
      question: "برای داشتن رابطه جنسی با همسرم از انگیزه کمی برخوردارم.",
      questionHint: undefined,
      choices,
    },
    "16": {
      question: "احساس می کنم نسبت به اکثر مردم، خواهان رابطه جنسی کمتری هستم.",
      questionHint: undefined,
      choices,
    },
    "17": {
      question:
        "به راحتی می توانم درباره مسائل جنسی در ذهن خود خیال پردازی کنم.",
      questionHint: undefined,
      choices,
    },
    "18": {
      question: "غریزه جنسی من قوی است.",
      questionHint: undefined,
      choices,
    },
    "19": {
      question: "از فکر رابطه جنسی با همسرم لذت می برم.",
      questionHint: undefined,
      choices,
    },
    "20": {
      question: "تمایل زیادی به برقراری رابطه جنسی با همسرم دارم.",
      questionHint: undefined,
      choices,
    },
    "21": {
      question:
        "احساس می کنم داشتن رابطه جنسی با همسرم، جنبه مهمی از روابط ما نیست.",
      questionHint: undefined,
      choices,
    },
    "22": {
      question:
        "فکر می کنم توان من برای داشتن رابطه جنسی با همسرم بسیار پایین است.",
      questionHint: undefined,
      choices,
    },
    "23": {
      question: "از لحاظ جنسی به آسانی تحریک پذیر نیستم.",
      questionHint: undefined,
      choices,
    },
    "24": {
      question: "تمایل من به برقراری رابطه جنسی با همسرم اندک است.",
      questionHint: undefined,
      choices,
    },
    "25": {
      question: "سعی می کنم از داشتن رابطه جنسی با همسرم بپرهیزم.",
      questionHint: undefined,
      choices,
    },
  },
};
