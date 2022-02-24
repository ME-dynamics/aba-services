const dataH: Record<string, Record<string, number>> = {
  "1": {
    "1": 0,
    "2": 1,
  },
  "75": {
    "1": 0,
    "2": 1,
  },
  "107": {
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
  "145": {
    "1": 0,
    "2": 1,
  },
  "148": {
    "1": 0,
    "2": 1,
  },
  "4": {
    "1": 0,
    "2": 2,
  },
  "11": {
    "1": 0,
    "2": 2,
  },
  "37": {
    "1": 0,
    "2": 2,
  },
  "55": {
    "1": 0,
    "2": 2,
  },
  "74": {
    "1": 0,
    "2": 2,
  },
};

export function formulaH(fields: Record<string, number>) {
  let H = 0;
  const keys = Object.keys(dataH);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    H = H + dataH[key][field];
  }
  return H;
}
