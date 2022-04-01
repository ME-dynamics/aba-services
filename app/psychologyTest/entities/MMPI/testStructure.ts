import { entityTypes } from "../../types";

const choices = [
  {
    label: "غلط",
    value: 0,
  },
  {
    label: "درست",
    value: 1,
  },
];
export const testStructure: entityTypes.ITestStructure = {
  id: "MMPI",
  title: {
    fa: "پرسشنامه چند جنبه ای شخصیتی مینه سوتا",
    en: "Minnesota Multiphasic Personality Inventory",
  },
  shortName: "MMPI",
  description:
    " مشهورترین و پرمصرف‌ترین آزمون شخصیتی برای سلامت روانی است که سال ۱۹۳۰ منتشر شد. پرسش‌های این آزمون جملاتی اِخباری هستند که فرد باید موافقت یا مخالفت خود را با آن‌ها اعلام کند. از آنجا که MMPI، پرسشنامهٔ پیچیده‌ای است، پیامدهای سوء تفسیر آن بسیار زیان‌بار است. به همین جهت استفاده از آن مستلزم وجود اجراکنندگان آموزش‌دیده و باتجربه‌است. توصیه شده‌است که این آزمون از سوی پرسنل مدارس مورد استفاده قرار نگیرد. هدف از اجرای این تست، شناخت شخصیت افراد است. با شناخت شخصیت افراد می توان به طرز رفتار آن‌ها ، مشکلات اجتماعی ، ناسازگاری‌ها و اختلالات پی برد.  بررسی و تحلیل این تست می تواند اطلاعات بسیار مفید و با ارزشی در اختیار روانشناسان قرار دهد و روانشناسان با کمک این اطلاعات به درمان این گونه اختلالات بیماران خود بپردازند. اجرای این تست کاربرد های بسیار فراوانی دارد .",
  minutesToFill: 50,
  chartType: ["line"],
  fields: {
    "1": {
      question: "مجله هاي فني را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "2": {
      question: "اشتهاي خوبي دارم .",
      choices,
      questionHint: undefined,
    },
    "3": {
      question: "بيشتر صبحها سرحال و با نشاط از خواب بر مي خيزم .",
      choices,
      questionHint: undefined,
    },
    "4": {
      question: "كار كتابداري را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "5": {
      question: "با كوچكترين صدايي از خواب بيدار مي شوم .",
      choices,
      questionHint: undefined,
    },
    "6": {
      question:
        "پدرم مرد خوبي است ، يا ( اكر پدرتان مرده است ) پدرم مرد خوبي بود .",
      choices,
      questionHint: undefined,
    },
    "7": {
      question: "خواندن بخش حوادث روزنامه ها را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "8": {
      question: 'معمولا" حرارت دست و پايم در حد طبيعي است .',
      choices,
      questionHint: undefined,
    },
    "9": {
      question: "زندگي روزانه من پر ازچيزهايي است كه برايم جالبند .",
      choices,
      questionHint: undefined,
    },
    "10": {
      question: 'تقريبا" به اندازه سابق قادر به كار كردن هستم .',
      choices,
      questionHint: undefined,
    },
    "11": {
      question: "اغلب اوقات احساس مي كنم چيزي گلويم را گرفته است .",
      choices,
      questionHint: undefined,
    },
    "12": {
      question: "از زندگي جنسي ام راضي هستم .",
      choices,
      questionHint: undefined,
    },
    "13": {
      question:
        "مردم بايد سعي كنند خوابهاي خود را تعبيركرده وبه آنها عمل كنند .",
      choices,
      questionHint: undefined,
    },
    "14": {
      question: "از داستانهاي پليسي و اسرار آميز خوشم مي آيد .",
      choices,
      questionHint: undefined,
    },
    "15": {
      question: "در محيط كارم فشار و ناراحتي زيادي احساس مي كنم .",
      choices,
      questionHint: undefined,
    },
    "16": {
      question:
        "گاهي اوقات فكرهايم آنقدر بد هستند كه نمي توانم درباره آنها با كسي حرف بزنم .",
      choices,
      questionHint: undefined,
    },
    "17": {
      question: "معتقدم كه زندگي با من خوب رفتار نكرده است .",
      choices,
      questionHint: undefined,
    },
    "18": {
      question: "تهوع و استفراغ آزارم مي دهد .",
      choices,
      questionHint: undefined,
    },
    "19": {
      question: "دوست دارم بفهمم ديگران درباره من چه فكر مي كنند .",
      choices,
      questionHint: undefined,
    },
    "20": {
      question: "خيلي كم دچار يبوست مي شوم .",
      choices,
      questionHint: undefined,
    },
    "21": {
      question: "گاهي اوقات خيلي دلم مي خواهد از خانه فرار كنم .",
      choices,
      questionHint: undefined,
    },
    "22": {
      question: "فكر مي كنم هيچكس مرا درك نمي كند .",
      choices,
      questionHint: undefined,
    },
    "23": {
      question:
        "گاهي اوقات طوري به گريه يا خنده مي افتم كه نمي توانم جلوي آن را بگيرم .",
      choices,
      questionHint: undefined,
    },
    "24": {
      question: "گاهي اوقات ارواح شيطاني مرا تسخير مي كنند .",
      choices,
      questionHint: undefined,
    },
    "25": {
      question: "دوست دارم يك خواننده باشم .",
      choices,
      questionHint: undefined,
    },
    "26": {
      question:
        "وقتي به دردسر مي افتم ، بهترين كار برايم اين است كه ساكت بمانم .",
      choices,
      questionHint: undefined,
    },
    "27": {
      question: "معتقدم كه بايد جواب بدي را با بدي داد .",
      choices,
      questionHint: undefined,
    },
    "28": {
      question: "هفته اي چند بار ناراحتي معده اذيتم مي كند .",
      choices,
      questionHint: undefined,
    },
    "29": {
      question: "گاهي اوقات دلم ميخواهد فحش بدهم .",
      choices,
      questionHint: undefined,
    },
    "30": {
      question: "هرچند شب يك بار خوابهاي وحشتناك مي بينم .",
      choices,
      questionHint: undefined,
    },
    "31": {
      question: "برايم مشكل است كه حواسم را روي يك كار متمركز كنم .",
      choices,
      questionHint: undefined,
    },
    "32": {
      question: "تجربه ها و احساسهاي عجيب و غريب خاصي داشته ام .",
      choices,
      questionHint: undefined,
    },
    "33": {
      question: "خيلي كم نگران سلامتيم مي شوم .",
      choices,
      questionHint: undefined,
    },
    "34": {
      question: "به خاطر رفتار جنسي ام هيچگاه به دردسر نيفتاده ام .",
      choices,
      questionHint: undefined,
    },
    "35": {
      question: "درگذشته گاهي چيزهايي دزديده ام .",
      choices,
      questionHint: undefined,
    },
    "36": {
      question: "اغلب اوقات سرفه مي كنم .",
      choices,
      questionHint: undefined,
    },
    "37": {
      question: "گاهي دلم ميخواهد چيزهايي را بشكنم .",
      choices,
      questionHint: undefined,
    },
    "38": {
      question:
        "گاهي روزها ، هفته ها ، يا ماهها بوده كه دست و دلم به كاري نمي رفته است .",
      choices,
      questionHint: undefined,
    },
    "39": {
      question: "خوابم نامنظم و آشفته است .",
      choices,
      questionHint: undefined,
    },
    "40": {
      question: "بيشتر اوقات سردرد كلافه ام مي كند .",
      choices,
      questionHint: undefined,
    },
    "41": {
      question: "گاهي دروغ مي گويم .",
      choices,
      questionHint: undefined,
    },
    "42": {
      question: "اگر ديگران سرم كلاه نگذاشته بودند ، موفق تر بودم .",
      choices,
      questionHint: undefined,
    },
    "43": {
      question: "قدرت قضاوت من بهتر از گذشته است .",
      choices,
      questionHint: undefined,
    },
    "44": {
      question:
        "هفته اي يك يا چند بار ، بدون هيچ علتي ، ناگهان بدنم داغ مي شود .",
      choices,
      questionHint: undefined,
    },
    "45": {
      question: "درحال حاضر وضع سلامتيم مثل بيشتر دوستانم خوب است .",
      choices,
      questionHint: undefined,
    },
    "46": {
      question:
        'معمولا" هنگام ديدن دوستان سابقم اظهار آشنايي نمي كنم ، مگر اين كه آنها پيشقدم شوند .',
      choices,
      questionHint: undefined,
    },
    "47": {
      question: 'تقريبا" هيچ وقت در قلب يا قفسه سينه ام دردي نداشته ام .',
      choices,
      questionHint: undefined,
    },
    "48": {
      question: "بيشتر به جاي پرداختن به كارهايم خيالبافي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "49": {
      question: "من فردي بسيار اجتماعي هستم .",
      choices,
      questionHint: undefined,
    },
    "50": {
      question:
        "اغلب مجبور بوده ام از كساني اطاعت كنم كه به اندازه من نمي فهميدند .",
      choices,
      questionHint: undefined,
    },
    "51": {
      question: "بعضي از مطالبي را كه در مدرسه خوانده ام به خاطر ندارم .",
      choices,
      questionHint: undefined,
    },
    "52": {
      question: "من زندگي درستي نداشته ام .",
      choices,
      questionHint: undefined,
    },
    "53": {
      question:
        "اغلب در قسمتهايي از بدنم احساس سوزش ، مورمور شدن ، يا خواب رفتگي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "54": {
      question:
        "خانواده ام با شغلي كه دارم ، يا مي خواهم انتخاب كنم موافق نيستند .",
      choices,
      questionHint: undefined,
    },
    "55": {
      question:
        "گاهي آن قدر روي چيزي پافشاري مي كنم كه ديگران تحمل خود را از دست مي دهند .",
      choices,
      questionHint: undefined,
    },
    "56": {
      question: "كمتر از ديگران احساس خوشحالي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "57": {
      question: 'معمولا" در پشت گردنم احساس درد مي كنم .',
      choices,
      questionHint: undefined,
    },
    "58": {
      question:
        "فكر مي كنم اغلب مردم براي جلب كمك و همدردي ديگران بدبختيهاي خود را بزرگتر جلوه مي دهند .",
      choices,
      questionHint: undefined,
    },
    "59": {
      question: "هرچند روز يك بار در قسمت بالاي معده ام احساس ناراحتي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "60": {
      question: "وقتي با ديگران هستم شنيدن چيزهاي خيلي عجيب آزارم مي دهد .",
      choices,
      questionHint: undefined,
    },
    "61": {
      question: "من آدم مهمي هستم .",
      choices,
      questionHint: undefined,
    },
    "62": {
      question:
        "اغلب آرزو كرده ام كاش يك دختر بودم ، يا ( اگر دختر هستيد ) هرگز از اين كه يك دختر هستم متاسف نبوده ام .",
      choices,
      questionHint: undefined,
    },
    "63": {
      question: "آدم زود رنجي نيستم .",
      choices,
      questionHint: undefined,
    },
    "64": {
      question: "از خواندن داستانهاي عاشقانه خوشم مي آيد .",
      choices,
      questionHint: undefined,
    },
    "65": {
      question: "اكثر اوقات احساس غمگيني مي كنم .",
      choices,
      questionHint: undefined,
    },
    "66": {
      question: "اگر اكثر قوانين دور ريخته مي شد ، بهتر بود .",
      choices,
      questionHint: undefined,
    },
    "67": {
      question: "شعر را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "68": {
      question: "گاهي حيوانات را اذيت مي كنم .",
      choices,
      questionHint: undefined,
    },
    "69": {
      question: "فكر مي كنم از كاري مثل جنگلباني خوشم بيايد .",
      choices,
      questionHint: undefined,
    },
    "70": {
      question: "در بحث با ديگران به آساني شكست مي خورم .",
      choices,
      questionHint: undefined,
    },
    "71": {
      question: "اين روزها دارم از رسيدن به هدفهايم نا اميد مي شوم .",
      choices,
      questionHint: undefined,
    },
    "72": {
      question: "گاهي احساس مي كنم روحم از بدنم جدا شده و به پرواز در مي آيد .",
      choices,
      questionHint: undefined,
    },
    "73": {
      question: 'واقعا" اعتماد به نفس ندارم .',
      choices,
      questionHint: undefined,
    },
    "74": {
      question: "دوست دارم يك گل فروش باشم .",
      choices,
      questionHint: undefined,
    },
    "75": {
      question: 'معمولا" احساس مي كنم زندگي با ارزش است .',
      choices,
      questionHint: undefined,
    },
    "76": {
      question: "بيشتر مردم فقط با جر و بحث فراوان حقيقت را مي پذيرند .",
      choices,
      questionHint: undefined,
    },
    "77": {
      question: "هر چند وقت يكبار ، كار امروز را به فردا موكول مي كنم .",
      choices,
      questionHint: undefined,
    },
    "78": {
      question: "بيشتر افرادي كه مرا مي شناسند ، دوستم دارند .",
      choices,
      questionHint: undefined,
    },
    "79": {
      question: "اهميتي نمي دهم كه مورد تمسخر ديگران واقع شوم .",
      choices,
      questionHint: undefined,
    },
    "80": {
      question: "دوست دارم پرستار باشم .",
      choices,
      questionHint: undefined,
    },
    "81": {
      question: "بيشتر مردم براي اين كه پيشرفت كنند دروغ مي گويند .",
      choices,
      questionHint: undefined,
    },
    "82": {
      question:
        'كارهاي زيادي انجام مي دهم كه بعدا" از انجام آنها پشيمان مي شوم . ( من بيش از ديگران پشيمان مي شوم .',
      choices,
      questionHint: undefined,
    },
    "83": {
      question: "خيلي كم با افراد خانواده ام دعوا مي كنم .",
      choices,
      questionHint: undefined,
    },
    "84": {
      question: "يك يا چند بار به علت رفتار بد از مدرسه اخراج شده ام .",
      choices,
      questionHint: undefined,
    },
    "85": {
      question: "گاهي دلم مي خواهد كارهاي خطرناك و دلهره آور انجام دهم .",
      choices,
      questionHint: undefined,
    },
    "86": {
      question:
        "ميهماني ها و كارهايي را كه پر از شادي و سروصدا است دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "87": {
      question:
        "در زندگي مشكلاتي داشته ام كه به دليل پيچيدگي زيادشان قادر به تصميم گيري درباره آنها نبوده ام .",
      choices,
      questionHint: undefined,
    },
    "88": {
      question: "معتقدم كه زنها بايد به اندازه مردها آزادي جنسي داشته باشند .",
      choices,
      questionHint: undefined,
    },
    "89": {
      question: "بيشترين گرفتاري و درگيري من با خودم است .",
      choices,
      questionHint: undefined,
    },
    "90": {
      question:
        "من پدرم را دوست دارم ، (يا اگر پدرتان مرده است) من پدرم را دوست داشتم .",
      choices,
      questionHint: undefined,
    },
    "91": {
      question: "خيلي كم دچار كشيدگي يا پرش عضلات مي شوم .",
      choices,
      questionHint: undefined,
    },
    "92": {
      question: "برايم مهم نيست كه چه بر سرم بيايد .",
      choices,
      questionHint: undefined,
    },
    "93": {
      question: "گاهي اوقات ، وقتي حالم خوب نيست ، بد اخلاق مي شوم .",
      choices,
      questionHint: undefined,
    },
    "94": {
      question: "اغلب اوقات احساس مي كنم يك كار غلط يا بد انجام داده ام .",
      choices,
      questionHint: undefined,
    },
    "95": {
      question: "اغلب اوقات خوشحال هستم .",
      choices,
      questionHint: undefined,
    },
    "96": {
      question:
        "حيوانات ، افراد ، يا چيزهايي را در اطراف خود مي بينم كه ديگران نمي بينند .",
      choices,
      questionHint: undefined,
    },
    "97": {
      question: "اغلب اوقات احساس مي كنم كه بيني ام گرفته و سرم سنگين است .",
      choices,
      questionHint: undefined,
    },
    "98": {
      question:
        "بعضي ها آن قدر امر و نهي مي كنند كه حتي وقتي حق با آنها است ، دلم مي خواهد بر خلاف خواست آنها رفتار كنم .",
      choices,
      questionHint: undefined,
    },
    "99": {
      question: "كسي به من حقه زده است .",
      choices,
      questionHint: undefined,
    },
    "100": {
      question: "هيچ وقت كار خطرناكي را به خاطر مهيج بودن آن انجام نداده ام .",
      choices,
      questionHint: undefined,
    },
    "101": {
      question: "اغلب احساس مي كنم نوار محكمي به دور سرم بسته شده است .",
      choices,
      questionHint: undefined,
    },
    "102": {
      question: "گاهي عصباني مي شوم .",
      choices,
      questionHint: undefined,
    },
    "103": {
      question:
        "اگر روي يك مسابقه يا بازي شرط بندي كنم ، از آن بيشتر لذت مي برم .",
      choices,
      questionHint: undefined,
    },
    "104": {
      question:
        "بيشتر مردم به اين دليل صداقت و درستي نشان مي دهند كه مي ترسند گرفتار شوند .",
      choices,
      questionHint: undefined,
    },
    "105": {
      question: "گاهي در مدرسه به علت رفتار بدم پيش مدير فرستاده شده ام .",
      choices,
      questionHint: undefined,
    },
    "106": {
      question:
        "حرف زدن من مثل هميشه است ( يعني ، تندتر ، آهسته تر ، درهم و برهم يا گرفته تر از قبل نيست ).",
      choices,
      questionHint: undefined,
    },
    "107": {
      question:
        "در خانه آداب غذا خوردن را بهتر رعايت مي كنم ، تا در بيرون ازخانه .",
      choices,
      questionHint: undefined,
    },
    "108": {
      question:
        "كساني كه قادر به سخت كاركردن باشند، شانس بيشتري براي موفقيت دارند.",
      choices,
      questionHint: undefined,
    },
    "109": {
      question: "فكر مي كنم به اندازه اطرافيانم ، با استعداد و زرنگ هستم .",
      choices,
      questionHint: undefined,
    },
    "110": {
      question:
        "اغلب مردم حاضرند حتي از راههاي غير عادلانه به منافع و مزايايي برسند .",
      choices,
      questionHint: undefined,
    },
    "111": {
      question: "معده ام خيلي ناراحتم مي كند .",
      choices,
      questionHint: undefined,
    },
    "112": {
      question: "تئاتر و نمايش را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "113": {
      question: "مي دانم چه كسي مسئول تمام مشكلاتم است .",
      choices,
      questionHint: undefined,
    },
    "114": {
      question:
        "گاهي وسايل شخصي ديگران ، مثل كفش و دستكش به قدري توجهم را جلب مي كند كه دوست دارم به آنها دست بزنم يا آنها را بدزدم، حتي اگر بدردم نخورد.",
      choices,
      questionHint: undefined,
    },
    "115": {
      question: "ديدن خون باعث وحشت يا بهم خوردن حالم نمي شود .",
      choices,
      questionHint: undefined,
    },
    "116": {
      question: "اغلب اوقات زود رنج و بد اخلاق هستم ، ولي علتش را نمي دانم .",
      choices,
      questionHint: undefined,
    },
    "117": {
      question: "هرگز استفراغ و سرفه همراه با خون نداشته ام .",
      choices,
      questionHint: undefined,
    },
    "118": {
      question: "نگران مريض شدن نيستم .",
      choices,
      questionHint: undefined,
    },
    "119": {
      question: "جمع آوري گلها يا پرورش گياهان خانگي را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "120": {
      question: 'معمولا" از آنچه به نظرم درست مي رسد ، به شدت دفاع مي كنم .',
      choices,
      questionHint: undefined,
    },
    "121": {
      question: "هرگز به اعمال جنسي ناپسند دست نزده ام .",
      choices,
      questionHint: undefined,
    },
    "122": {
      question:
        "گاهي افكارم به قدري سريع بوده كه نتوانسته ام آنها را بر زبان آورم .",
      choices,
      questionHint: undefined,
    },
    "123": {
      question:
        "اگر اطمينان داشتم كه كسي متوجه نخواهد شد ،بدون خريدن بليط ، وارد سينما مي شدم .",
      choices,
      questionHint: undefined,
    },
    "124": {
      question:
        "اغلب وقتي كسي كار خوبي در حق من انجام مي دهد ، از خود مي پرسم كه از اين كار چه هدفي داشته است .",
      choices,
      questionHint: undefined,
    },
    "125": {
      question:
        "معتقدم كه زندگي خانوادگي من به خوبي زندگي اغلب كساني است كه مي شناسم .",
      choices,
      questionHint: undefined,
    },
    "126": {
      question: "معتقدم كه قانون بايد با قاطعيت اجرا شود .",
      choices,
      questionHint: undefined,
    },
    "127": {
      question: "از انتقاد يا سرزنش به شدت مي رنجم .",
      choices,
      questionHint: undefined,
    },
    "128": {
      question: "آشپزي را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "129": {
      question: "رفتار اطرافيانم تاثير زيادي بر رفتار من دارد .",
      choices,
      questionHint: undefined,
    },
    "130": {
      question: 'گاهي واقعا" احساس مي كنم آدم بي مصرفي هستم .',
      choices,
      questionHint: undefined,
    },
    "131": {
      question:
        "در كودكي عضو گروهي از دوستانم بودم كه سعي مي كردند در تمام مشكلات به همديگر وفادار باشند .",
      choices,
      questionHint: undefined,
    },
    "132": {
      question: "به زندگي پس از مرگ معتقدم .",
      choices,
      questionHint: undefined,
    },
    "133": {
      question: "دوست داشتم يك سرباز باشم .",
      choices,
      questionHint: undefined,
    },
    "134": {
      question: "گاهي دوست دارم با كسي دعوا و كتك كاري كنم .",
      choices,
      questionHint: undefined,
    },
    "135": {
      question:
        "اغلب به اين دليل كه دير تصميم مي گيرم ، خيلي چيزها را از دست مي دهم.",
      choices,
      questionHint: undefined,
    },
    "136": {
      question:
        "وقتي در حال انجام كار مهمي هستم ، اگر كسي ازمن راهنمايي بخواهد يا مزاحمم شود، عصباني مي شوم.",
      choices,
      questionHint: undefined,
    },
    "137": {
      question: "زماني خاطرات روزانه ام را مي نوشتم .",
      choices,
      questionHint: undefined,
    },
    "138": {
      question: "معتقدم عليه من توطئه چيني مي شود .",
      choices,
      questionHint: undefined,
    },
    "139": {
      question: "ترجيح مي دهم در بازي برنده باشم تا بازنده .",
      choices,
      questionHint: undefined,
    },
    "140": {
      question:
        "اغلب شبها بدون اين كه افكار يا خيالاتي ناراحتم كند ، به خواب مي روم .",
      choices,
      questionHint: undefined,
    },
    "141": {
      question: "در طي چند سال گذشته ، اكثر اوقات حالم خوب بوده است .",
      choices,
      questionHint: undefined,
    },
    "142": {
      question: "هرگز دچار غش يا تشنج نشده ام .",
      choices,
      questionHint: undefined,
    },
    "143": {
      question: "وزنم كم و زياد نمي شود .",
      choices,
      questionHint: undefined,
    },
    "144": {
      question: "فكر مي كنم كساني مرا تعقيب مي كنند .",
      choices,
      questionHint: undefined,
    },
    "145": {
      question: "احساس مي كنم اغلب بي دليل مجازات شده ام .",
      choices,
      questionHint: undefined,
    },
    "146": {
      question: "به آساني به گريه مي افتم .",
      choices,
      questionHint: undefined,
    },
    "147": {
      question: "چيزهايي را كه مي خوانم به خوبي گذشته نمي فهمم .",
      choices,
      questionHint: undefined,
    },
    "148": {
      question: "در طول زندگي ، هرگز حالم بهتر از الان نبوده است .",
      choices,
      questionHint: undefined,
    },
    "149": {
      question: "گاهي احساس مي كنم به بيماري خطرناكي مبتلا شده ام .",
      choices,
      questionHint: undefined,
    },
    "150": {
      question: "گاهي احساس مي كنم كه بايد به خودم يا كس ديگري صدمه بزنم .",
      choices,
      questionHint: undefined,
    },
    "151": {
      question: "خوشم نمي آيد قبول كنم كسي زيركانه سرم را كلاه گذاشته است .",
      choices,
      questionHint: undefined,
    },
    "152": {
      question: "زود خسته نمي شوم .",
      choices,
      questionHint: undefined,
    },
    "153": {
      question:
        "دوست دارم برخي از افراد مهم را بشناسم ، چون اين كار باعث مي شود احساس كنم مهم هستم .",
      choices,
      questionHint: undefined,
    },
    "154": {
      question: "وقتي از يك جاي بلند به پايين نگاه مي كنم ، مي ترسم .",
      choices,
      questionHint: undefined,
    },
    "155": {
      question:
        "اگر يكي از افراد خانواده ام با قانون درگير شود ، عصبي نمي شوم .",
      choices,
      questionHint: undefined,
    },
    "156": {
      question: "فقط مواقعي كه به مسافرت يا گردش مي روم ، خوشحال هستم .",
      choices,
      questionHint: undefined,
    },
    "157": {
      question: "برايم مهم نيست كه ديگران درباره ام چه فكر مي كنند .",
      choices,
      questionHint: undefined,
    },
    "158": {
      question:
        "دوست ندارم در ميهمانيها دست به شيرين كاري بزنم ، حتي اگر ديگران نيز چيزي شبيه آن را انجام دهند .",
      choices,
      questionHint: undefined,
    },
    "159": {
      question: "هيچ وقت غش نكرده ام .",
      choices,
      questionHint: undefined,
    },
    "160": {
      question: "مدرسه را دوست داشتم .",
      choices,
      questionHint: undefined,
    },
    "161": {
      question:
        "خجالتي هستم ، وهميشه مجبورم كاري كنم كه ديگران متوجه اين موضوع نشوند .",
      choices,
      questionHint: undefined,
    },
    "162": {
      question: "كسي سعي مي كند مرا مسموم كند .",
      choices,
      questionHint: undefined,
    },
    "163": {
      question: "ترس شديدي از مارها ندارم .",
      choices,
      questionHint: undefined,
    },
    "164": {
      question: "هيچ وقت دچار سرگيجه نشده ام ، يا خيلي كم سرگيجه داشته ام .",
      choices,
      questionHint: undefined,
    },
    "165": {
      question: "فكر مي كنم كه حافظه ام خوب است .",
      choices,
      questionHint: undefined,
    },
    "166": {
      question: "مسائل جنسي فكرم را آزار مي دهد .",
      choices,
      questionHint: undefined,
    },
    "167": {
      question: "گفتگو با غريبه ها برايم مشكل است .",
      choices,
      questionHint: undefined,
    },
    "168": {
      question:
        'آشنايانم مي گويند در مواقعي كارهايي مي كنم كه بعدا" نمي توانم آنها را به خاطر بياورم .',
      choices,
      questionHint: undefined,
    },
    "169": {
      question: "وقتي خسته مي شوم دوست دارم دست به كاري هيجان آور بزنم .",
      choices,
      questionHint: undefined,
    },
    "170": {
      question: "مي ترسم عقلم را از دست بدهم .",
      choices,
      questionHint: undefined,
    },
    "171": {
      question: "با پول دادن به گداها مخالفم .",
      choices,
      questionHint: undefined,
    },
    "172": {
      question:
        "بارها متوجه شده ام كه وقتي سرگرم انجام كاري هستم ، دستم مي لرزد .",
      choices,
      questionHint: undefined,
    },
    "173": {
      question: "مي توانم مدتي طولاني مطالعه كنم ، بدون اين كه چشمم خسته شود .",
      choices,
      questionHint: undefined,
    },
    "174": {
      question: "مطالعه و خواندن مطالبي در مورد كارم را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "175": {
      question: "بيشتر اوقات در تمام وجودم احساس ضعف مي كنم .",
      choices,
      questionHint: undefined,
    },
    "176": {
      question: "خيلي كم دچار سردرد مي شوم .",
      choices,
      questionHint: undefined,
    },
    "177": {
      question: "از دقت و مهارت دستهايم كاسته نشده است .",
      choices,
      questionHint: undefined,
    },
    "178": {
      question:
        "گاهي موقع دستپاچه شدن خيس عرق مي شوم ، و اين موضوع خيلي ناراحتم مي كند .",
      choices,
      questionHint: undefined,
    },
    "179": {
      question: "هنگام راه رفتن ، در حفظ تعادلم مشكلي نداشته ام .",
      choices,
      questionHint: undefined,
    },
    "180": {
      question: "ذهنم خوب كار نمي كند .",
      choices,
      questionHint: undefined,
    },
    "181": {
      question: "من دچار تب يونجه يا حملات آسم نمي شوم .",
      choices,
      questionHint: undefined,
    },
    "182": {
      question:
        "اوقاتي برايم پيش آمده كه در طي آن بر روي حركات و صحبت كردنم كنترلي نداشتم ، ولي از آنچه در اطرافم مي گذشت ، آگاه بودم .",
      choices,
      questionHint: undefined,
    },
    "183": {
      question: "برخي از افرادي را كه مي شناسم دوست ندارم .",
      choices,
      questionHint: undefined,
    },
    "184": {
      question: "خيلي كم خيالبافي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "185": {
      question: "كاش اين قدر خجالتي نبودم .",
      choices,
      questionHint: undefined,
    },
    "186": {
      question: "از سر و كار داشتن با پول نمي ترسم .",
      choices,
      questionHint: undefined,
    },
    "187": {
      question:
        "اگر خبرنگار بودم ، خيلي دوست داشتم كه اخبار مربوط به تئاتر را گزارش كنم .",
      choices,
      questionHint: undefined,
    },
    "188": {
      question: "از بسياري از بازيها و سرگرميها لذت مي برم .",
      choices,
      questionHint: undefined,
    },
    "189": {
      question: "از لاس زدن خوشم مي آيد .",
      choices,
      questionHint: undefined,
    },
    "190": {
      question:
        "اطرافيانم با من بيشتر مثل يك بچه رفتار مي كنند تا يك فرد بالغ .",
      choices,
      questionHint: undefined,
    },
    "191": {
      question: "دوست دارم روزنامه نگار باشم .",
      choices,
      questionHint: undefined,
    },
    "192": {
      question:
        "مادرم زن خوبي است ، يا ( اگر مادرتان مرده است ) مادرم زن خوبي بود .",
      choices,
      questionHint: undefined,
    },
    "193": {
      question:
        "هنگام قدم زدن خيلي دقت مي كنم كه پايم را روي شكافهاي پياده رو نگذارم .",
      choices,
      questionHint: undefined,
    },
    "194": {
      question: "هرگز جوشهايي بر روي پوستم نبوده كه باعث نگرانيم شود .",
      choices,
      questionHint: undefined,
    },
    "195": {
      question:
        "در خانواده من ، محبت و همكاري خيلي كمتر از خانواده هاي ديگر است .",
      choices,
      questionHint: undefined,
    },
    "196": {
      question: 'دائما" نگران چيزي هستم .',
      choices,
      questionHint: undefined,
    },
    "197": {
      question: "فكر مي كنم كار پيمان كاري ساختمان را دوست داشته باشم .",
      choices,
      questionHint: undefined,
    },
    "198": {
      question: "اغلب صداهايي مي شنوم كه نمي دانم از كجا مي آيند .",
      choices,
      questionHint: undefined,
    },
    "199": {
      question: "من به علم علاقه مندم .",
      choices,
      questionHint: undefined,
    },
    "200": {
      question:
        "كمك خواستن از دوستان برايم مشكل نيست ، حتي اگر نتوانم اين لطف آنها را جبران كنم .",
      choices,
      questionHint: undefined,
    },
    "201": {
      question: "شكار كردن را خيلي دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "202": {
      question: "رفقايم اغلب مورد پسند والدينم نبودند .",
      choices,
      questionHint: undefined,
    },
    "203": {
      question: "گاهي كمي پشت سر ديگران غيبت مي كنم .",
      choices,
      questionHint: undefined,
    },
    "204": {
      question: "شنوايي من به خوبي اكثر افراد است .",
      choices,
      questionHint: undefined,
    },
    "205": {
      question:
        "برخي افراد خانواده ام عاداتي دارند كه باعث رنجش و دلخوري من مي شود .",
      choices,
      questionHint: undefined,
    },
    "206": {
      question: "بعضي وقتها احساس مي كنم كه خيلي آسان تصميم مي گيرم .",
      choices,
      questionHint: undefined,
    },
    "207": {
      question: "دوست دارم عضو چند انجمن يا باشگاه باشم .",
      choices,
      questionHint: undefined,
    },
    "208": {
      question: 'تقريبا" هيچ وقت طپش قلب يا تنگي نفس نداشته ام .',
      choices,
      questionHint: undefined,
    },
    "209": {
      question: "صحبت درباره مسائل جنسي را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "210": {
      question: "ديدن جاهايي را كه قبلا نديده ام دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "211": {
      question:
        "وظيفه اي به من الهام شده است كه تاكنون به دقت آن را دنبال كرده ام .",
      choices,
      questionHint: undefined,
    },
    "212": {
      question:
        "گاهي مانع كار كساني شده ام كه مي خواسته اند آن كار را نه به خاطر اهميتش ، بلكه به خاطر پيروي از اصول انجام دهند .",
      choices,
      questionHint: undefined,
    },
    "213": {
      question: "زود عصباني مي شوم و زود هم آرام مي گيرم .",
      choices,
      questionHint: undefined,
    },
    "214": {
      question: 'خانواده ام تقريبا" هيچ تسلطي بر روي من نداشته اند .',
      choices,
      questionHint: undefined,
    },
    "215": {
      question: "خيلي غصه مي خورم .",
      choices,
      questionHint: undefined,
    },
    "216": {
      question: "كسي سعي مي كند چيزي را از من بدزدد .",
      choices,
      questionHint: undefined,
    },
    "217": {
      question: 'تقريبا" تمام بستگانم مرا درك مي كنند .',
      choices,
      questionHint: undefined,
    },
    "218": {
      question:
        "مواقعي بوده كه آن قدر بي قرار بوده ام كه نتوانسته ام يك جا بند شوم .",
      choices,
      questionHint: undefined,
    },
    "219": {
      question: "در عشق شكست خورده ام .",
      choices,
      questionHint: undefined,
    },
    "220": {
      question: "هيچ وقت نگران قيافه ام نيستم .",
      choices,
      questionHint: undefined,
    },
    "221": {
      question:
        "اغلب درباره چيزهايي خواب مي بينم كه نمي توان درباره آنها با كسي صحبت كرد .",
      choices,
      questionHint: undefined,
    },
    "222": {
      question: "تمام مسائل مهم درباره امور جنسي را بايد به بچه ها ياد داد .",
      choices,
      questionHint: undefined,
    },
    "223": {
      question: "فكر مي كنم عصبي تر از ديگران نيستم .",
      choices,
      questionHint: undefined,
    },
    "224": {
      question: "من دردي ندارم ، و اگر هم داشته باشم ، بسيار كم است .",
      choices,
      questionHint: undefined,
    },
    "225": {
      question:
        "كارها را طوري انجام مي دهم كه ديگران مي توانند آن را سوء تعبير كنند .",
      choices,
      questionHint: undefined,
    },
    "226": {
      question:
        "گاهي وقتها بدون هيچ دليلي ، يا حتي در شرايط نامناسب ، احساس خوشي و هيجان زيادي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "227": {
      question: "كساني را كه دائما به فكر پول يا مقام هستند ، سرزنش نمي كنم .",
      choices,
      questionHint: undefined,
    },
    "228": {
      question: "اشخاصي هستند كه سعي مي كنند افكار و عقايد مرا بدزدند.",
      choices,
      questionHint: undefined,
    },
    "229": {
      question:
        "مواقعي پيش مي آيد كه گويي مغزم خالي شده است ، بطوري كه فعاليتهايم متوقف شده ، و از آنچه در اطرافم مي گذرد آگاه نيستم .",
      choices,
      questionHint: undefined,
    },
    "230": {
      question:
        "با كساني كه مي دانم كارشان اشتباه است ، مي توانم رفتار دوستانه اي داشته باشم .",
      choices,
      questionHint: undefined,
    },
    "231": {
      question:
        "دوست دارم بين جمعي از افرادي باشم كه مرتب جوك گفته و شوخي مي كنند .",
      choices,
      questionHint: undefined,
    },
    "232": {
      question:
        'گاهي در انتخابات به كساني راي مي دهم كه آنها را اصلا" نمي شناسم .',
      choices,
      questionHint: undefined,
    },
    "233": {
      question: "شروع كردن هر كاري برايم مشكل است .",
      choices,
      questionHint: undefined,
    },
    "234": {
      question: "فكر مي كنم كه يك شخص محكوم هستم .",
      choices,
      questionHint: undefined,
    },
    "235": {
      question: "در مدرسه شاگرد ضعيفي بودم .",
      choices,
      questionHint: undefined,
    },
    "236": {
      question: "اگر هنر مند بودم دوست داشتم گلها را نقاشي كنم .",
      choices,
      questionHint: undefined,
    },
    "237": {
      question: "از اين كه چندان خوش قيافه نيستم ، زياد ناراحت نمي شوم .",
      choices,
      questionHint: undefined,
    },
    "238": {
      question: "حتي در هواي خنك زود عرق مي كنم .",
      choices,
      questionHint: undefined,
    },
    "239": {
      question: "كاملا اعتماد به نفس دارم .",
      choices,
      questionHint: undefined,
    },
    "240": {
      question:
        "گاهي نمي توانم از دزدي ، يا بلند كردن چيزي از مغازه ها خودداري كنم .",
      choices,
      questionHint: undefined,
    },
    "241": {
      question: "بهتر است آدم به كسي اعتماد نكند .",
      choices,
      questionHint: undefined,
    },
    "242": {
      question: "هفته اي يك يا چند بار هيجان زده مي شوم .",
      choices,
      questionHint: undefined,
    },
    "243": {
      question:
        "وقتي در جمع هستم ، نمي توانم مطلب مناسبي براي گفتگو پيدا كنم .",
      choices,
      questionHint: undefined,
    },
    "244": {
      question:
        'معمولا" هر وقت دلم مي گيرد ، يك چيز مهيج مي تواند مرا از آن حالت خارج كند .',
      choices,
      questionHint: undefined,
    },
    "245": {
      question:
        "وقتي خانه را ترك مي كنم ، در مورد قفل بودن درها و بسته بودن پنجره ها نگران نيستم .",
      choices,
      questionHint: undefined,
    },
    "246": {
      question: "معتقدم كه گناهان من غير قابل بخشش هستند .",
      choices,
      questionHint: undefined,
    },
    "247": {
      question: "يك يا چند قسمت پوستم بي حس است .",
      choices,
      questionHint: undefined,
    },
    "248": {
      question:
        "سوء استفاده از كسي را كه خود اجازه چنين كاري را مي دهد ، بد نمي دانم .",
      choices,
      questionHint: undefined,
    },
    "249": {
      question: "بينايي من به خوبي سالهاي گذشته است .",
      choices,
      questionHint: undefined,
    },
    "250": {
      question:
        "گاهي اوقات به قدري از زرنگي بعضي از جنايتكاران خوشم آمده كه آرزو كرده ام گير نيفتند .",
      choices,
      questionHint: undefined,
    },
    "251": {
      question:
        "اغلب احساس مي كنم كه غريبه ها به ديده انتقاد آميز به من نگاه مي كنند .",
      choices,
      questionHint: undefined,
    },
    "252": {
      question: "براي من مزه همه چيز يكسان است .",
      choices,
      questionHint: undefined,
    },
    "253": {
      question: "من هر روز ، بيش از حد عادي آب مي خورم .",
      choices,
      questionHint: undefined,
    },
    "254": {
      question:
        "بيشتر مردم به اين علت با كسي دوست مي شوند كه ممكن است اين دوستي برايشان مفيد باشد .",
      choices,
      questionHint: undefined,
    },
    "255": {
      question: "به ندرت احساس كرده ام گوشهايم زنگ بزند يا وزوز كند .",
      choices,
      questionHint: undefined,
    },
    "256": {
      question: "گاهي اوقات از عزيزترين كسان خود هم متنفر مي شوم .",
      choices,
      questionHint: undefined,
    },
    "257": {
      question: "اگر خبرنگار بودم دوست داشتم اخبار ورزشي را گزارش كنم .",
      choices,
      questionHint: undefined,
    },
    "258": {
      question: "من در طول روز مي توانم بخوابم ولي شبها قادر به خواب نيستم .",
      choices,
      questionHint: undefined,
    },
    "259": {
      question: "مطمئنم كه ديگران پشت سرم راجع به من صحبت مي كنند .",
      choices,
      questionHint: undefined,
    },
    "260": {
      question: "گاهي به شوخيهاي بي ادبانه مي خندم .",
      choices,
      questionHint: undefined,
    },
    "261": {
      question: "در مقايسه با دوستانم ترسهاي كمتري دارم .",
      choices,
      questionHint: undefined,
    },
    "262": {
      question:
        "وقتي در جمعي از من بخواهند بحثي را شروع كنم يا مطلبي را توضيح دهم ، دستپاچه نمي شوم .",
      choices,
      questionHint: undefined,
    },
    "263": {
      question:
        "هميشه وقتي يك جنايتكار به وسيله دفاعيات يك وكيل زرنگ آزاد مي شود ، از قانون بيزار مي شوم .",
      choices,
      questionHint: undefined,
    },
    "264": {
      question: "در مصرف مشروبات الكلي افراط كرده ام .",
      choices,
      questionHint: undefined,
    },
    "265": {
      question: "تا وقتي كسي با من حرف نزند با او صحبت نمي كنم .",
      choices,
      questionHint: undefined,
    },
    "266": {
      question: "هرگز گرفتاري قانوني نداشته ام .",
      choices,
      questionHint: undefined,
    },
    "267": {
      question:
        "اوقاتي بوده كه در طي آن به طرز غير عادي و بدون علت خاصي احساس خوشحالي مي كردم .",
      choices,
      questionHint: undefined,
    },
    "268": {
      question: "افكار مربوط به امور جنسي آزارم مي دهد .",
      choices,
      questionHint: undefined,
    },
    "269": {
      question:
        "وقتي چند نفر به دردسر مي افتند ، بهترين كار اين است كه داستاني درست كرده و همه به آن بچسبند .",
      choices,
      questionHint: undefined,
    },
    "270": {
      question: "ديدن آزار و اذيت حيوانات باعث ناراحتي من نمي شود .",
      choices,
      questionHint: undefined,
    },
    "271": {
      question: "فكر مي كنم احساساتي تر از ديگران هستم .",
      choices,
      questionHint: undefined,
    },
    "272": {
      question: "هرگز در زندگي عروسك بازي را دوست نداشته ام .",
      choices,
      questionHint: undefined,
    },
    "273": {
      question: "اغلب اوقات زندگي برايم رنج آور است .",
      choices,
      questionHint: undefined,
    },
    "274": {
      question:
        "در مورد بعضي مسائل آن قدر حساسم كه نمي توانم در موردشان صحبت كنم .",
      choices,
      questionHint: undefined,
    },
    "275": {
      question: "در مدرسه صحبت كردن در مقابل كلاس برايم خيلي مشكل بود .",
      choices,
      questionHint: undefined,
    },
    "276": {
      question:
        "من مادرم را دوست دارم ، يا ( اگر مادرتان مرده است ) ، من مادرم را دوست داشتم .",
      choices,
      questionHint: undefined,
    },
    "277": {
      question: "اكثر اوقات ، حتي در كنار ديگران احساس تنهايي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "278": {
      question: "ديگران به قدر لازم با من تفاهم دارند .",
      choices,
      questionHint: undefined,
    },
    "279": {
      question: "از شركت در بازيهايي كه خوب بلد نيستم خودداري مي كنم .",
      choices,
      questionHint: undefined,
    },
    "280": {
      question: "فكر مي كنم مي توانم مثل ديگران به آساني دوست پيدا كنم .",
      choices,
      questionHint: undefined,
    },
    "281": {
      question: "دوست ندارم ديگران دور و برم باشند .",
      choices,
      questionHint: undefined,
    },
    "282": {
      question: "ديگران مي گويند كه من هنگام خواب راه مي روم .",
      choices,
      questionHint: undefined,
    },
    "283": {
      question:
        "كسي كه با سهل انگاري خود ديگران را به دزديدن اموالش وسوسه مي كند ، به اندازه كسي كه دزدي كرده ، مقصر است .",
      choices,
      questionHint: undefined,
    },
    "284": {
      question:
        'فكر مي كنم تقريبا" هركسي براي اين كه به دردسر نيفتد ، دروغ خواهد گفت .',
      choices,
      questionHint: undefined,
    },
    "285": {
      question: "من حساس تر از اغلب مردم هستم .",
      choices,
      questionHint: undefined,
    },
    "286": {
      question:
        'اغلب مردم باطنا" دوست ندارند كه براي كمك به ديگران خود را به دردسر بيندازند .',
      choices,
      questionHint: undefined,
    },
    "287": {
      question: "بيشتر رويا هايم درباره مسائل جنسي است .",
      choices,
      questionHint: undefined,
    },
    "288": {
      question:
        "پدر و مادر و افراد خانواده ام بيش از حد از من ايراد مي گيرند .",
      choices,
      questionHint: undefined,
    },
    "289": {
      question: "خيلي زود دستپاچه مي شوم .",
      choices,
      questionHint: undefined,
    },
    "290": {
      question: "درباره پول و كار نگران هستم .",
      choices,
      questionHint: undefined,
    },
    "291": {
      question: "هيچ وقت عاشق كسي نبوده ام .",
      choices,
      questionHint: undefined,
    },
    "292": {
      question:
        "بعضي از كارهايي كه افراد خانواده ام انجام داده اند ، مرا به وحشت انداخته است .",
      choices,
      questionHint: undefined,
    },
    "293": {
      question: 'تقريبا" هيچ وقت خواب نمي بينم .',
      choices,
      questionHint: undefined,
    },
    "294": {
      question: "بيشتر اوقات لكه هاي قرمزي روي گردنم پيدا مي شود .",
      choices,
      questionHint: undefined,
    },
    "295": {
      question:
        "هرگز احساس فلجي يا ضعف غير طبيعي ، در هيچ يك عضلاتم نداشته ام .",
      choices,
      questionHint: undefined,
    },
    "296": {
      question:
        "گاهي بدون آن كه سرما خورده باشم ، صدايم در نمي آيد يا تغيير مي كند .",
      choices,
      questionHint: undefined,
    },
    "297": {
      question:
        "اغلب پدر و مادرم مرا به اطاعت وادار مي كردند ، حتي وقتي كه من اين كار آنها را غير منطقي مي دانستم.",
      choices,
      questionHint: undefined,
    },
    "298": {
      question: "گاهي بوهاي ناجوري به مشامم مي رسد .",
      choices,
      questionHint: undefined,
    },
    "299": {
      question: "نمي توانم ذهنم را روي يك موضوع متمركز كنم .",
      choices,
      questionHint: undefined,
    },
    "300": {
      question:
        "من به دلايلي ، نسبت به يك يا چند نفر از اعضاي خانواده ام حسادت مي كنم.",
      choices,
      questionHint: undefined,
    },
    "301": {
      question: "تقريبا هميشه درباره كسي يا چيزي نگران هستم .",
      choices,
      questionHint: undefined,
    },
    "302": {
      question: "خيلي زود حوصله ام از دست ديگران سر مي رود .",
      choices,
      questionHint: undefined,
    },
    "303": {
      question: "اغلب آرزو مي كنم اي كاش مرده بودم .",
      choices,
      questionHint: undefined,
    },
    "304": {
      question: "گاهي آن قدر هيجان زده مي شوم كه خوابيدن برايم مشكل مي گردد .",
      choices,
      questionHint: undefined,
    },
    "305": {
      question: "من بيشتر از سهم خود در زندگي نگراني داشته ام .",
      choices,
      questionHint: undefined,
    },
    "306": {
      question: "براي هيچ كس چندان مهم نيست كه چه بر سرمن مي آيد .",
      choices,
      questionHint: undefined,
    },
    "307": {
      question: "گاهي آن قدر خوب مي شنوم كه باعث ناراحتيم مي شود .",
      choices,
      questionHint: undefined,
    },
    "308": {
      question: "هرچيزي را كه به من مي گويند بلافاصله فراموش مي كنم .",
      choices,
      questionHint: undefined,
    },
    "309": {
      question:
        "معمولا حتي در امور جزيي ، مجبورم كه قبل از اقدام صبر كرده و فكر كنم .",
      choices,
      questionHint: undefined,
    },
    "310": {
      question:
        "وقتي در خيابان آشنايانم را مي بينم ، براي اجتناب از روبرو شدن با آنها به طرف ديگر خيابان مي روم .",
      choices,
      questionHint: undefined,
    },
    "311": {
      question: "اغلب احساس مي كنم چيزهاي دور و برم واقعي نيستند .",
      choices,
      questionHint: undefined,
    },
    "312": {
      question: "تنها قسمت جالب نشريات ، بخش فكاهي آنهاست .",
      choices,
      questionHint: undefined,
    },
    "313": {
      question:
        "عادت دارم كه چيزهاي بي اهميت ( مانند درختها يا تيرهاي چراغ برق) را بشمارم .",
      choices,
      questionHint: undefined,
    },
    "314": {
      question: 'دشمني ندارم كه واقعا" بخواهد به من صدمه بزند .',
      choices,
      questionHint: undefined,
    },
    "315": {
      question:
        "با كساني كه دوستانه تر از حد معمول به نظر مي رسند ، با احتياط رفتار مي كنم .",
      choices,
      questionHint: undefined,
    },
    "316": {
      question: "افكار غير عادي و عجيب وقريبي دارم .",
      choices,
      questionHint: undefined,
    },
    "317": {
      question:
        "دور شدن از خانه ، حتي براي مسافرتهاي كوتاه ، مرا مضطرب و ناراحت مي كند .",
      choices,
      questionHint: undefined,
    },
    "318": {
      question: 'معمولا" انتظار دارم در كارهايي كه انجام مي دهم ، موفق شوم .',
      choices,
      questionHint: undefined,
    },
    "319": {
      question: "هنگامي كه تنها هستم ، چيزهاي عجيب و غريبي مي شنوم .",
      choices,
      questionHint: undefined,
    },
    "320": {
      question:
        "گاهي از افراد يا چيزهايي مي ترسم كه مي دانم صدمه اي به من نمي زنند .",
      choices,
      questionHint: undefined,
    },
    "321": {
      question:
        "از تنها وارد شدن به اتاقي كه يك عده در آن مشغول صحبت هستند ، احساس ترس و ناراحتي نمي كنم .",
      choices,
      questionHint: undefined,
    },
    "322": {
      question: "از به كار بردن چاقو يا هر چيز برنده و نوك تيز مي ترسم .",
      choices,
      questionHint: undefined,
    },
    "323": {
      question: "گاهي از آزار رساندن به كسي كه خيلي دوستش دارم ، لذت مي برم .",
      choices,
      questionHint: undefined,
    },
    "324": {
      question:
        "به آساني مي توانم ديگران را از خودم بترسانم ، و گاهي براي شوخي اين كار را مي كنم .",
      choices,
      questionHint: undefined,
    },
    "325": {
      question: "براي من تمركز حواس مشكلتر از ديگران است .",
      choices,
      questionHint: undefined,
    },
    "326": {
      question:
        "بارها اتفاق افتاده كه از انجام كاري منصرف شده ام ، زيرا توانايي انجام آن را در خود نديده ام .",
      choices,
      questionHint: undefined,
    },
    "327": {
      question:
        "كلمات بد و خيلي زشتي به ذهنم خطور مي كند و نمي توانم از شر آنها خلاص شوم .",
      choices,
      questionHint: undefined,
    },
    "328": {
      question:
        "گاهي افكار بي اهميتي به ذهنم هجوم مي آورند و تا چند روز مرا ناراحت مي كنند .",
      choices,
      questionHint: undefined,
    },
    "329": {
      question: "تقريبا هر روز چيزهايي اتفاق مي افتد كه مرا مي ترساند .",
      choices,
      questionHint: undefined,
    },
    "330": {
      question: "گاهي سرشار از انرژي هستم .",
      choices,
      questionHint: undefined,
    },
    "331": {
      question: "معمولا كارها را سخت مي گيرم .",
      choices,
      questionHint: undefined,
    },
    "332": {
      question: "گاهي از آزار ديدن به وسيله كسي كه دوستش دارم ، لذت مي برم .",
      choices,
      questionHint: undefined,
    },
    "333": {
      question: "مردم درباره من چيزهاي زشت و توهين آميزي مي گويند .",
      choices,
      questionHint: undefined,
    },
    "334": {
      question: "در جاهاي بسته احساس ناراحتي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "335": {
      question: "زياد خود پسند نيستم .",
      choices,
      questionHint: undefined,
    },
    "336": {
      question: "كسي فكر و ذهن مرا كنترل مي كند .",
      choices,
      questionHint: undefined,
    },
    "337": {
      question:
        "در ميهمانيها بيشتر اوقات به جاي اين كه داخل جمع شوم ، ترجيح مي دهم تنها يا فقط با يك نفر بنشينم .",
      choices,
      questionHint: undefined,
    },
    "338": {
      question: "بيشتر اوقات رفتار مردم برخلاف انتظار من است .",
      choices,
      questionHint: undefined,
    },
    "339": {
      question:
        "گاهي احساس كرده ام مشكلاتم آن قدر زياد شده اند كه نمي توانم بر آنها غلبه كنم.",
      choices,
      questionHint: undefined,
    },
    "340": {
      question: "ديد و بازديد از آشنايان را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "341": {
      question: "گاهي ذهنم كند تر از حد معمول كار مي كند .",
      choices,
      questionHint: undefined,
    },
    "342": {
      question: "در اتوبوس ، قطار و غيره ، اغلب با غريبه ها صحبت مي كنم .",
      choices,
      questionHint: undefined,
    },
    "343": {
      question: "بچه ها را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    "344": {
      question: "از شرط بندي روي چيزهاي كوچك خوشم مي آيد .",
      choices,
      questionHint: undefined,
    },
    "345": {
      question:
        "اگر امكاناتي فراهم شود ، مي توانم كاري انجام دهم كه براي مردم بسيار سودمند باشد .",
      choices,
      questionHint: undefined,
    },
    "346": {
      question:
        "اغلب به افراد به اصطلاح متخصصي برخورده ام ، كه به اندازه من كار بلد نبودند .",
      choices,
      questionHint: undefined,
    },
    "347": {
      question:
        "وقتي مي شنوم يكي از آشنايانم به موفقيتي رسيده است ، احساس شكست مي كنم .",
      choices,
      questionHint: undefined,
    },
    "348": {
      question: "اغلب آرزو مي كنم اي كاش بچه بودم .",
      choices,
      questionHint: undefined,
    },
    "349": {
      question: "خوش ترين ساعات زندگيم وقتي است كه تنها باشم .",
      choices,
      questionHint: undefined,
    },
    "350": {
      question: "اگر به من فرصت دهند ، رهبر خوبي براي مردم مي شوم .",
      choices,
      questionHint: undefined,
    },
    "351": {
      question: "از شنيدن داستانها و جوكهاي بي ادبانه خجالت مي كشم .",
      choices,
      questionHint: undefined,
    },
    "352": {
      question:
        "معمولا مردم بيش از آن چه به ديگران احترام مي گذارند ، توقع احترام دارند .",
      choices,
      questionHint: undefined,
    },
    "353": {
      question: "از ميهمانيها فقط به اين دليل كه با مردم هستم لذت مي برم .",
      choices,
      questionHint: undefined,
    },
    "354": {
      question:
        "سعي مي كنم داستانهاي خوبي را به خاطر بسپارم تا بتوانم به ديگران بازگو كنم .",
      choices,
      questionHint: undefined,
    },
    "355": {
      question:
        "يك يا چند بار در زندگي احساس كرده ام فردي به وسيله هيپنوتيزم مرا وادار به انجام كارهايي كرده است",
      choices,
      questionHint: undefined,
    },
    "356": {
      question:
        "زماني كه مشغول انجام كاري هستم ، نمي توانم حتي براي يك لحظه آن را كنار بگذارم .",
      choices,
      questionHint: undefined,
    },
    "357": {
      question: "اغلب در غيبت كردن و عيب جويي هاي اطرافيانم شركت نمي كنم .",
      choices,
      questionHint: undefined,
    },
    "358": {
      question:
        'اغلب ، ديگران نسبت به فكر هاي خوب من حسادت مي كنند ، فقط به اين دليل كه اين فكرها قبلا" به ذهن خود آنها نرسيده بود .',
      choices,
      questionHint: undefined,
    },
    "359": {
      question: "از شور و هيجان در يك جمع لذت مي برم .",
      choices,
      questionHint: undefined,
    },
    "360": {
      question: "از ملاقات با آدمهاي غريبه ناراحت نمي شوم .",
      choices,
      questionHint: undefined,
    },
    "361": {
      question: "كسي سعي دارد روي فكر من تاثير بگذارد .",
      choices,
      questionHint: undefined,
    },
    "362": {
      question:
        "يادم مي آيد گاهي براي خلاص شدن از گرفتاري ، خودم را به مريضي زده ام .",
      choices,
      questionHint: undefined,
    },
    "363": {
      question:
        "هنگامي كه در جمع دوستان شاد و سر زنده هستم ، نگرانيهايم بر طرف مي شود .",
      choices,
      questionHint: undefined,
    },
    "364": {
      question:
        'هنگامي كه كاري خوب پيش نمي رود ، دلم مي خواهد آن كار را فورا" كنار بگذارم .',
      choices,
      questionHint: undefined,
    },
    "365": {
      question: "دوست دارم ديگران بدانند من بر كارها مسلط هستم .",
      choices,
      questionHint: undefined,
    },
    "366": {
      question:
        "مواقعي بوده كه به قدري سرشار از انرژي بوده ام كه چند روزي نياز به خواب نداشتم .",
      choices,
      questionHint: undefined,
    },
    "367": {
      question: "هر وقت امكان داشته باشد از حضور در ميان جمعيت پرهيز مي كنم .",
      choices,
      questionHint: undefined,
    },
    "368": {
      question: "از روبرو شدن با گرفتاري يا مشكل شانه خالي مي كنم .",
      choices,
      questionHint: undefined,
    },
    "369": {
      question:
        "هنگامي كه مي خواهم كاري انجام دهم و ديگران مي گويند كه ارزش انجام دادن ندارد ، آن را كنار مي گذارم .",
      choices,
      questionHint: undefined,
    },
    "370": {
      question: "ميهمانيها و اجتماعات را دوست دارم .",
      choices,
      questionHint: undefined,
    },
    // "371": {
    //   question: "اغلب آرزو مي كنم كه اي كاش از جنس مخالف بودم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "372": {
    //   question: "زود عصباني نمي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "373": {
    //   question:
    //     "در گذشته كارهاي زشتي انجام داده ام كه هرگز درباره آنها با كسي صحبت نكرده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "374": {
    //   question:
    //     "اغلب مردم براي پيشرفت در زندگي ، تا حدي از روشهاي غيرعادلانه استفاده مي كنند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "375": {
    //   question: "هنگامي كه ديگران سوالات خصوصي ازمن مي پرسند ، عصبي مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "376": {
    //   question: "فكر مي كنم نمي توانم براي آينده ام برنامه ريزي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "377": {
    //   question: 'از خودم ، با وضع و حالي كه فعلا" دارم ، راضي نيستم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "378": {
    //   question:
    //     "زماني كه خانواده دوستانم در مورد زندگيم مرا نصيحت مي كنند ، عصباني مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "379": {
    //   question: "در بچگي زياد تنبيه بدني شده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "380": {
    //   question: "هنگامي كه ديگران از من تعريف مي كنند ، ناراحت مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "381": {
    //   question: "دوست ندارم نظر ديگران را در مورد زندگي بشنوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "382": {
    //   question: "اغلب ، با افرادي كه به من نزديك هستند ، اختلاف نظر جدي دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "383": {
    //   question:
    //     'وقتي كه واقعا" كارها بد پيش مي رود ، مي دانم كه مي توانم روي كمك خانواده ام حساب كنم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "384": {
    //   question: "در بچگي ميهمان بازي را دوست داشتم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "385": {
    //   question: "از آتش نمي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "386": {
    //   question:
    //     'گاهي از سايرين دوري مي كنم ، چون مي ترسم پيش آنها كاري بكنم يا حرفي بزنم كه بعدا" پشيمان شوم',
    //   choices,
    //   questionHint: undefined,
    // },
    // "387": {
    //   question:
    //     "من گاهي مشروب مي خورم ، و فقط در اين مواقع است كه مي توانم احساس واقعيم را بيان كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "388": {
    //   question: "خيلي كم دوره هاي غمگيني داشته ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "389": {
    //   question: "اغلب مي گويند كه من آدم جوشي و تند خويي هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "390": {
    //   question:
    //     "از اين كه درگذشته بعضي حرفهايم ممكن است ديگران را رنجانده باشد ، ناراحتم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "391": {
    //   question:
    //     "احساس مي كنم نمي توانم همه چيزها را درباره خودم به كسي بگويم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "392": {
    //   question: "رعد و برق يكي از چيزهايي است كه از آن مي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "393": {
    //   question:
    //     "دوست دارم مردم را درباره كارهاي بعديم در حال حدس و گمان نگه دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "394": {
    //   question:
    //     "اغلب نقشه هايي كه در گذشته كشيده ام ، آن قدر پر اشكال بوده كه مجبور شده ام از آنها صرف نظر كنم",
    //   choices,
    //   questionHint: undefined,
    // },
    // "395": {
    //   question: "از تنها ماندن در تاريكي مي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "396": {
    //   question:
    //     "اغلب اوقات وقتي خواستم جلوي اشتباه كسي را بگيرم ، نگران اين بوده ام كه مبادا فكر كند نيت بدي دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "397": {
    //   question: "طوفان مرا به وحشت مي اندازد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "398": {
    //   question: "اغلب از ديگران راهنمايي مي خواهم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "399": {
    //   question:
    //     "آينده هر فرد نا مطمئن تر از آن است كه بتواند براي آن نقشه هاي جدي در نظر بگيرد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "400": {
    //   question:
    //     "اغلب اوقات حتي زماني كه همه چيز خوب پيش مي رود ، احساس مي كنم هيچ چيز برايم مهم نيست .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "401": {
    //   question: "از آب نمي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "402": {
    //   question:
    //     "اغلب براي تصميم گيري در مورد كاري بايد مدتهاي طولاني روي آن فكر كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "403": {
    //   question:
    //     "وقتي خواسته ام به كسي خوبي كرده و كمكش كنم ، اغلب در مورد نيت من دچار سوء تفاهم شده است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "404": {
    //   question: "مشكلي در بلعيدن ندارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "405": {
    //   question: 'معمولا" آرام هستم و به آساني عصباني نمي شوم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "406": {
    //   question:
    //     'مطمئنا" از ضربه زدن به مجرمين ، به شيوه خودشان ، لذت خواهم برد .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "407": {
    //   question: "به دليل گناهاني كه مرتكب شده ام ، سزاوار مجازات سختي هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "408": {
    //   question:
    //     "از شكستها چنان ناراحت مي شوم كه نمي توانم آنها را از ذهنم بيرون كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "409": {
    //   question:
    //     "از اين كه هنگام كار كردن كسي مرا نگاه كند ناراحت مي شوم ، حتي زماني كه مي دانم مي توانم آن كار را به خوبي انجام دهم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "410": {
    //   question:
    //     "اگر كسي در صف از من جلو بزند ، آن قدر ناراحت مي شوم كه به او اعتراض مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "411": {
    //   question: "گاهي فكر مي كنم به درد هيچ كاري نمي خورم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "412": {
    //   question: "در دوران مدرسه ، اغلب غيبت مي كردم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "413": {
    //   question:
    //     "يك يا چند نفر از افراد خانواده ام ، آدمهايي بسيار عصبي هستند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "414": {
    //   question:
    //     "گاهي مجبور شده ام با افراد گستاخ و مزاحم رفتار خشني داشته باشم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "415": {
    //   question: "درباره بدبختيهاي احتمالي آينده نگرانم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "416": {
    //   question: "عقايد سياسي محكمي دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "417": {
    //   question: "دوست دارم در مسابقات اتومبيل راني شركت كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "418": {
    //   question:
    //     "استفاده از حقه هاي قانوني ، به شرط آن كه منجر به قانون شكني نشود ، اشكالي ندارد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "419": {
    //   question:
    //     'عده اي هستند كه من از آنها آن قدرمتنفرم كه وقتي گرفتاري برايشان پيش مي آيد ، عميقا" خوشحال مي شوم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "420": {
    //   question: "انتظار كشيدن مرا عصباني مي كند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "421": {
    //   question:
    //     "اگر ديگران فكر كنند كه من كاري را درست انجام نمي دهم ، آن كار را كنار مي گذارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "422": {
    //   question: "كوچكتر كه بودم ، شيفته شور و هيجان بودم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "423": {
    //   question: "براي غلبه بر رقيب خود ، حاضرم هر كاري بكنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "424": {
    //   question:
    //     "از اين كه مردم در خيابان ، فروشگاه ، و . . . مرا نگاه كنند ناراحت مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "425": {
    //   question:
    //     "مردي كه در دوران كودكي از من نگهداري مي كرد ( مانند پدر يا ناپدري ) نسبت به من خيلي سخت گير بود .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "426": {
    //   question: "لي لي و طناب بازي را دوست داشتم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "427": {
    //   question: "تا بحال هرگز يك شبح نديده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "428": {
    //   question: "تاكنون چندين بار نظرم را درباره شغل دائمي خود تغيير داده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "429": {
    //   question: "هرگز بدون تجويز پزشك ، دارو يا قرص خواب آور مصرف نمي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "430": {
    //   question: "اغلب از اين كه بد اخلاق و زود رنج هستم تاسف مي خورم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "431": {
    //   question: "در مدرسه هميشه نمره انضباطم بد بود .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "432": {
    //   question: "من شيفته آتش هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "433": {
    //   question:
    //     "هنگامي كه مجبور باشم ، تنها آن قسمت از حقيقت را مي گويم كه براي خودم ضرري نداشته باشد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "434": {
    //   question:
    //     "اگر من با چند تن از دوستانم دچار گرفتاري مي شديم ، و همه به يك اندازه مقصر بوديم ، ترجيح مي دادم كه همه تقصيرها را خودم بر عهده بگيرم ، اما دوستانم را لو ندهم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "435": {
    //   question: "اغلب اوقات از تاريكي مي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "436": {
    //   question:
    //     'هنگامي كه مردي زني را ملاقات مي كند ، معمولا" به جنبه هاي جنسي زن فكر مي كند .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "437": {
    //   question:
    //     'معمولا" با افرادي كه مي خواهم آنها را راهنمايي يا اصلاح كنم ، بسيار رك هستم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "438": {
    //   question: "از تصور وقوع يك زمين لرزه به وحشت مي افتم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "439": {
    //   question: "بلافاصله يك نظر يا فكر خوب را صد در صد قبول مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "440": {
    //   question:
    //     'معمولا" به جاي راهنمايي خواستن از ديگران ترجيح مي دهم خودم كارها را حل و فصل كنم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "441": {
    //   question:
    //     "از اين كه در محل در بسته و يا جايي شبيه انباري باشم ، مي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "442": {
    //   question:
    //     'بايد قبول كنم كه گاهي بي دليل درباره چيزهايي واقعا" بي اهميت نگران شده ام .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "443": {
    //   question:
    //     "هرگز نظر بد يا احساس ترحم خودم را نسبت به ديگران پنهان نمي كنم ، ولو آن كه از من برنجد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "444": {
    //   question: "من آدم بسيار حساسي هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "445": {
    //   question:
    //     'غالبا" زير دست كساني كار كرده ام كه كارها را طوري جور مي كنند كه امتيازها نصيب خودشان شود ، اما بتوانند اشتباهات را به گردن زير دستان خود بياندازند .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "446": {
    //   question: "چون آدم كمرويي هستم ، گاهي دفاع از حقم برايم سخت است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "447": {
    //   question: "از ديدن زباله منزجر و يا وحشتزده مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "448": {
    //   question:
    //     "در عالم رويا براي خود يك زندگي خيالي ساخته ام ، كه در باره آن با ديگران حرف نمي زنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "449": {
    //   question: "بعضي از افراد خانواده ام تند خو هستند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "450": {
    //   question: "نمي توانم هيچ كاري را خوب انجام دهم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "451": {
    //   question:
    //     'از اين كه اغلب اوقات احساس تاسفم را بيش از آنچه واقعا" هست نشان مي دهم ، احساس گناه مي كنم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "452": {
    //   question: 'معمولا" قاطعانه از عقايد خودم دفاع مي كنم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "453": {
    //   question: "از عنكبوت نمي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "454": {
    //   question: "به آينده اميدي ندارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "455": {
    //   question: "اعضاي خانواده و بستگان نزديكم روابط خوبي با هم دارند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "456": {
    //   question: "دوست دارم لباسهاي گران قيمت بپوشم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "457": {
    //   question:
    //     "حتي وقتي در مورد موضوعي تصميم گرفته ام ، ديگران مي توانند نظرم را به آساني تغيير دهند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "458": {
    //   question: "از ديدن بعضي حيوانات ناراحت مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "459": {
    //   question: "مي توانم به اندازه ديگران درد را تحمل كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "460": {
    //   question:
    //     "چندين بار من آخرين نفري بوده ام كه از تلاش براي انجام كاري دست كشيده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "461": {
    //   question: "از اين كه ديگران مرا وادار به عجله كنند ، عصباني مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "462": {
    //   question: "از موش نمي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "463": {
    //   question:
    //     "هفته اي چند بار احساس مي كنم كه گويي اتفاق خطرناكي در حال وقوع است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "464": {
    //   question: "اغلب اوقات احساس خستگي مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "465": {
    //   question: "تعمير كردن قفل درب را دوست دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "466": {
    //   question: "گاهي مطمئنم كه ديگران مي توانند افكارم را بخوانند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "467": {
    //   question: "دوست دارم مطالب علمي بخوانم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "468": {
    //   question: "از تنها بودن در يك مكان وسيع و سرباز مي ترسم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "469": {
    //   question: "گاهي احساس مي كنم كه دارم متلاشي مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "470": {
    //   question: "تعداد زيادي از مردم مرتكب رفتارهاي جنسي ناپسند مي شوند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "471": {
    //   question: "بارها در اواسط شب وحشت زده شده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "472": {
    //   question:
    //     "از اين كه فراموش كنم اشياء را كجا گذاشته ام ، بسيار ناراحت مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "473": {
    //   question:
    //     "كسي كه در بچگي بيش از همه به او دلبسته بودم و بيشتر از هركس ديگري او را تحسين مي كردم ، يك زن بود ( مادر ، خواهر ، عمه ، يا زن ديگري )",
    //   choices,
    //   questionHint: undefined,
    // },
    // "474": {
    //   question: "داستانهاي ماجراجويانه را بيشتر از داستانهاي عشقي دوست دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "475": {
    //   question: "اغلب گيج شده و فراموش مي كنم كه چه مي خواستم بگويم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "476": {
    //   question: "من آدم بسيار دست و پا چلفتي هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "477": {
    //   question: 'انجام ورزشهاي خشن ( مثل بوكس ) را واقعا" دوست دارم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "478": {
    //   question: "از همه اعضاء خانواده ام متنفرم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "479": {
    //   question: "بعضي ها فكر مي كنند كه شناختن من مشكل است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "480": {
    //   question: "بيشتر اوقات فراغتم را به تنهايي مي گذرانم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "481": {
    //   question:
    //     "وقتي ديگران كاري مي كنند كه باعث خشم من مي شود ، نارضايتي خودم را نسبت به كارشان بيان مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "482": {
    //   question: 'معمولا" تصميم گيري برايم سخت است .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "483": {
    //   question: "مردم مرا آدم جذابي نمي دانند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "484": {
    //   question: "مردم با من خيلي مهربان نيستند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "485": {
    //   question: "اغلب احساس مي كنم كه به خوبي ديگران نيستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "486": {
    //   question: "من خيلي لجوج هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "487": {
    //   question: "مصرف حشيش برايم لذت بخش بوده است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "488": {
    //   question: "بيماري رواني نشانه ضعف فرد است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "489": {
    //   question: "من گرفتار مواد مخدر يا الكل هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "490": {
    //   question:
    //     "ارواح يا اشياء مي توانند مردم را در جهت خوب يا بد تحت تاثير قرار دهند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "491": {
    //   question: "وقتي مجبورم تصميمات مهمي بگيرم ، احساس در ماندگي مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "492": {
    //   question:
    //     "هميشه سعي مي كنم خوشحال باشم ، حتي زماني كه ديگران ناراحت هستند يا ايراد مي گيرند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "493": {
    //   question:
    //     "هنگامي كه با مشكلي مواجه مي شوم ، در ميان گذاشتن آن با ديگران كمكم مي كند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "494": {
    //   question: "به اهداف اصلي خود در زندگي رسيده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "495": {
    //   question: "معتقدم كه مردم بايد مشكلات شخصيشان را براي خود نگه دارند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "496": {
    //   question: "اين روزها احساس فشار يا استرس زيادي نمي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "497": {
    //   question: "فكر اين كه تغييراتي در زندگيم بدهم ، ناراحتم مي كند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "498": {
    //   question: "بزرگترين مشكل من ناشي از رفتار يكي از نزديكترين كسانم است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "499": {
    //   question: "از رفتن به دكتر متنفرم ‚ حتي موقعي كه مريض هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "500": {
    //   question:
    //     "با اين كه از زندگيم راضي نيستم ، اما در اين مورد كاري از دستم بر نمي آيد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "501": {
    //   question:
    //     "براي كاهش مشكلات و نگرانيها ، صحبت كردن با ديگران مفيد تر از دارو خوردن است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "502": {
    //   question: 'من عادتهاي واقعا" مضري دارم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "503": {
    //   question:
    //     "مواقعي كه مشكلاتي پيش مي آيد ، ترجيح مي دهم ترجيح مي دهم ، كه ديگران به حل آن بپردازند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "504": {
    //   question: "معايبي دارم كه نمي توانم آنها را از بين ببرم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "505": {
    //   question:
    //     "كارهاي روزمره زندگي آن قدر حالم را به هم مي زند كه دلم مي خواهد همه آنها را رها كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "506": {
    //   question: "تازگيها به فكر خودكشي افتاده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "507": {
    //   question:
    //     "هنگامي كه ديگران مزاحم كارم مي شوند ، اغلب بسيار بد اخلاق مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "508": {
    //   question: "اغلب احساس مي كنم كه مي توانم فكر ديگران را بخوانم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "509": {
    //   question: "در مواقعي كه مجبورم تصميمات مهمي بگيرم ،عصباني مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "510": {
    //   question: "ديگران مي گويند كه من خيلي تند غذا مي خورم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "511": {
    //   question: "هفته اي يك بار يا بيشتر مست يا نشئه مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "512": {
    //   question:
    //     "كسي يا چيز پر ارزشي را از دست داده ام كه هرگز آن را فراموش نخواهم كرد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "513": {
    //   question: "گاهي آن قدر خشمگين و ناراحت مي شوم كه حال خودم را نمي فهمم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "514": {
    //   question: "قبول نكردن كاري كه ديگران از من مي خواهند برايم مشكل است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "515": {
    //   question: "خوشترين اوقات من زماني است كه تنها هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "516": {
    //   question: "زندگيم پوچ و بي معني است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "517": {
    //   question: "نمي توانم در شغلي براي مدت طولاني بمانم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "518": {
    //   question: "در زندگي اشتباهات زيادي داشته ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "519": {
    //   question: "از اين كه در برابر ديگران زياد تسليم مي شوم ، ناراحتم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "520": {
    //   question: "تازگيها درباره خودكشي زياد فكر مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "521": {
    //   question: "تصميم گيري به جاي ديگران و تعيين شغل براي آنها را دوست دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "522": {
    //   question:
    //     "حتي اگر خانواده ام نباشد ، مي دانم كه هميشه كسي از من مراقبت خواهد كرد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "523": {
    //   question:
    //     "از ايستادن در صف جاهايي مثل سينما ، رستوران ، مكانهاي ورزشي ، و . . . متنفرم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "524": {
    //   question:
    //     "من سعي كرده ام خود را بكشم ، اما هيچ كس اين موضوع را نمي داند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "525": {
    //   question: "همه چيز در اطرافم بسيار سريع مي گذرد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "526": {
    //   question: "مي دانم كه سربار ديگران هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "527": {
    //   question: 'بعد از يك روز بد ، معمولا" به مشروب نياز دارم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "528": {
    //   question: "بيشتر مشكلات من از بد شانسي است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "529": {
    //   question: "گاهي به نظر مي رسد كه نمي توانم حرف زدنم را قطع كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "530": {
    //   question: 'گاهي بدون اين كه علتش را بدانم ، عمدا" خودم را زخمي مي كنم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "531": {
    //   question: "من ساعتهاي طولاني كار مي كنم ، حتي اگر شغلم ايجاب نكند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "532": {
    //   question:
    //     'معمولا" پس از اين كه خوب گريه مي كنم ، احساس مي كنم كه حالم بهتر شده است .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "533": {
    //   question: "فراموش مي كنم كه چيزها را كجا مي گذارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "534": {
    //   question:
    //     "اگر مي توانستم دوباره زندگي كنم ، تغيير زيادي در آن نمي دادم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "535": {
    //   question:
    //     "اگر افرادي كه به آنها اعتماد كرده ام كارهايشان را سر وقت انجام ندهند ، بسيار كج خلق مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "536": {
    //   question: "به دنبال هر ناراحتي ، سردرد مي گيرم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "537": {
    //   question:
    //     "از انجام دادن معامله اي كه در آن به طرف مقابل كلك بزنم ، خوشم مي آيد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "538": {
    //   question: "اغلب مردها هرچند وقت يك بار به همسرشان خيانت مي كنند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "539": {
    //   question: 'اخيرا" نسبت به حل مشكلاتم بي علاقه شده ام .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "540": {
    //   question:
    //     "يك بار به دنبال مشروب خوردن ، عصباني شده و ظروف و اثاثيه را شكسته ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "541": {
    //   question:
    //     "اگر براي انجام كاري محدوديت زماني داشته باشم ، آن را بهتر انجام مي دهم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "542": {
    //   question:
    //     "يك بار به قدري از دست كساني عصباني شده ام كه احساس كرده ام دارم منفجر مي شوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "543": {
    //   question: "گاهي افكار وحشتناكي در مورد خانواده ام به ذهنم مي آيد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "544": {
    //   question:
    //     "ديگران مي گويند كه من به مشروب معتاد هستم ، اما خودم موافق نيستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "545": {
    //   question: "براي انجام كارهايم هميشه وقت كم مي آورم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "546": {
    //   question: 'اين روزها دائما" به مرگ و زندگي پس از آن فكر مي كنم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "547": {
    //   question:
    //     "بيشتر اوقات چيزهايي را هم كه ممكن است هرگز به درد نخورد ، نگه مي دارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "548": {
    //   question: "گاهي آن قدر عصباني شده ام كه در حين دعوا به كسي صدمه زده ام .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "549": {
    //   question:
    //     'اخيرا" احساس مي كنم در هر كاري كه انجام مي دهم مورد آزمايش قرار مي گيرم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "550": {
    //   question: "در حال حاضر ارتباط زيادي با بستگانم ندارم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "551": {
    //   question:
    //     "گاهي به نظرم مي رسد افكارم را كه با صداي بلند بيان مي شوند ، مي شنوم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "552": {
    //   question:
    //     'هنگامي كه غمگين هستم ، معمولا" با ديدار دوستانم ناراحتيم از بين مي رود .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "553": {
    //   question:
    //     'به نظر مي رسد هرچه كه الان برايم رخ مي دهد ، قبلا" نيز برايم رخ داده است .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "554": {
    //   question: "هر وقت زندگي برايم سخت مي شود ، جز تسليم چاره اي نمي بينم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "555": {
    //   question:
    //     "حتي در خانه خودم ، به تنهايي نمي توانم به يك اتاق تاريك بروم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "556": {
    //   question: "فكر پول و درآمد ذهنم را خيلي به خود مشغول كرده است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "557": {
    //   question: "مرد بايد رييس خانواده باشد .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "558": {
    //   question: "فقط در خانه خودم احساس آرامش مي كنم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "559": {
    //   question: "افرادي كه با آنها كار مي كنم ، مشكلات مرا درك نمي كنند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "560": {
    //   question: "از درآمدم راضي هستم .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "561": {
    //   question: 'معمولا" براي انجام كارهايم انرژي كافي دارم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "562": {
    //   question: "تعريف و تمجيد ديگران از من ، ناراحتم مي كند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "563": {
    //   question: "در اغلب ازدواجها ، يك يا هر دو طرف ناخشنودند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "564": {
    //   question: 'تقريبا" هيچ وقت كنترل خود را از دست نمي دهم .',
    //   choices,
    //   questionHint: undefined,
    // },
    // "565": {
    //   question: "اين روزها به خاطر سپردن گفته هاي ديگران برايم مشكل است .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "566": {
    //   question: "غمگيني يا ناراحتيم به كارم لطمه مي زند .",
    //   choices,
    //   questionHint: undefined,
    // },
    // "567": {
    //   question: "بيشتر زوجهاي متاهل نسبت به هم علاقه زيادي نشان نمي دهند .",
    //   choices,
    //   questionHint: undefined,
    // },
  },
};
