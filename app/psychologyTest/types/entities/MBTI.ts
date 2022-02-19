import { IInterpret, IWarning, IError, IAggregate } from "./formData";
export type tMbtiFields = Record<string, "1" | "2">;
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
export type tMbtiInterpret = IEIGroup & IJPGroup & ISNGroup & ITFGroup;
export type tInterpretCollection = Record<string, IInterpret[]>;
export interface IRules {
  warnings: IWarning[];
  errors: IError[];
}

export interface IBuildMakeMBTI {
  eiFormula: (fields: tMbtiFields) => IEIGroup;
  jpFormula: (fields: tMbtiFields) => IJPGroup;
  snFormula: (fields: tMbtiFields) => ISNGroup;
  tfFormula: (fields: tMbtiFields) => ITFGroup;
}

export interface IMbtiInterpret {
  type: string;
  interpret: IInterpret[];
}

export interface IMakeMbtiResult {
  aggregates: IAggregate[];
  interpret: IInterpret[];
}
