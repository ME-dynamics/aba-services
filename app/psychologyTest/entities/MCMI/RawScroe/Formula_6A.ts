const data_6A: Record<string, Record<string, number>> = {
  "172": {
    "1": 1,
    "2": 0,
  },
  "7": {
    "1": 0,
    "2": 1,
  },
  "13": {
    "1": 0,
    "2": 1,
  },
  "14": {
    "1": 0,
    "2": 1,
  },
  "21": {
    "1": 0,
    "2": 1,
  },
  "41": {
    "1": 0,
    "2": 1,
  },
  "52": {
    "1": 0,
    "2": 1,
  },
  "93": {
    "1": 0,
    "2": 1,
  },
  "122": {
    "1": 0,
    "2": 1,
  },
  "136": {
    "1": 0,
    "2": 1,
  },
  "17": {
    "1": 0,
    "2": 2,
  },
  "38": {
    "1": 0,
    "2": 2,
  },
  "53": {
    "1": 0,
    "2": 2,
  },
  "101": {
    "1": 0,
    "2": 2,
  },
  "113": {
    "1": 0,
    "2": 2,
  },
  "139": {
    "1": 0,
    "2": 2,
  },
  "166": {
    "1": 0,
    "2": 2,
  },
};

export function sixAFormula(fields: Record<string, number>) {
  let sixA = 0;
  const keys = Object.keys(data_6A);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    sixA = sixA + data_6A[key][field];
  }
}
