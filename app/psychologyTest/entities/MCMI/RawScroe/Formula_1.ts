const data_1: Record<string, Record<string, number>> = {
  "32": {
    "1": 1,
    "2": 0,
  },
  "57": {
    "1": 1,
    "2": 0,
  },
  "4": {
    "1": 0,
    "2": 1,
  },
  "38": {
    "1": 0,
    "2": 1,
  },
  "48": {
    "1": 0,
    "2": 1,
  },
  "101": {
    "1": 0,
    "2": 1,
  },
  "142": {
    "1": 0,
    "2": 1,
  },
  "156": {
    "1": 0,
    "2": 1,
  },
  "167": {
    "1": 0,
    "2": 1,
  },
  "10": {
    "1": 0,
    "2": 2,
  },
  "27": {
    "1": 0,
    "2": 2,
  },
  "46": {
    "1": 0,
    "2": 2,
  },
  "92": {
    "1": 0,
    "2": 2,
  },
  "105": {
    "1": 0,
    "2": 2,
  },
  "148": {
    "1": 0,
    "2": 2,
  },
  "165": {
    "1": 0,
    "2": 2,
  },
};

export function oneFormula(fields: Record<string, number>) {
  let one = 0;
  const keys = Object.keys(data_1);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    one = one + data_1[key][field];
  }
}
