const dataP: Record<string, Record<string, number>> = {
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

export function formulaP(fields: Record<string, number>) {
  let P = 0;
  const keys = Object.keys(dataP);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    P = P + dataP[key][field];
  }
  return P;
}
