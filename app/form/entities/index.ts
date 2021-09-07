import { v4 } from "uuid";
import { buildMakeFormStructure } from "./formStructure";
import { buildMakeFormData } from "./formData";
import { aFormula } from "./NEOPIR/aFormula";
import { cFormula } from "./NEOPIR/cFormula";
import { eFormula } from "./NEOPIR/eFormula";
import { nFormula } from "./NEOPIR/nFormula";
import { oFormula } from "./NEOPIR/oFormula";
import { rules } from "./NEOPIR/rules";
import { buildMakeNEOPIR } from "./NEOPIR";
export const makeFormStructure = buildMakeFormStructure({ uuid: v4 });
export const makeFormData = buildMakeFormData({ uuid: v4 });
export const makeNEOPIR = buildMakeNEOPIR({
  aFormula,
  cFormula,
  eFormula,
  nFormula,
  oFormula,
  rules,
});

// const formSt = makeFormStructure({
//   id: undefined,
//   createdAt: undefined,
//   modifiedAt: undefined,
//   description: "some text for form",
//   fields: [
//     {
//       type: "choice",
//       choice: [
//         { label: "one", value: 1 },
//         { label: "two", value: 2 },
//       ],
//       fieldDescription: "this field is something",
//       fieldId: undefined,
//       fieldLabel: "choose one or two",
//       multiChoice: undefined,
//       placeholder: undefined,
//       required: true,
//     },
//     {
//       type: "text",
//       choice: undefined,
//       fieldDescription: "this field is something",
//       fieldId: undefined,
//       fieldLabel: "choose one or two",
//       multiChoice: undefined,
//       placeholder: "you should do the name here",
//       required: true,
//     },
//   ],
//   softDeleted: false,
// });
// console.dir(formSt.object(), { depth: null, colors: true });
