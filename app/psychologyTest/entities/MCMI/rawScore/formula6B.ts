const data6B: Record<string, Record<string, number>> = {
  "7": {
    "1": 0,
    "2": 1,
  },
  "13": {
    "1": 0,
    "2": 1,
  },
  "17": {
    "1": 0,
    "2": 1,
  },
  "33": {
    "1": 0,
    "2": 1,
  },
  "36": {
    "1": 0,
    "2": 1,
  },
  "39": {
    "1": 0,
    "2": 1,
  },
  "41": {
    "1": 0,
    "2": 1,
  },
  "49": {
    "1": 0,
    "2": 1,
  },
  "53": {
    "1": 0,
    "2": 1,
  },
  "79": {
    "1": 0,
    "2": 1,
  },
  "93": {
    "1": 0,
    "2": 1,
  },
  "96": {
    "1": 0,
    "2": 1,
  },
  "166": {
    "1": 0,
    "2": 1,
  },
  "9": {
    "1": 0,
    "2": 2,
  },
  "14": {
    "1": 0,
    "2": 2,
  },
  "28": {
    "1": 0,
    "2": 2,
  },
  "64": {
    "1": 0,
    "2": 2,
  },
  "87": {
    "1": 0,
    "2": 2,
  },
  "95": {
    "1": 0,
    "2": 2,
  },
  "116": {
    "1": 0,
    "2": 2,
  },
};

export function formula6B(fields: Record<string, number>) {
  let sixB = 0;
  const keys = Object.keys(data6B);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    sixB = sixB + data6B[key][field];
  }
  return sixB;
}
