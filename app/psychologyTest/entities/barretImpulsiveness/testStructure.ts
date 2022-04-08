import type { entityTypes } from "../../types";

const choices = [
  {
    label: "هرگز",
    value: 1,
  },
  {
    label: "به ندرت",
    value: 2,
  },
  {
    label: "اکثر اوقات",
    value: 3,
  },
  {
    label: "همیشه",
    value: 4,
  },
];

export const testStructure: entityTypes.ITestStructure = {
  id: "barretImpulsiveness",
  title: {
    fa: "پرسشنامه تکانشگری بارت",
    en: "Barratt Impulsiveness Scale (BIS)",
  },
  minutesToFill: 15,
  chartType: ["pie"],
  shortName: "BIS",
  description:
    "پرسشنامه تکانشگری توسط بارات (1959)،  ساخته شد. بارات در نسخه یازدهم پرسشنامه  BIS-11 تکانشگری را بر پایه سه محور ذیل توضیح می دهد: 1- خود حرکتی  به مفهوم عمل کردن بدون فکر، 2- برنامه ریزی با دقت  و یا توجه به جزئیات و 3- ثبات سازگاری  به معنی توانایی آینده نگری فرد. این مقیاس سه عامل تکانشگری شناختی ، تکانشگری حرکتی  و بی برنامه گی  را ارزیابی می کند.  این مقیاس 30 سوال دارد. گزینه ها با مقیاس چهار درجه ای لیکرت نمره گذاری می شوند ( به ندرت/ هرگز (امتیاز 1) و تقریبا / همیشه (امتیاز 4)). این مقیاس ده سوال منفی دارد که به صورت معکوس نمره گذاری می شوند. ",
  fields: {
    "1": {
      question: "کارهایم را با دقت برنامه ریزی میکنم.",
      questionHint: undefined,
      choices,
    },
    "2": {
      question: "کارهایم را بدون فکر انجام می دهم.",
      questionHint: undefined,
      choices,
    },
    "3": {
      question: "من سریع تصمیم می گیرم.",
      questionHint: undefined,
      choices,
    },
    "4": {
      question: "بنظر من هرچه پیش آید، خوش آید.",
      questionHint: undefined,
      choices,
    },
    "5": {
      question: "من آدم کم توجهی هستم.",
      questionHint: undefined,
      choices,
    },
    "6": {
      question: "افکار مختلف در ذهنم به سرعت می روند و می آیند.",
      questionHint: undefined,
      choices,
    },
    "7": {
      question: "مدتها قبل از مسافرت رفتن، در مورد سفرم برنامه ریزی میکنم.",
      questionHint: undefined,
      choices,
    },
    "8": {
      question: "من آدم خودداری هستم.",
      questionHint: undefined,
      choices,
    },
    "9": {
      question: "من به راحتی حواسم پرت می شود.",
      questionHint: undefined,
      choices,
    },
    "10": {
      question: " من به طور منظم پس انداز می کنم.",
      questionHint: undefined,
      choices,
    },
    "11": {
      question: "سر نمایش ها یا سخنرانی ها بی تابم و دائما پیچ و تاب می خورم.",
      questionHint: undefined,
      choices,
    },
    "12": {
      question: "من درباره مسائل مختلف به دقت فکر می کنم.",
      questionHint: undefined,
      choices,
    },
    "13": {
      question: "من به فکر حف ظ شغل خود هستم.",
      questionHint: undefined,
      choices,
    },
    "14": {
      question: "من بدون فکر حرف می زنم.",
      questionHint: undefined,
      choices,
    },
    "15": {
      question: "دوست دارم راجع به مسائل پیچیده فکر کنم.",
      questionHint: undefined,
      choices,
    },
    "16": {
      question: "دوست داردم مرتب شغلم را تغییر دهم.",
      questionHint: undefined,
      choices,
    },
    "17": {
      question: "بالفاصله و بدون فکر کردن در یک لحظه عمل میکنم.",
      questionHint: undefined,
      choices,
    },
    "18": {
      question: "وقتی میخواهم برای حل مسائل فکر کنم، زود خسته میشوم.",
      questionHint: undefined,
      choices,
    },
    "19": {
      question: "من بدون فکر قبلی در لحظه عمل می کنم.",
      questionHint: undefined,
      choices,
    },
    "20": {
      question: "من افکار پیوسته و منظمی دارم.",
      questionHint: undefined,
      choices,
    },
    "21": {
      question: "من دوست دارم محل زندگی ام را مرتبا عوض کنم.",
      questionHint: undefined,
      choices,
    },
    "22": {
      question: "من بدون تامل خرید می کنم.",
      questionHint: undefined,
      choices,
    },
    "23": {
      question: "من در آن واحد می توانم فقط به یک موضوع فکر می کنم.",
      questionHint: undefined,
      choices,
    },
    "24": {
      question: "من سر گر می هایم را مرتبا تغییر می دهم.",
      questionHint: undefined,
      choices,
    },
    "25": {
      question: "بیشتر از آنچه در آمد دارم، خرج می کنم.",
      questionHint: undefined,
      choices,
    },
    "26": {
      question: "وقتی به موضوعی فکر می کنم، افکار مزاحمی به ذهنم می آیند.",
      questionHint: undefined,
      choices,
    },
    "27": {
      question: "بیشتر به حال عالقه دارم تا آینده.",
      questionHint: undefined,
      choices,
    },
    "28": {
      question: "در هنگام سخنرانی ها احساس بی قراری می کنم.",
      questionHint: undefined,
      choices,
    },
    "29": {
      question: "من معما حل کردن را دوست دارم.",
      questionHint: undefined,
      choices,
    },
    "30": {
      question: "برای آینده برنامه ریزی میکنم.",
      questionHint: undefined,
      choices,
    },
  },
};
