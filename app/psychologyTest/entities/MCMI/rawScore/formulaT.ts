const dataT: Record<string, Record<string, number>> = {
  "7": {
    "1": 0,
    "2": 1,
  },
  "21": {
    "1": 0,
    "2": 1,
  },
  "38": {
    "1": 0,
    "2": 1,
  },
  "41": {
    "1": 0,
    "2": 1,
  },
  "53": {
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
  "139": {
    "1": 0,
    "2": 1,
  },
  "13": {
    "1": 0,
    "2": 2,
  },
  "39": {
    "1": 0,
    "2": 2,
  },
  "66": {
    "1": 0,
    "2": 2,
  },
  "91": {
    "1": 0,
    "2": 2,
  },
  "118": {
    "1": 0,
    "2": 2,
  },
  "136": {
    "1": 0,
    "2": 2,
  },
};

export function formulaT(fields: Record<string, number>) {
  let T = 0;
  const keys = Object.keys(dataT);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    T = T + dataT[key][field];
  }
  return T;
}
