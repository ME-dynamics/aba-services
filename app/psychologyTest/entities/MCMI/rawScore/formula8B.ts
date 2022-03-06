const data8B: Record<string, Record<string, number>> = {
  "18": {
    "1": 0,
    "2": 1,
  },
  "24": {
    "1": 0,
    "2": 1,
  },
  "25": {
    "1": 0,
    "2": 1,
  },
  "35": {
    "1": 0,
    "2": 1,
  },
  "40": {
    "1": 0,
    "2": 1,
  },
  "98": {
    "1": 0,
    "2": 1,
  },
  "148": {
    "1": 0,
    "2": 1,
  },
  "169": {
    "1": 0,
    "2": 1,
  },
  "19": {
    "1": 0,
    "2": 2,
  },
  "43": {
    "1": 0,
    "2": 2,
  },
  "70": {
    "1": 0,
    "2": 2,
  },
  "90": {
    "1": 0,
    "2": 2,
  },
  "104": {
    "1": 0,
    "2": 2,
  },
  "122": {
    "1": 0,
    "2": 2,
  },
  "161": {
    "1": 0,
    "2": 2,
  },
};

export function formula8B(fields: Record<string, number>) {
  let eightB = 0;
  const keys = Object.keys(data8B);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    eightB = eightB + data8B[key][field];
  }
  return eightB;
}
