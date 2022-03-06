const data_P: Record<string, Record<string, number>> = {
  "8": {
    "1": 0,
    "2": 1,
  },
  "48": {
    "1": 0,
    "2": 1,
  },
  "60": {
    "1": 0,
    "2": 1,
  },
  "63": {
    "1": 0,
    "2": 1,
  },
  "115": {
    "1": 0,
    "2": 1,
  },
  "138": {
    "1": 0,
    "2": 1,
  },
  "158": {
    "1": 0,
    "2": 1,
  },
  "159": {
    "1": 0,
    "2": 1,
  },
  "6": {
    "1": 0,
    "2": 2,
  },
  "33": {
    "1": 0,
    "2": 2,
  },
  "42": {
    "1": 0,
    "2": 2,
  },
  "49": {
    "1": 0,
    "2": 2,
  },
  "89": {
    "1": 0,
    "2": 2,
  },
  "103": {
    "1": 0,
    "2": 2,
  },
  "146": {
    "1": 0,
    "2": 2,
  },
  "167": {
    "1": 0,
    "2": 2,
  },
  "175": {
    "1": 0,
    "2": 2,
  },
};

export function PFormula(fields: Record<string, number>) {
  let P = 0;
  const keys = Object.keys(data_P);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    P = P + data_P[key][field];
  }
}
