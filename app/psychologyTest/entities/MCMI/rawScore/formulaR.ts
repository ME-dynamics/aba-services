const dataR: Record<string, Record<string, number>> = {
  "62": {
    "1": 0,
    "2": 1,
  },
  "76": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 1,
  },
  "123": {
    "1": 0,
    "2": 1,
  },
  "142": {
    "1": 0,
    "2": 1,
  },
  "147": {
    "1": 0,
    "2": 1,
  },
  "148": {
    "1": 0,
    "2": 1,
  },
  "151": {
    "1": 0,
    "2": 1,
  },
  "154": {
    "1": 0,
    "2": 1,
  },
  "164": {
    "1": 0,
    "2": 1,
  },
  "109": {
    "1": 0,
    "2": 2,
  },
  "129": {
    "1": 0,
    "2": 2,
  },
  "149": {
    "1": 0,
    "2": 2,
  },
  "160": {
    "1": 0,
    "2": 2,
  },
  "172": {
    "1": 0,
    "2": 2,
  },
};

export function formulaR(fields: Record<string, number>) {
  let R = 0;
  const keys = Object.keys(dataR);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    R = R + dataR[key][field];
  }
  return R;
}
