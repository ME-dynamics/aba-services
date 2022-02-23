const data_D: Record<string, Record<string, number>> = {
  "15": {
    "1": 0,
    "2": 1,
  },
  "25": {
    "1": 0,
    "2": 1,
  },
  "55": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 1,
  },
  "104": {
    "1": 0,
    "2": 1,
  },
  "141": {
    "1": 0,
    "2": 1,
  },
  "142": {
    "1": 0,
    "2": 1,
  },
  "148": {
    "1": 0,
    "2": 1,
  },
  "24": {
    "1": 0,
    "2": 2,
  },
  "56": {
    "1": 0,
    "2": 2,
  },
  "62": {
    "1": 0,
    "2": 2,
  },
  "86": {
    "1": 0,
    "2": 2,
  },
  "111": {
    "1": 0,
    "2": 2,
  },
  "130": {
    "1": 0,
    "2": 2,
  },
};

export function DFormula(fields: Record<string, number>) {
  let D = 0;
  const keys = Object.keys(data_D);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    D = D + data_D[key][field];
  }
}
