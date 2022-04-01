import { entityTypes } from "../../types";

const choices = [
  {
    label: "همیشه",
    value: 1,
  },
  {
    label: "اکثرا",
    value: 2,
  },
  {
    label: "گاهی",
    value: 3,
  },
  {
    label: "به ندرت",
    value: 4,
  },
  {
    label: "هرگز",
    value: 5,
  },
];

export const testStructure: entityTypes.ITestStructure = {
  id: "HISA",
  title: {
    fa: "شاخص احقاق جنسی هالبرت",
    en: "Hulbert Index of Sexual Assertiveness (HISA)",
  },
  chartType: ["line"],
  minutesToFill: 5,
  shortName: "HISA",
  description: ` این پرسشنامه یک آزمون با پاسخ های درست و غلط نیست . لطفا هر یک از جملات زیر را با دقت بخوانید و به تمام آن ها ، حتی با وجود عدم اطمینان کافی پاسخ دهید. برای هرجمله پاسخ های "همیشه" ، "اکثرا" ، "گاهی اوقات" ، " بندرت" و "هرگز" در نظر گرفته شده است. اطفا گزینه ای را که بهتر و دقیق تر بیانگر تمایل جنسی شماست، انتخاب کنید . و پاسخ انتخابی خود را با علامت * مشخص کنید . پاسخ های شما کاملا محرمانه است.`,
  fields: {
    "1": {
      question: "در طول رابطه جنسی از صحبت کردن ناراحت می شوم .",
      questionHint: undefined,
      choices,
    },
    "2": {
      question: "احساس می کنم در روابط جنسی خجالتی هستم.",
      questionHint: undefined,
      choices,
    },
    "3": {
      question: "هرگاه تمایلی به رابطه جنسی داشته باشم، به همسرم ابراز می کنم.",
      questionHint: undefined,
      choices,
    },
    "4": {
      question: "فکر می کنم درباره نیازهای جنسی خودم با همسرم بی پرده هستم.",
      questionHint: undefined,
      choices,
    },
    "5": {
      question: "از در میان گذاشتن تخیلات جنسی خود با همسرم لذت می برم.",

      questionHint: undefined,
      choices,
    },
    "6": {
      question: "راحت نیستم در مورد رابطه جنسی با دوستانم صحبت کنم.",
      questionHint: undefined,
      choices,
    },
    "7": {
      question: "تمایلات جنسی خود را برای همسرم بیان می کنم.",
      questionHint: undefined,
      choices,
    },
    "8": {
      question: "برایم سخت است که در طی یک رابطه جنسی با دوستانم صحبت کنم.",
      questionHint: undefined,
      choices,
    },
    "9": {
      question:
        "برای من نه گفتن ، حتی موقعی که تمایلی به رابطه جنسی ندارم، سخت است.",
      questionHint: undefined,
      choices,
    },
    "10": {
      question: "از توصیف خود به عنوان یک فرد سکسی اکراه دارم.",
      questionHint: undefined,
      choices,
    },
    "11": {
      question:
        "برایم سخت است که به همسرم بگویم چه چیزی در من احساس خوشایندی ایجاد می کند.",
      questionHint: undefined,
      choices,
    },
    "12": {
      question: "به راحتی درباره احساسات جنسی خودم صحبت می کنم.",

      questionHint: undefined,
      choices,
    },
    "13": {
      question: "اصراری ندارم که همسرم مرا ارضا کند.",
      questionHint: undefined,
      choices,
    },
    "14": {
      question: "هنگامی که واقعا خواهان رابطه جنسی نیستم، به آن تن می دهم.",
      questionHint: undefined,
      choices,
    },
    "15": {
      question: "هرگاه شیوه ای لذت بخش نباشد، آن را با همسرم در میان می گذارم.",
      questionHint: undefined,
      choices,
    },
    "16": {
      question: "به راحتی به همسرم پاداش های جنسی می دهم.",
      questionHint: undefined,
      choices,
    },
    "17": {
      question: "برایم آسان است درباره رابطه جنسی با همسرم بحث کنم.",

      questionHint: undefined,
      choices,
    },
    "18": {
      question: "به راحتی رابطه جنسی با همسرم را آغاز می کنم.",
      questionHint: undefined,
      choices,
    },
    "19": {
      question: "اعمال جنسی را که به آن ها راغب نیستم، انجام می دهم.",
      questionHint: undefined,
      choices,
    },
    "20": {
      question: "ارضاء همسرم از ارضاء خودم مهمتر است.",
      questionHint: undefined,
      choices,
    },
    "21": {
      question: "به راحتی به همسرم می گویم که مرا چگونه لمس کند.",
      questionHint: undefined,
      choices,
    },
    "22": {
      question: "از استمنای خود تا رسیدن به اوج لذت جنسی لذت می برم.",
      questionHint: undefined,
      choices,
    },
    "23": {
      question:
        "چنانچه عملی احساس خوشایندی در من ایجاد کند، در انجام مجدد آن اصرار می ورزم.",
      questionHint: undefined,
      choices,
    },
    "24": {
      question: "برایم سخت است که درباره احساسات جنسی خود صادق باشم.",
      questionHint: undefined,
      choices,
    },
    "25": {
      question: "تلاش می کنم از بحث درباره موضوعات جنسی بپرهیزم.",
      questionHint: undefined,
      choices,
    },
  },
};
