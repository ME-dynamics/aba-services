import {
  tInsertTestDataFunc,
  tFindTestsDataByUserIdFunc,
  tFindTestDataByIdFunc,
} from "./adapters";
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
  insertTestData: tInsertTestDataFunc;
}
export interface ISubmitNEOPIR {
  userId: string;
  fields: tNEOFields;
}

export interface IBuildSubmitMBTI {
  insertTestData: tInsertTestDataFunc;
}
export interface ISubmitMBTI {
  userId: string;
  fields: tMbtiFields;
}

export interface IBuildRetrieveTestsData {
  findTestsDataByUserId: tFindTestsDataByUserIdFunc;
}

export interface IBuildRetrieveTestDataById {
  findTestDataById: tFindTestDataByIdFunc;
}

export interface IRetrieveTestDataById {
  testId: string;
  userId: string;
}
