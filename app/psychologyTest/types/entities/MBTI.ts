export type tMbtiFields = Record<string, 1 | 2>;
export type tMbtiStructureFields = Record<string, Record<"1" | "2", number>>;
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
export type tMbtiAggregates = IEIGroup & IJPGroup & ISNGroup & ITFGroup;

export interface IMbtiFactor {
  enTitle: string;
  faTitle: string;
  score: number;
}
export interface IMbtiAggregates {
  e: IMbtiFactor;
  i: IMbtiFactor;
  j: IMbtiFactor;
  p: IMbtiFactor;
  s: IMbtiFactor;
  n: IMbtiFactor;
  t: IMbtiFactor;
  f: IMbtiFactor;
}

export interface IBuildMakeMBTI {
  eiFormula: (fields: tMbtiFields) => IEIGroup;
  jpFormula: (fields: tMbtiFields) => IJPGroup;
  snFormula: (fields: tMbtiFields) => ISNGroup;
  tfFormula: (fields: tMbtiFields) => ITFGroup;
}
