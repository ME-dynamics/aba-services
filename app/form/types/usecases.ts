import { tInsertFormStructureFunc, tInsertFormDataFunc } from "./adapters";
import { tFields, tQuestionFields } from "./entities";

// submit form structure
export interface IBuildSubmitFormStructure {
  insertFormStructure: tInsertFormStructureFunc;
}
export interface ISubmitFormStructure {
  title: string;
  description: string | undefined;
  fields: tQuestionFields;
}


// submit NEOPIR

export interface IBuildSubmitNEOPIR {
  insertFormData: tInsertFormDataFunc;
}
export interface ISubmitNEOPIR {
  userId: string;
  structureId: string;
  fields: tFields;
}