export type tMbtiFields = Record<string, "a" | "b">;

export interface IEIGroup {
  e: number;
  i: number;
}

export interface IJPGroup {
  j: number;
  p: number;
}

export interface ISNGroup {
  s: number;
  n: number;
}

export interface ITFGroup {
  t: number;
  f: number;
}

export interface IRules {
  warnings: Record<string, string>;
  validation: Record<string, string>;
}

export interface IBuildMakeMBTI {
  eiFormula: (fields: tMbtiFields) => IEIGroup;
  jpFormula: (fields: tMbtiFields) => IJPGroup;
  snFormula: (fields: tMbtiFields) => ISNGroup;
  tfFormula: (fields: tMbtiFields) => ITFGroup;
}
