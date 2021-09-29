import { v4 } from "uuid";
import { buildMakeFormData } from "./formData";
import { aFormula } from "./NEOPIR/aFormula";
import { cFormula } from "./NEOPIR/cFormula";
import { eFormula } from "./NEOPIR/eFormula";
import { nFormula } from "./NEOPIR/nFormula";
import { oFormula } from "./NEOPIR/oFormula";
import { rules } from "./NEOPIR/rules";
import { buildMakeNEOPIR } from "./NEOPIR";
export const makeFormData = buildMakeFormData({ uuid: v4 });
export const makeNEOPIR = buildMakeNEOPIR({
  aFormula,
  cFormula,
  eFormula,
  nFormula,
  oFormula,
  rules,
});
