export * from "./testStructure";
export * from "./testData";
export * from "./NEOPIR";
export * from "./MBTI";
export * from "./beckAnxiety";
export * from "./garyWilson";
export * from "./MCMI";
export * from "./MMPI";

export type tTestFields = Record<string, number>;
export interface ISingleResultTest {
  warnings: string[];
  errors: string[];
  aggregate: number;
  interpret: string;
}
export type tSingleResultFormula = (fields: tTestFields) => ISingleResultTest;

export interface IBuildSingleResultTest {
  formula: tSingleResultFormula;
}

export type tInterpretTypes =
  | "image"
  | "title"
  | "paragraph"
  | "list"
  | "slogan";
export interface IInterpret {
  type: tInterpretTypes;
  data: string;
}
