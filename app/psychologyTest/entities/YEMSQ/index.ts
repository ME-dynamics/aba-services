import { formula } from "./formula";

export function buildMakeYEMSQ() {
  return function makeYEMSQ(fields: Record<string, number>) {
    return formula(fields);
  };
}

export { testStructure as yemsqStructure } from "./testStructure";
