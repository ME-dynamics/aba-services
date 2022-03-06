export function formula(fields: Record<string, number>) {
  const values = Object.values(fields);
  let total = 0;
  for (let index = 0; index < values.length; index++) {
    total = total + values[index];
  }

  if (total <= 13) {
    const warning = total < 4 ? "اختمال انکار افسردگی" : "";

    return { aggregate: total, interpret: "هیچ یا کمترین", warning };
  }
  if (total >= 14 && total <= 19) {
    return { aggregate: total, interpret: "افسردگی خفیف", warning: "" };
  }
  if (total >= 20 && total <= 28) {
    return { aggregate: total, interpret: "افسردگی متوسط", warning: "" };
  }
  if (total >= 29 && total <= 63) {
    return { aggregate: total, interpret: "افسردگی شدید", warning: "" };
  }
  return {
    aggregate: total,
    interpret: "تعداد جواب ها نادرست است.",
    warning: "",
  };
}
