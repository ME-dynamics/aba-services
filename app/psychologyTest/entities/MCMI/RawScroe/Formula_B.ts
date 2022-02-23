const data_B: Record<string, Record<string, number>> = {
  "22": {
    "1": 1,
    "2": 0,
  },
  "14": {
    "1": 0,
    "2": 1,
  },
  "41": {
    "1": 0,
    "2": 1,
  },
  "64": {
    "1": 0,
    "2": 1,
  },
  "93": {
    "1": 0,
    "2": 1,
  },
  "101": {
    "1": 0,
    "2": 1,
  },
  "113": {
    "1": 0,
    "2": 1,
  },
  "122": {
    "1": 0,
    "2": 1,
  },
  "139": {
    "1": 0,
    "2": 1,
  },
  "166": {
    "1": 0,
    "2": 1,
  },
  "52": {
    "1": 0,
    "2": 2,
  },
  "77": {
    "1": 0,
    "2": 2,
  },
  "100": {
    "1": 0,
    "2": 2,
  },
  "131": {
    "1": 0,
    "2": 2,
  },
  "152": {
    "1": 0,
    "2": 2,
  },
};

export function BFormula(fields: Record<string, number>) {
  let B = 0;
  const keys = Object.keys(data_B);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    B = B + data_B[key][field];
  }
}
