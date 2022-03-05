const data_S: Record<string, Record<string, number>> = {
  "69": {
    "1": 0,
    "2": 1,
  },
  "99": {
    "1": 0,
    "2": 1,
  },
  "102": {
    "1": 0,
    "2": 1,
  },
  "134": {
    "1": 0,
    "2": 1,
  },
  "141": {
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
  "8": {
    "1": 0,
    "2": 2,
  },
  "48": {
    "1": 0,
    "2": 2,
  },
  "71": {
    "1": 0,
    "2": 2,
  },
  "86": {
    "1": 0,
    "2": 2,
  },
  "117": {
    "1": 0,
    "2": 2,
  },
  "138": {
    "1": 0,
    "2": 2,
  },
  "156": {
    "1": 0,
    "2": 2,
  },
  "158": {
    "1": 0,
    "2": 2,
  },
  "162": {
    "1": 0,
    "2": 2,
  },
};

export function SFormula(fields: Record<string, number>) {
  let S = 0;
  const keys = Object.keys(data_S);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    S = S + data_S[key][field];
  }
}
