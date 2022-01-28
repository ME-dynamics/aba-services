import { tInsertFormDataFunc, tFindFormDataByUserIdFunc } from "./adapters";
import { tNEOFields, tQuestionFields, tMbtiFields } from "./entities";

// submit form structure
// export interface IBuildSubmitFormStructure {
//   insertFormStructure: tInsertFormStructureFunc;
// }
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
  fields: tNEOFields;
}

export interface IBuildSubmitMBTI {
  insertFormData: tInsertFormDataFunc;
}
export interface ISubmitMBTI {
  userId: string;
  fields: tMbtiFields;
}

export interface IBuildRetrieveFormData {
  findFormDataByUserId: tFindFormDataByUserIdFunc;
}
