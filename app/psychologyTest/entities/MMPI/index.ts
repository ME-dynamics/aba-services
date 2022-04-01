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

export function buildMakeMMPI(
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
    L: tWithKMen["L"][`${L}`],
    F: tWithKMen["F"][`${F}`],
    K: tWithKMen["K"][`${K}`],
    Hs: tWithKMen["Hs"][`${Hs + Math.round(0.5 * K)}`],
    D: tWithKMen["D"][`${D}`],
    Hy: tWithKMen["Hy"][`${Hy}`],
    Pd: tWithKMen["Pd"][`${Pd + Math.round(0.4 * K)}`],
    Mm: tWithKMen["Mm"][`${Mm}`],
    Pa: tWithKMen["Pa"][`${Pa}`],
    Pt: tWithKMen["Pt"][`${Pt + K}`],
    Sc: tWithKMen["Sc"][`${Sc + K}`],
    Ma: tWithKMen["Ma"][`${Ma + Math.round(0.2 * K)}`],
    Si: tWithKMen["Si"][`${Si}`],
  };
  const tWithKWoMenCal = {
    L: tWithKWomen["L"][`${L}`],
    F: tWithKWomen["F"][`${F}`],
    K: tWithKWomen["K"][`${K}`],
    Hs: tWithKMen["Hs"][`${Hs + Math.round(0.5 * K)}`],
    D: tWithKWomen["D"][`${D}`],
    Hy: tWithKWomen["Hy"][`${Hy}`],
    Pd: tWithKMen["Pd"][`${Pd + Math.round(0.4 * K)}`],
    Mf: tWithKWomen["Mf"][`${Mf}`],
    Pa: tWithKWomen["Pa"][`${Pa}`],
    Pt: tWithKWomen["Pt"][`${Pt + K}`],
    Sc: tWithKWomen["Sc"][`${Sc + K}`],
    Ma: tWithKMen["Ma"][`${Ma + Math.round(0.2 * K)}`],
    Si: tWithKWomen["Si"][`${Si}`],
  };
  const tWithOutKMenCal = {
    L: tWithOutKMen["L"][`${L}`],
    F: tWithOutKMen["F"][`${F}`],
    K: tWithOutKMen["K"][`${K}`],
    Hs: tWithOutKMen["Hs"][`${Hs}`],
    D: tWithOutKMen["D"][`${D}`],
    Hy: tWithOutKMen["Hy"][`${Hy}`],
    Pd: tWithOutKMen["Pd"][`${Pd}`],
    Mm: tWithOutKMen["Mm"][`${Mm}`],
    Pa: tWithOutKMen["Pa"][`${Pa}`],
    Pt: tWithOutKMen["Pt"][`${Pt}`],
    Sc: tWithOutKMen["Sc"][`${Sc}`],
    Ma: tWithOutKMen["Ma"][`${Ma}`],
    Si: tWithOutKMen["Si"][`${Si}`],
  };
  const tWithOutKWoMenCal = {
    L: tWithOutKWomen["L"][`${L}`],
    F: tWithOutKWomen["F"][`${F}`],
    K: tWithOutKWomen["K"][`${K}`],
    Hs: tWithOutKWomen["Hs"][`${Hs}`],
    D: tWithOutKWomen["D"][`${D}`],
    Hy: tWithOutKWomen["Hy"][`${Hy}`],
    Pd: tWithOutKWomen["Pd"][`${Pd}`],
    Mf: tWithOutKWomen["Mf"][`${Mf}`],
    Pa: tWithOutKWomen["Pa"][`${Pa}`],
    Pt: tWithOutKWomen["Pt"][`${Pt}`],
    Sc: tWithOutKWomen["Sc"][`${Sc}`],
    Ma: tWithOutKWomen["Ma"][`${Ma}`],
    Si: tWithOutKWomen["Si"][`${Si}`],
  };
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
}
