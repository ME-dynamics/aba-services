export interface IRawScore {
  L: number;
  F: number;
  K: number;
  Hs: number;
  D: number;
  Hy: number;
  Pd: number;
  Mf: number;
  Mm: number;
  Pa: number;
  Pt: number;
  Sc: number;
  Ma: number;
  Si: number;
}
export interface IMMPIResult {
  rawScore: IRawScore;
  tWithKMenCal: Omit<IRawScore, "Mf">;
  tWithKWoMenCal: Omit<IRawScore, "Mm">;
  tWithOutKMenCal: Omit<IRawScore, "Mf">;
  tWithOutKWoMenCal: Omit<IRawScore, "Mm">;
}
