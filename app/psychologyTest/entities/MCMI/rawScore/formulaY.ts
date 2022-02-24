const dataY: Record<string, Record<string, number>> = {
  "32": {
    "1": 0,
    "2": 1,
  },
  "51": {
    "1": 0,
    "2": 1,
  },
  "57": {
    "1": 0,
    "2": 1,
  },
  "59": {
    "1": 0,
    "2": 1,
  },
  "80": {
    "1": 0,
    "2": 1,
  },
  "82": {
    "1": 0,
    "2": 1,
  },
  "88": {
    "1": 0,
    "2": 1,
  },
  "97": {
    "1": 0,
    "2": 1,
  },
  "137": {
    "1": 0,
    "2": 1,
  },
  "172": {
    "1": 0,
    "2": 1,
  },
};

export function formulaY(fields: Record<string, number>) {
  let Y = 0;
  const keys = Object.keys(dataY);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    Y = Y + dataY[key][field];
  }
  return Y;
}
