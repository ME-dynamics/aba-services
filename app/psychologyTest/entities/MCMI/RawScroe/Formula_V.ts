const data_V: Record<string, Record<string, number>> = {
  "65": {
    "1": 0,
    "2": 1,
  },
  "110": {
    "1": 0,
    "2": 1,
  },
  "157": {
    "1": 0,
    "2": 1,
  },
};

export function VFormula(fields: Record<string, number>) {
  let V = 0;
  const keys = Object.keys(data_V);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    V = V + data_V[key][field];
  }
}
