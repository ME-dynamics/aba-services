const dataA: Record<string, Record<string, number>> = {
  "40": {
    "1": 0,
    "2": 1,
  },
  "61": {
    "1": 0,
    "2": 1,
  },
  "76": {
    "1": 0,
    "2": 1,
  },
  "108": {
    "1": 0,
    "2": 1,
  },
  "109": {
    "1": 0,
    "2": 1,
  },
  "135": {
    "1": 0,
    "2": 1,
  },
  "145": {
    "1": 0,
    "2": 1,
  },
  "149": {
    "1": 0,
    "2": 1,
  },
  "58": {
    "1": 0,
    "2": 2,
  },
  "75": {
    "1": 0,
    "2": 2,
  },
  "124": {
    "1": 0,
    "2": 2,
  },
  "147": {
    "1": 0,
    "2": 2,
  },
  "164": {
    "1": 0,
    "2": 2,
  },
  "170": {
    "1": 0,
    "2": 2,
  },
};

export function formulaA(fields: Record<string, number>) {
  let A = 0;
  const keys = Object.keys(dataA);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    A = A + dataA[key][field];
  }
  return A;
}
