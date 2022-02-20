export function rules(fields: Record<string, number>) {
  const keys = Object.keys(fields);
  const warnings: string[] = [];
  const errors: string[] = [];
  // if agree or really agree is over 150 and if is less than 50 there should be warning
  let allAgrees = 0;
  // if choice 2 => no idea is chosen more than 41 times, test is not valid
  let allNoIdeas = 0;
  // if fully disagree continues for 6 sequential question, invalidates the form
  let fullyDisagree = 0;
  // if disagree continues for 9 sequential question, invalidates the form
  let disagree = 0;
  // if no idea continues for 10 sequential question, invalidates the form
  let noIdea = 0;
  // if agree continues for 14 sequential question, invalidates the form
  let agree = 0;
  // if fully agree continues for 9 sequential question, invalidates the form
  let fullyAgree = 0;
  // reset choices values to zero, used for sequential tracking
  // if any value reach the sequential limit, error should be saved to validation object;
  function reset(
    except: "fullyDisagree" | "disagree" | "noIdea" | "agree" | "fullyAgree"
  ) {
    if (except !== "fullyDisagree") {
      fullyDisagree = 0;
    }
    if (except !== "disagree") {
      disagree = 0;
    }
    if (except !== "noIdea") {
      noIdea = 0;
    }
    if (except !== "agree") {
      agree = 0;
    }
    if (except !== "fullyAgree") {
      fullyAgree = 0;
    }
  }
  for (let index = 0; index < keys.length; index++) {
    // write all the rules here
    const key = keys[index];
    const value = fields[key];
    if (value === 0) {
      ++fullyDisagree;
      if (fullyDisagree === 6) {
        errors.push(
          "تعداد پاسخ های متوالی کاملا مخالف بیشتر از ۶ است. پاسخنامه بی اعتبار است"
        );
      }
      reset("fullyDisagree");
    }
    if (value === 1) {
      ++disagree;
      if (disagree === 9) {
        errors.push(
          "تعداد پاسخ های متوالی مخالفم بیشتر از ۹ است. پاسخنامه بی اعتبار است"
        );
      }
      reset("disagree");
    }
    if (value === 2) {
      ++allNoIdeas;
      ++noIdea;
      if (noIdea === 10) {
        errors.push(
          "تعداد پاسخ های متوالی نظری ندارم بیشتر از ۱۰ است. پاسخنامه بی اعتبار است"
        );
      }
      reset("noIdea");
    }
    if (value === 3) {
      ++allAgrees;
      ++agree;
      if (agree === 14) {
        errors.push(
          "تعداد پاسخ های متوالی موافق بیشتر از ۱۴ است. پاسخنامه بی اعتبار است"
        );
      }
      reset("agree");
    }
    if (value === 4) {
      ++allAgrees;
      ++fullyAgree;
      if (fullyAgree === 9) {
        errors.push(
          "تعداد پاسخ های متوالی کاملا موافق بیشتر از ۹ است. پاسخنامه بی اعتبار است"
        );
      }
      reset("fullyAgree");
    }
  }
  if (allAgrees >= 150) {
    warnings.push(
      "تعداد پاسخ های موافق و کاملا موافق بیشتر از ۱۵۰ است. پاسخنامه با احتیاط بررسی شود."
    );
  }
  if (allAgrees <= 50) {
    warnings.push(
      "تعداد پاسخ های موافق و کاملا موافق کمتر از ۵۰ است. پاسخنامه با احتیاط بررسی شود."
    );
  }
  if (allNoIdeas >= 41) {
    errors.push("تعداد پاسخ های نظری ندارم بیشتر از ۴۱ است. پاسخنامه بی اعتبار است");
  }
  return { warnings, errors };
}
