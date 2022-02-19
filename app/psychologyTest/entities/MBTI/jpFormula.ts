import { entityTypes } from "../../types";
const jData: entityTypes.tMbtiStructureFields = {
  "76": {
    "1": 1,
    "2": 0,
  },
  "77": {
    "1": 2,
    "2": 0,
  },
  "78": {
    "1": 0,
    "2": 1,
  },
  "79": {
    "1": 2,
    "2": 0,
  },
  "80": {
    "1": 1,
    "2": 0,
  },
  "81": {
    "1": 2,
    "2": 0,
  },
  "82": {
    "1": 2,
    "2": 0,
  },
  "83": {
    "1": 2,
    "2": 0,
  },
  "84": {
    "1": 2,
    "2": 0,
  },
  "85": {
    "1": 2,
    "2": 0,
  },
  "86": {
    "1": 1,
    "2": 0,
  },
  "87": {
    "1": 1,
    "2": 0,
  },
};
const pData: entityTypes.tMbtiStructureFields = {
  "76": {
    "1": 0,
    "2": 2,
  },
  "77": {
    "1": 0,
    "2": 2,
  },
  "78": {
    "1": 1,
    "2": 0,
  },
  "79": {
    "1": 0,
    "2": 1,
  },
  "80": {
    "1": 0,
    "2": 2,
  },
  "81": {
    "1": 0,
    "2": 0,
  },
  "82": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 2,
  },
  "84": {
    "1": 0,
    "2": 2,
  },
  "85": {
    "1": 0,
    "2": 2,
  },
  "86": {
    "1": 0,
    "2": 1,
  },
  "87": {
    "1": 0,
    "2": 2,
  },
};

export function jpFormula(fields: entityTypes.tMbtiFields) {
  let j = 0;
  let p = 0;
  for (let index = 76; index <= 87; index++) {
    const field = fields[`${index}`];
    j = j + jData[`${index}`][field];
    p = p + pData[`${index}`][field];
  }
  return { j, p };
}
