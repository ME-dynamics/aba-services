export function beckDepII(fields: Record<string, number>) {
    const values = Object.values(fields);
    let total = 0;
    for (let index = 0; index < values.length; index++) {
      total = total + values[index];
    }
    const aggregates = {
      total,
    };
    const warnings: Record<string, string> = {};
    const interpret: Record<string, string> = {};
    if (total <= 13) {
      interpret["depression"] = "هیچ یا کمترین";
      if (total < 4) {
        warnings["denial"] = "احتمال انکار افسردگی";
      }
    } else if (total >= 14 && total <= 19) {
      interpret["depression"] = "افسردگی خفیف";
    } else if (total >= 20 && total <= 28) {
      interpret["depression"] = "افسردگی متوسط";
    } else if (total >= 29 && total <= 63) {
      interpret["depression"] = "افسردگی شدید";
    }
    return { aggregates, warnings, interpret };
  }
  