export type tFields = Record<string, number>;

export interface IAGroup {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
  a5: number;
  a6: number;
  a: number;
}
export interface ICGroup {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  c6: number;
  c: number;
}

export interface IEGroup {
  e1: number;
  e2: number;
  e3: number;
  e4: number;
  e5: number;
  e6: number;
  e: number;
}
export interface INGroup {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  n5: number;
  n6: number;
  n: number;
}
export interface IOGroup {
  o1: number;
  o2: number;
  o3: number;
  o4: number;
  o5: number;
  o6: number;
  o: number;
}
interface IRules {
  warnings: Record<string, string>;
  validation: Record<string, string>;
}
export interface IBuildNEOPIR {
  aFormula: (fields: tFields) => IAGroup;
  cFormula: (fields: tFields) => ICGroup;
  eFormula: (fields: tFields) => IEGroup;
  nFormula: (fields: tFields) => INGroup;
  oFormula: (fields: tFields) => IOGroup;
  rules: (fields: tFields) => IRules;
}

export interface INEOPIRResult {
  aGroup: IAGroup;
  cGroup: ICGroup;
  eGroup: IEGroup;
  nGroup: INGroup;
  oGroup: IOGroup;
  warnings: Record<string, string>;
  validation: Record<string, string>;

}
