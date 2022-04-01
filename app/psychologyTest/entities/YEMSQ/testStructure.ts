import { entityTypes } from "../../types";

const choices = [
  {
    label: "کاملا غلط",
    value: 1,
  },
  {
    label: "تقریبا غلط",
    value: 2,
  },
  {
    label: "نظری ندارم",
    value: 3,
  },
  {
    label: "اندکی درست",
    value: 4,
  },
  {
    label: "تقریبا درست",
    value: 5,
  },
  {
    label: "کاملا درست",
    value: 6,
  },
];

export const testStructure: entityTypes.ITestStructure = {
  id: "YEMSQ",
  title: {
    fa: "پرسش نامه طرحواره های ناسازگار اولیه یانگ",
    en: "Young Early Maladaptive Schema Questionnaire (YEMSQ)",
  },
  chartType: ["line", "pie"],
  minutesToFill: 60,
  shortName: "YEMSQ",
  description: "",
  fields: {
    "1": {
      question:
        "اغلب کسی را نداشته ام که از من حمایت کند. حرفهایش را با من بزند و عمیقا نگران اتفاقاتی باشد که برایم می افتد.",
      questionHint: undefined,
      choices,
    },
    "2": {
      question: "به طورکلی کسی نبوده که به من عاطفه، محبت و صداقت نشان دهد.",
      questionHint: undefined,
      choices,
    },
    "3": {
      question:
        "در بیشتر اوقات زندگی، این احساس به من دست نداد که برای فرد دیگری، شخص ویژه و ممتازی به شمار می روم.",
      questionHint: undefined,
      choices,
    },
    "4": {
      question:
        " در اغلب اوقات کسی را نداشتم که به درد و دل من گوش دهد، مرا بفهمد یا این که احساس ها و نیازهای واقعی مرا درک کند.",
      questionHint: undefined,
      choices,
    },
    "5": {
      question:
        "وقتی که نمی دانستم کاری را چگونه انجام دهم، به ندرت شخصی پیدا می شد که مرا نصیحت و راهنمایی کند.",
      questionHint: undefined,
      choices,
    },
    "6": {
      question:
        "من به افراد نزدیک خودم خیلی وابسته ام چون می ترسم مرا رها کنند.",
      questionHint: undefined,
      choices,
    },
    "7": {
      question: "آن قدر به دیگران نیازمندم که نگران از دست دادن آنها هستیم",
      questionHint: undefined,
      choices,
    },
    "8": {
      question:
        "نگرانم از این که افرادی که به من نزدیک اند مرا ترک و رها کنند.",
      questionHint: undefined,
      choices,
    },
    "9": {
      question:
        "وقتی احساس می کنم کسی که برایم مهم است، از من دوری می کند، مأیوس می شوم.",
      questionHint: undefined,
      choices,
    },
    "10": {
      question:
        "بعضی اوقات آنقدر نگران آن هستم که مردم مرا ترک کنند که آن ها را از خودم می رانم.",
      questionHint: undefined,
      choices,
    },
    "11": {
      question: "احساس میکنم مردم از من سودجویی می کنند.",
      questionHint: undefined,
      choices,
    },
    "12": {
      question:
        "احساس می کنم باید در حضور دیگران از خودم محافظت کنم، چون فکر می کنم در غیر این صورت به من آسیب می زنند.",
      questionHint: undefined,
      choices,
    },
    "13": {
      question: "دیگران دیر یا زود به من خیانت می کنند.",
      questionHint: undefined,
      choices,
    },
    "14": {
      question: "نسبت به انگیزه های دیگران سوءظن شدید دارم.",
      questionHint: undefined,
      choices,
    },
    "15": {
      question: "معمولا به طور جدی به انگیزه های نهانی مردم فکر می کنم.",
      questionHint: undefined,
      choices,
    },
    "16": {
      question: "فکر می کنم وصله ناجور اجتماع هستم.",
      questionHint: undefined,
      choices,
    },
    "17": {
      question: "اساسا با بقیه خیلی فرق دارم.",
      questionHint: undefined,
      choices,
    },
    "18": {
      question: "نمی توانم به کسی تعلق خاطر داشته باشم، انسان گوشه گیری هستم.",
      questionHint: undefined,
      choices,
    },
    "19": {
      question: "احساس می کنم از مردم بیگانه هستم.",
      questionHint: undefined,
      choices,
    },
    "20": {
      question: "همیشه احساس می کنم در بین افراد گروه، جایی ندارم.",
      questionHint: undefined,
      choices,
    },
    "21": {
      question:
        "مردان یا زنانی که دوستشان دارم، وقتی نقاط ضعف مرا می بینند، دیگر دوستم ندارند.",
      questionHint: undefined,
      choices,
    },
    "22": {
      question:
        "اگر کسی واقعا مرا بشناسد، دوست ندارد با من رابطه نزدیک برقرار کند.",
      questionHint: undefined,
      choices,
    },
    "23": {
      question: "لیاقت عشق، احترام و توجه دیگران را ندارم.",
      questionHint: undefined,
      choices,
    },
    "24": {
      question: "احساس می کنم هیچ کس مرا دوست ندارد.",
      questionHint: undefined,
      choices,
    },
    "25": {
      question:
        "در بسیاری جنبه ها، بیش از حد معمول ناپذیرفتنی هستم که بتوانم خودم را به دیگران نشان دهم.",
      questionHint: undefined,
      choices,
    },
    "26": {
      question: "تقریبا هیچ کاری را نمی توانم به خوبی دیگران انجام دهم.",
      questionHint: undefined,
      choices,
    },
    "27": {
      question: "وقتی به موفقیت نزدیک میشوم از درون احساس بی کفایتی می کنم.",
      questionHint: undefined,
      choices,
    },
    "28": {
      question: "بیشتر مردم در حوزه های شغلی و کاری از من تواناترند.",
      questionHint: undefined,
      choices,
    },
    "29": {
      question: "نمی توانم مانند اغلب مردم در کارهایم با استعداد باشم .",
      questionHint: undefined,
      choices,
    },
    "30": {
      question: "در کار یا تحصیل مثل بقیه باهوش نیستم.",
      questionHint: undefined,
      choices,
    },
    "31": {
      question:
        "احساس می کنم نمی توانم به تنهایی از پس کارهای زندگی روزمره ام بربیایم.",
      questionHint: undefined,
      choices,
    },
    "32": {
      question: "فکر می کنم در انجام کارهای روزمره، آدم وابسته ای هستم.",
      questionHint: undefined,
      choices,
    },
    "33": {
      question: "فاقد عقل سلیم هستم.",
      questionHint: undefined,
      choices,
    },
    "34": {
      question: "اصلا به قضاوت های خودم در موقعیت های روزمره، اعتماد ندارم.",
      questionHint: undefined,
      choices,
    },
    "35": {
      question:
        "احساس می کنم نمی توانم به تنهایی گلیم خود را از آب بیرون بکشم. ",
      questionHint: undefined,
      choices,
    },
    "36": {
      question:
        "نمی توانم از شر این احساس رها شوم که اتفاق بدی می خواهد بیفتد.",
      questionHint: undefined,
      choices,
    },
    "37": {
      question:
        "احساس می کنم هر لحظه ممکن است یک فاجعه طبیعی، جنایی، حقوقی با پزشکی برایم اتفاق بیفتد.",
      questionHint: undefined,
      choices,
    },
    "38": {
      question: "می ترسم مورد حمله قرار بگیرم.",
      questionHint: undefined,
      choices,
    },
    "39": {
      question: "می ترسم تمام سرمایه خود را از دست بدهم و بیچاره شوم.",
      questionHint: undefined,
      choices,
    },
    "40": {
      question:
        "اغلب نگرانم دچار سکته قلبی بشوم، حتی وقتی دلایل پزشکی کمی برای این احتمال وجود دارد.",
      questionHint: undefined,
      choices,
    },
    "41": {
      question:
        "قادر نیستم از والدینم جدا شوم. کاری که هم سن و سال هایم انجام می دهند.",
      questionHint: undefined,
      choices,
    },
    "42": {
      question:
        "من و والدینم تمایل داریم خود را بیش از حد در مشکلات یکدیگر درگیر کنیم.",
      questionHint: undefined,
      choices,
    },
    "43": {
      question:
        "برای من و والدینم بسیار سخت است که بدون داشتن احساس گناه یا خیانت، مسائل جزئی خصوصی خود را از یکدیگر پنهان کنیم.",
      questionHint: undefined,
      choices,
    },
    "44": {
      question:
        "اغلب احساس می کنم که انگار والدینم در من زندگی می کنند. من نمی توانم یک زندگی جداگانه برای خودم داشته باشم.",
      questionHint: undefined,
      choices,
    },
    "45": {
      question: "اغلب احساس می کنم هویت جداگانه ای از والدین و همسرم ندارم.",
      questionHint: undefined,
      choices,
    },
    "46": {
      question:
        "فکر می کنم اگر کاری را بکنم که دلم می خواهد، برای خودم دردسر درست می کنم.",
      questionHint: undefined,
      choices,
    },
    "47": {
      question:
        "احساس می کنم چاره ای ندارم جز این که به خواسته های دیگران تن بدهم، چون در غیر این صورت مرا ترک می کنند یا درصدد تلافی بر می آیند.",
      questionHint: undefined,
      choices,
    },
    "48": {
      question: "در روابطم، به دیگران اجازه می دهم که بر من مسلط شوند.",
      questionHint: undefined,
      choices,
    },
    "49": {
      question:
        "همیشه به دیگران اجازه داده ام به جای من تصمیم بگیرند. در نتیجه من واقعا نمیدانم چه میخواهم.",
      questionHint: undefined,
      choices,
    },
    "50": {
      question:
        "خیلی برایم مشکل است از دیگران تقاضا کنم حقوقم را رعایت کنند و احساساتم را درک کنند.",
      questionHint: undefined,
      choices,
    },
    "51": {
      question: "مراقبت از نزدیکانم روش و کار من است.",
      questionHint: undefined,
      choices,
    },
    "52": {
      question:
        "آدم خوبی هستم، چون بیش از آن که به فکر خودم باشم، به فکر دیگرانم.",
      questionHint: undefined,
      choices,
    },
    "53": {
      question:
        "مهم نیست که چقدر سرم شلوغ است، من همیشه می توانم وقتی را برای دیگران کنار بگذارم.",
      questionHint: undefined,
      choices,
    },
    "54": {
      question: "همیشه سنگ صبور مشکلات دیگران بوده ام.",
      questionHint: undefined,
      choices,
    },
    "55": {
      question:
        "دیگران نظرشان این است که من برای دیگران خیلی کار می کنم، ولی برای خودم کاری انجام نمی دهم.",
      questionHint: undefined,
      choices,
    },
    "56": {
      question:
        "از این که احساسات مثبتم (مثل محبت و توجه) را به دیگران نشان بدهم، خیلی خجالت می کشم.",
      questionHint: undefined,
      choices,
    },
    "57": {
      question: "برای من خیلی سخت است که احساساتم را نزد دیگران بروز دهم.",
      questionHint: undefined,
      choices,
    },
    "58": {
      question: "برای من خیلی سخت است که راحت و خودانگیخته عمل کنم.",
      questionHint: undefined,
      choices,
    },
    "59": {
      question:
        "آن قدر خودم را کنترل می کنم که مردم فکر می کنند آدم بی احساسی هستم.",
      questionHint: undefined,
      choices,
    },
    "60": {
      question: "مردم نظرشان این است که من عصبی و ناراحتم.",
      questionHint: undefined,
      choices,
    },
    "61": {
      question:
        "باید در هر کاری که انجام می دهم بهترین باشم، نمی توانم توقعم را کم کنم.",
      questionHint: undefined,
      choices,
    },
    "62": {
      question:
        "سعی می کنم نهایت تلاش خود را بکنم، این که کار تا حدودی خوب باشد، هیچ گاه راضی ام نمی کند.",
      questionHint: undefined,
      choices,
    },
    "63": {
      question: "باید به تمام مسئولیتهایم عمل کنم.",
      questionHint: undefined,
      choices,
    },
    "64": {
      question:
        "احساس می کنم برای پیشرفت و دستیابی به خواسته های خود همواره تحت فشار هستم.",
      questionHint: undefined,
      choices,
    },
    "65": {
      question:
        "وقتی که کاری اشتباه انجام می دهم، نمی توانم خودم را ببخشم یا برای اشتباهم بهانه تراشی کنم.",
      questionHint: undefined,
      choices,
    },
    "66": {
      question: "وقتی از کسی چیزی می خواهم، خیلی برایم سخت است 'نه' بشنوم.",
      questionHint: undefined,
      choices,
    },
    "67": {
      question:
        "آدم خاصی هستم و نمی توانم محدودیت هایی که بر سر راه مردم وجود دارد را بپذیرم.",
      questionHint: undefined,
      choices,
    },
    "68": {
      question:
        "از این که مرا محدود کنند و نگذارند کاری که می خواهم انجام دهم متنفرم.",
      questionHint: undefined,
      choices,
    },
    "69": {
      question:
        "احساس می کنم نباید از قانونها و قراردادهای بهنجاری که مردم تابع آنها هستند، اطاعت کنم.",
      questionHint: undefined,
      choices,
    },
    "70": {
      question:
        "احساس می کنم کاری که من باید بکنم ارزشمندتر از کارهای دیگران است.",
      questionHint: undefined,
      choices,
    },
    "71": {
      question:
        "نمی توانم برای انجام تمام و کمال وظایف معمول یا خسته کننده، نظم و انضباط خاصی داشته باشم.",
      questionHint: undefined,
      choices,
    },
    "72": {
      question:
        "اگر به یکی از اهدافم نرسم زود مأيوس میشوم و دست از کار می کشم.",
      questionHint: undefined,
      choices,
    },
    "73": {
      question: "برای من خیلی سخت است که رضایت آنی را فدای خوشحالی آتی کنم.",
      questionHint: undefined,
      choices,
    },
    "74": {
      question:
        "نمی توانم به خودم فشار بیاورم که کارهایی که برایم خوشایند نیستند، انجام دهم، حتى وقتی می دانم نتایج خوبی در پیش دارند.",
      questionHint: undefined,
      choices,
    },
    "75": {
      question: "به ندرت توانسته ام به تصمیم خودم پایبند باشم.",
      questionHint: undefined,
      choices,
    },
  },
};
