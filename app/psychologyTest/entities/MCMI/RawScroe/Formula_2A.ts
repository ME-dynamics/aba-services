const data_2A: Record<string, Record<string, number>> = {
  "57": {
    "1": 1,
    "2": 0,
  },
  "80": {
    "1": 1,
    "2": 0,
  },
  "47": {
    "1": 0,
    "2": 1,
  },
  "48": {
    "1": 0,
    "2": 1,
  },
  "146": {
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
  "158": {
    "1": 0,
    "2": 1,
  },
  "18": {
    "1": 0,
    "2": 2,
  },
  "40": {
    "1": 0,
    "2": 2,
  },
  "69": {
    "1": 0,
    "2": 2,
  },
  "84": {
    "1": 0,
    "2": 2,
  },
  "99": {
    "1": 0,
    "2": 2,
  },
  "127": {
    "1": 0,
    "2": 2,
  },
  "141": {
    "1": 0,
    "2": 2,
  },
  "174": {
    "1": 0,
    "2": 2,
  },
};

export function twoAFormula(fields: Record<string, number>) {
  let twoA = 0;
  const keys = Object.keys(data_2A);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    twoA = twoA + data_2A[key][field];
  }
}
