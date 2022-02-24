const dataV: Record<string, Record<string, number>> = {
  "65": {
    "1": 0,
    "2": 1,
  },
  "110": {
    "1": 0,
    "2": 1,
  },
  "157": {
    "1": 0,
    "2": 1,
  },
};

export function formulaV(fields: Record<string, number>) {
  let V = 0;
  const keys = Object.keys(dataV);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    V = V + dataV[key][field];
  }
  return V;
}
