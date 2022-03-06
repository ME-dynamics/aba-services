const dataCC: Record<string, Record<string, number>> = {
  "4": {
    "1": 0,
    "2": 1,
  },
  "34": {
    "1": 0,
    "2": 1,
  },
  "55": {
    "1": 0,
    "2": 1,
  },
  "74": {
    "1": 0,
    "2": 1,
  },
  "104": {
    "1": 0,
    "2": 1,
  },
  "111": {
    "1": 0,
    "2": 1,
  },
  "130": {
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
  "149": {
    "1": 0,
    "2": 1,
  },
  "154": {
    "1": 0,
    "2": 1,
  },
  "1": {
    "1": 0,
    "2": 2,
  },
  "44": {
    "1": 0,
    "2": 2,
  },
  "107": {
    "1": 0,
    "2": 2,
  },
  "128": {
    "1": 0,
    "2": 2,
  },
  "150": {
    "1": 0,
    "2": 2,
  },
  "171": {
    "1": 0,
    "2": 2,
  },
};

export function formulaCC(fields: Record<string, number>) {
  let CC = 0;
  const keys = Object.keys(dataCC);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    CC = CC + dataCC[key][field];
  }
  return CC;
}
