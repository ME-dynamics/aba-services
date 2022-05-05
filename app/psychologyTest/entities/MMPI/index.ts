import { entityTypes } from "../../types";
import {
  HsFormula,
  DFormula,
  FFormula,
  HyFormula,
  KFormula,
  LFormula,
  MFFFormula,
  MFMFormula,
  MaFormula,
  PaFormula,
  PdFormula,
  PtFormula,
  ScFormula,
  SiFormula,
} from "./rawScore";
import { tWithKMen } from "./tWithKMen";
import { tWithKWomen } from "./tWithKWomen";
import { tWithOutKMen } from "./tWithOutKMen";
import { tWithOutKWomen } from "./tWithOutKWomen";

export function buildMakeMMPI() {
  // calculation min,max for baseRate
  function minAndMaxCal(min: number, max: number, value: number) {
    if (value > max) {
      return max;
    }
    if (value < min) {
      return min;
    }
    return value;
  }
  return function makeMMPI(
    fields: Record<string, number>
  ): entityTypes.IMMPIResult {
    const L = LFormula(fields);
    const F = FFormula(fields);
    const K = KFormula(fields);
    const Hs = HsFormula(fields);
    const D = DFormula(fields);
    const Hy = HyFormula(fields);
    const Pd = PdFormula(fields);
    const Mf = MFFFormula(fields);
    const Mm = MFMFormula(fields);
    const Pa = PaFormula(fields);
    const Pt = PtFormula(fields);
    const Sc = ScFormula(fields);
    const Ma = MaFormula(fields);
    const Si = SiFormula(fields);

    const tWithKMenCal = {
      L: tWithKMen["L"][`${minAndMaxCal(0, 15, L)}`],
      F: tWithKMen["F"][`${minAndMaxCal(0, 28, F)}`],
      K: tWithKMen["K"][`${minAndMaxCal(6, 30, K)}`],
      Hs: tWithKMen["Hs"][`${minAndMaxCal(2, 44, Hs + Math.round(0.5 * K))}`],
      D: tWithKMen["D"][`${minAndMaxCal(9, 55, D)}`],
      Hy: tWithKMen["Hy"][`${minAndMaxCal(8, 50, Hy)}`],
      Pd: tWithKMen["Pd"][`${minAndMaxCal(11, 51, Pd + Math.round(0.4 * K))}`],
      Mm: tWithKMen["Mm"][`${minAndMaxCal(16, 56, Mm)}`],
      Pa: tWithKMen["Pa"][`${minAndMaxCal(2, 30, Pa)}`],
      Pt: tWithKMen["Pt"][`${minAndMaxCal(14, 60, Pt + K)}`],
      Sc: tWithKMen["Sc"][`${minAndMaxCal(12, 67, Sc + K)}`],
      Ma: tWithKMen["Ma"][`${minAndMaxCal(9, 43, Ma + Math.round(0.2 * K))}`],
      Si: tWithKMen["Si"][`${minAndMaxCal(9, 69, Si)}`],
    };
    const tWithKWoMenCal = {
      L: tWithKWomen["L"][`${minAndMaxCal(0, 15, L)}`],
      F: tWithKWomen["F"][`${minAndMaxCal(0, 24, F)}`],
      K: tWithKWomen["K"][`${minAndMaxCal(6, 30, K)}`],
      Hs: tWithKMen["Hs"][`${minAndMaxCal(6, 46, Hs + Math.round(0.5 * K))}`],
      D: tWithKWomen["D"][`${minAndMaxCal(10, 53, D)}`],
      Hy: tWithKWomen["Hy"][`${minAndMaxCal(9, 52, Hy)}`],
      Pd: tWithKMen["Pd"][`${minAndMaxCal(12, 50, Pd + Math.round(0.4 * K))}`],
      Mf: tWithKWomen["Mf"][`${minAndMaxCal(7, 43, Mf)}`],
      Pa: tWithKWomen["Pa"][`${minAndMaxCal(2, 30, Pa)}`],
      Pt: tWithKWomen["Pt"][`${minAndMaxCal(16, 66, Pt + K)}`],
      Sc: tWithKWomen["Sc"][`${minAndMaxCal(13, 73, Sc + K)}`],
      Ma: tWithKMen["Ma"][`${minAndMaxCal(9, 44, Ma + Math.round(0.2 * K))}`],
      Si: tWithKWomen["Si"][`${minAndMaxCal(10, 69, Si)}`],
    };
    const tWithOutKMenCal = {
      L: tWithOutKMen["L"][`${minAndMaxCal(0, 15, L)}`],
      F: tWithOutKMen["F"][`${minAndMaxCal(0, 28, F)}`],
      K: tWithOutKMen["K"][`${minAndMaxCal(6, 30, K)}`],
      Hs: tWithOutKMen["Hs"][`${minAndMaxCal(2, 34, Hs)}`],
      D: tWithOutKMen["D"][`${minAndMaxCal(9, 55, D)}`],
      Hy: tWithOutKMen["Hy"][`${minAndMaxCal(8, 50, Hy)}`],
      Pd: tWithOutKMen["Pd"][`${minAndMaxCal(6, 48, Pd)}`],
      Mm: tWithOutKMen["Mm"][`${minAndMaxCal(16, 56, Mm)}`],
      Pa: tWithOutKMen["Pa"][`${minAndMaxCal(2, 30, Pa)}`],
      Pt: tWithOutKMen["Pt"][`${minAndMaxCal(0, 48, Pt)}`],
      Sc: tWithOutKMen["Sc"][`${minAndMaxCal(0, 68, Sc)}`],
      Ma: tWithOutKMen["Ma"][`${minAndMaxCal(6, 42, Ma)}`],
      Si: tWithOutKMen["Si"][`${minAndMaxCal(9, 69, Si)}`],
    };
    const tWithOutKWoMenCal = {
      L: tWithOutKWomen["L"][`${minAndMaxCal(0, 15, L)}`],
      F: tWithOutKWomen["F"][`${minAndMaxCal(0, 24, F)}`],
      K: tWithOutKWomen["K"][`${minAndMaxCal(6, 30, K)}`],
      Hs: tWithOutKWomen["Hs"][`${minAndMaxCal(0, 32, Hs)}`],
      D: tWithOutKWomen["D"][`${minAndMaxCal(10, 53, D)}`],
      Hy: tWithOutKWomen["Hy"][`${minAndMaxCal(9, 52, Hy)}`],
      Pd: tWithOutKWomen["Pd"][`${minAndMaxCal(6, 47, Pd)}`],
      Mf: tWithOutKWomen["Mf"][`${minAndMaxCal(7, 44, Mf)}`],
      Pa: tWithOutKWomen["Pa"][`${minAndMaxCal(2, 30, Pa)}`],
      Pt: tWithOutKWomen["Pt"][`${minAndMaxCal(0, 48, Pt)}`],
      Sc: tWithOutKWomen["Sc"][`${minAndMaxCal(0, 72, Sc)}`],
      Ma: tWithOutKWomen["Ma"][`${minAndMaxCal(6, 42, Ma)}`],
      Si: tWithOutKWomen["Si"][`${minAndMaxCal(10, 69, Si)}`],
    };
    console.log({
      tWithKMenCal,
      tWithKWoMenCal,
      tWithOutKMenCal,
      tWithOutKWoMenCal,
      rawScore: { L, F, K, Hs, D, Hy, Pd, Mf, Mm, Pa, Pt, Sc, Ma, Si },
    });
    return {
      tWithKMenCal,
      tWithKWoMenCal,
      tWithOutKMenCal,
      tWithOutKWoMenCal,
      rawScore: {
        L,
        F,
        K,
        Hs,
        D,
        Hy,
        Pd,
        Mf,
        Mm,
        Pa,
        Pt,
        Sc,
        Ma,
        Si,
      },
    };
  };
}

export { testStructure as mmpiStructure } from "./testStructure";
