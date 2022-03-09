export * from "./testStructure";
export * from "./testData";
export * from "./NEOPIR";
export * from "./MBTI";
export * from "./beckAnxiety";
export * from "./garyWilson";
export * from "./MCMI";

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