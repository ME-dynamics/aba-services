const data_N: Record<string, Record<string, number>> = {
  "22": {
    "1": 0,
    "2": 1,
  },
  "41": {
    "1": 0,
    "2": 1,
  },
  "51": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 1,
  },
  "117": {
    "1": 0,
    "2": 1,
  },
  "134": {
    "1": 0,
    "2": 1,
  },
  "166": {
    "1": 0,
    "2": 1,
  },
  "170": {
    "1": 0,
    "2": 1,
  },
  "3": {
    "1": 0,
    "2": 2,
  },
  "54": {
    "1": 0,
    "2": 2,
  },
  "96": {
    "1": 0,
    "2": 2,
  },
  "106": {
    "1": 0,
    "2": 2,
  },
  "125": {
    "1": 0,
    "2": 2,
  },
};

export function NFormula(fields: Record<string, number>) {
  let N = 0;
  const keys = Object.keys(data_N);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    N = N + data_N[key][field];
  }
}
