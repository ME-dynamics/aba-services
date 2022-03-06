const data7: Record<string, Record<string, number>> = {
  "7": {
    "1": 1,
    "2": 0,
  },
  "14": {
    "1": 1,
    "2": 0,
  },
  "22": {
    "1": 1,
    "2": 0,
  },
  "41": {
    "1": 1,
    "2": 0,
  },
  "53": {
    "1": 1,
    "2": 0,
  },
  "72": {
    "1": 1,
    "2": 0,
  },
  "101": {
    "1": 1,
    "2": 0,
  },
  "139": {
    "1": 1,
    "2": 0,
  },
  "166": {
    "1": 1,
    "2": 0,
  },
  "2": {
    "1": 0,
    "2": 2,
  },
  "29": {
    "1": 0,
    "2": 2,
  },
  "59": {
    "1": 0,
    "2": 2,
  },
  "82": {
    "1": 0,
    "2": 2,
  },
  "97": {
    "1": 0,
    "2": 2,
  },
  "114": {
    "1": 0,
    "2": 2,
  },
  "137": {
    "1": 0,
    "2": 2,
  },
  "172": {
    "1": 0,
    "2": 2,
  },
};

export function formula7(fields: Record<string, number>) {
  let seven = 0;
  const keys = Object.keys(data7);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    seven = seven + data7[key][field];
  }
  return seven;
}
