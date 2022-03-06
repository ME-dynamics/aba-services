const data2B: Record<string, Record<string, number>> = {
  "24": {
    "1": 0,
    "2": 1,
  },
  "43": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 1,
  },
  "86": {
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
  "154": {
    "1": 0,
    "2": 1,
  },
  "20": {
    "1": 0,
    "2": 2,
  },
  "25": {
    "1": 0,
    "2": 2,
  },
  "47": {
    "1": 0,
    "2": 2,
  },
  "112": {
    "1": 0,
    "2": 2,
  },
  "123": {
    "1": 0,
    "2": 2,
  },
  "133": {
    "1": 0,
    "2": 2,
  },
  "145": {
    "1": 0,
    "2": 2,
  },
  "151": {
    "1": 0,
    "2": 2,
  },
};

export function formula2B(fields: Record<string, number>) {
  let twoB = 0;
  const keys = Object.keys(data2B);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    twoB = twoB + data2B[key][field];
  }
  return twoB;
}
