const data_PP: Record<string, Record<string, number>> = {
  "4": {
    "1": 0,
    "2": 1,
  },
  "38": {
    "1": 0,
    "2": 1,
  },
  "49": {
    "1": 0,
    "2": 1,
  },
  "67": {
    "1": 0,
    "2": 1,
  },
  "89": {
    "1": 0,
    "2": 1,
  },
  "103": {
    "1": 0,
    "2": 1,
  },
  "138": {
    "1": 0,
    "2": 1,
  },
  "159": {
    "1": 0,
    "2": 1,
  },
  "175": {
    "1": 0,
    "2": 1,
  },
  "63": {
    "1": 0,
    "2": 2,
  },
  "119": {
    "1": 0,
    "2": 2,
  },
  "140": {
    "1": 0,
    "2": 2,
  },
  "153": {
    "1": 0,
    "2": 2,
  },
};

export function PPFormula(fields: Record<string, number>) {
  let PP = 0;
  const keys = Object.keys(data_PP);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    PP = PP + data_PP[key][field];
  }
}
