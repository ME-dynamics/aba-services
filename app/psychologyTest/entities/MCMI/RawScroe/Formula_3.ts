const data_3: Record<string, Record<string, number>> = {
  "82": {
    "1": 1,
    "2": 0,
  },
  "47": {
    "1": 0,
    "2": 1,
  },
  "56": {
    "1": 0,
    "2": 1,
  },
  "84": {
    "1": 0,
    "2": 1,
  },
  "120": {
    "1": 0,
    "2": 1,
  },
  "133": {
    "1": 0,
    "2": 1,
  },
  "141": {
    "1": 0,
    "2": 1,
  },
  "151": {
    "1": 0,
    "2": 1,
  },
  "16": {
    "1": 0,
    "2": 2,
  },
  "35": {
    "1": 0,
    "2": 2,
  },
  "45": {
    "1": 0,
    "2": 2,
  },
  "73": {
    "1": 0,
    "2": 2,
  },
  "94": {
    "1": 0,
    "2": 2,
  },
  "108": {
    "1": 0,
    "2": 2,
  },
  "135": {
    "1": 0,
    "2": 2,
  },
  "169": {
    "1": 0,
    "2": 2,
  },
};

export function threeFormula(fields: Record<string, number>) {
  let three = 0;
  const keys = Object.keys(data_3);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    three = three + data_3[key][field];
  }
}
