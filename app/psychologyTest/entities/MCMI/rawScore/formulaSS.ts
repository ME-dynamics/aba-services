const dataSS: Record<string, Record<string, number>> = {
  "32": {
    "1": 0,
    "2": 1,
  },
  "56": {
    "1": 0,
    "2": 1,
  },
  "72": {
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
  "117": {
    "1": 0,
    "2": 1,
  },
  "134": {
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
  "151": {
    "1": 0,
    "2": 1,
  },
  "162": {
    "1": 0,
    "2": 1,
  },
  "34": {
    "1": 0,
    "2": 2,
  },
  "61": {
    "1": 0,
    "2": 2,
  },
  "68": {
    "1": 0,
    "2": 2,
  },
  "78": {
    "1": 0,
    "2": 2,
  },
  "102": {
    "1": 0,
    "2": 2,
  },
  "168": {
    "1": 0,
    "2": 2,
  },
};

export function formulaSS(fields: Record<string, number>) {
  let SS = 0;
  const keys = Object.keys(dataSS);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    SS = SS + dataSS[key][field];
  }
  return SS;
}
