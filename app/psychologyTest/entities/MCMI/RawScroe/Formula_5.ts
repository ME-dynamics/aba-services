const data_5: Record<string, Record<string, number>> = {
  "35": {
    "1": 1,
    "2": 0,
  },
  "40": {
    "1": 1,
    "2": 0,
  },
  "47": {
    "1": 1,
    "2": 0,
  },
  "69": {
    "1": 1,
    "2": 0,
  },
  "84": {
    "1": 1,
    "2": 0,
  },
  "86": {
    "1": 1,
    "2": 0,
  },
  "94": {
    "1": 1,
    "2": 0,
  },
  "99": {
    "1": 1,
    "2": 0,
  },
  "21": {
    "1": 0,
    "2": 1,
  },
  "38": {
    "1": 0,
    "2": 1,
  },
  "57": {
    "1": 0,
    "2": 1,
  },
  "80": {
    "1": 0,
    "2": 1,
  },
  "88": {
    "1": 0,
    "2": 1,
  },
  "116": {
    "1": 0,
    "2": 1,
  },
  "5": {
    "1": 0,
    "2": 2,
  },
  "26": {
    "1": 0,
    "2": 2,
  },
  "31": {
    "1": 0,
    "2": 2,
  },
  "67": {
    "1": 0,
    "2": 2,
  },
  "85": {
    "1": 0,
    "2": 2,
  },
  "93": {
    "1": 0,
    "2": 2,
  },
  "144": {
    "1": 0,
    "2": 2,
  },
  "159": {
    "1": 0,
    "2": 2,
  },
};

export function fiveFormula(fields: Record<string, number>) {
  let five = 0;
  const keys = Object.keys(data_5);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    five = five + data_5[key][field];
  }
}
