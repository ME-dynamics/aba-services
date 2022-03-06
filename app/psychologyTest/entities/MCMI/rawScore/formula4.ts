const data4: Record<string, Record<string, number>> = {
  "10": {
    "1": 1,
    "2": 0,
  },
  "24": {
    "1": 1,
    "2": 0,
  },
  "27": {
    "1": 1,
    "2": 0,
  },
  "48": {
    "1": 1,
    "2": 0,
  },
  "62": {
    "1": 1,
    "2": 0,
  },
  "92": {
    "1": 1,
    "2": 0,
  },
  "99": {
    "1": 1,
    "2": 0,
  },
  "123": {
    "1": 1,
    "2": 0,
  },
  "127": {
    "1": 1,
    "2": 0,
  },
  "174": {
    "1": 1,
    "2": 0,
  },
  "12": {
    "1": 0,
    "2": 2,
  },
  "21": {
    "1": 0,
    "2": 2,
  },
  "32": {
    "1": 0,
    "2": 2,
  },
  "51": {
    "1": 0,
    "2": 2,
  },
  "57": {
    "1": 0,
    "2": 2,
  },
  "80": {
    "1": 0,
    "2": 2,
  },
  "88": {
    "1": 0,
    "2": 2,
  },
};

export function formula4(fields: Record<string, number>) {
  let four = 0;
  const keys = Object.keys(data4);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    four = four + data4[key][field];
  }
  return four;
}
