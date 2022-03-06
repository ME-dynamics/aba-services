const data8A: Record<string, Record<string, number>> = {
  "6": {
    "1": 0,
    "2": 1,
  },
  "42": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 1,
  },
  "98": {
    "1": 0,
    "2": 1,
  },
  "122": {
    "1": 0,
    "2": 1,
  },
  "133": {
    "1": 0,
    "2": 1,
  },
  "166": {
    "1": 0,
    "2": 1,
  },
  "7": {
    "1": 0,
    "2": 2,
  },
  "15": {
    "1": 0,
    "2": 2,
  },
  "22": {
    "1": 0,
    "2": 2,
  },
  "36": {
    "1": 0,
    "2": 2,
  },
  "50": {
    "1": 0,
    "2": 2,
  },
  "60": {
    "1": 0,
    "2": 2,
  },
  "79": {
    "1": 0,
    "2": 2,
  },
  "115": {
    "1": 0,
    "2": 2,
  },
  "126": {
    "1": 0,
    "2": 2,
  },
};

export function formula8A(fields: Record<string, number>) {
  let eightA = 0;
  const keys = Object.keys(data8A);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    eightA = eightA + data8A[key][field];
  }
  return eightA;
}
