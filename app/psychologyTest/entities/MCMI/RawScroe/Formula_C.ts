const data_C: Record<string, Record<string, number>> = {
  "7": {
    "1": 0,
    "2": 1,
  },
  "22": {
    "1": 0,
    "2": 1,
  },
  "122": {
    "1": 0,
    "2": 1,
  },
  "135": {
    "1": 0,
    "2": 1,
  },
  "161": {
    "1": 0,
    "2": 1,
  },
  "166": {
    "1": 0,
    "2": 1,
  },
  "171": {
    "1": 0,
    "2": 1,
  },
  "30": {
    "1": 0,
    "2": 2,
  },
  "41": {
    "1": 0,
    "2": 2,
  },
  "72": {
    "1": 0,
    "2": 2,
  },
  "83": {
    "1": 0,
    "2": 2,
  },
  "98": {
    "1": 0,
    "2": 2,
  },
  "120": {
    "1": 0,
    "2": 2,
  },
  "134": {
    "1": 0,
    "2": 2,
  },
  "142": {
    "1": 0,
    "2": 2,
  },
  "154": {
    "1": 0,
    "2": 2,
  },
};

export function CFormula(fields: Record<string, number>) {
  let C = 0;
  const keys = Object.keys(data_C);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    C = C + data_C[key][field];
  }
}
