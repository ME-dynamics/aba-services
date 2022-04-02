import { types } from "aba-node";
import {
  tInsertTestDataFunc,
  tFindTestsDataByUserIdFunc,
  tFindTestDataByIdFunc,
} from "./adapters";
import type {
  tNEOFields,
  tQuestionFields,
  tMbtiFields,
  tBeckAnxietyFields,
  tBeckDepressionIIFields,
  tGaryWilsonFields,
  tMCMIFields,
  IMadeTestDataObject,
  tTestFields,
} from "./entities";

// TODO: fix types, make types generalized

export interface ISubmitTest {
  userId: string;
  fields: tTestFields;
}

export interface ISubmitTestWithGender extends ISubmitTest {
  gender: "male" | "female"
}

// submit form structure
// export interface IBuildSubmitFormStructure {
//   insertFormStructure: tInsertFormStructureFunc;
// }
export interface ISubmitFormStructure {
  title: string;
  description: string | undefined;
  fields: tQuestionFields;
}

export interface IBuildSubmitTest {
  insertTestData: tInsertTestDataFunc;
}

// submit NEOPIR

export interface IBuildSubmitNEOPIR {
  insertTestData: tInsertTestDataFunc;
}
export interface ISubmitNEOPIR {
  userId: string;
  fields: tNEOFields;
}

// submit MCMI

export interface ISubmitMCMI {
  userId: string;
  fields: tMCMIFields;
}

// gary wilson
export interface ISubmitGaryWilson {
  userId: string;
  fields: tGaryWilsonFields;
}

// beck anxiety

export interface ISubmitBeckAnxiety {
  userId: string;
  fields: tBeckAnxietyFields;
}

export interface ISubmitBeckDepressionII {
  userId: string;
  fields: tBeckDepressionIIFields;
}

export interface ISubmitYEMSQ {
  userId: string;
  fields: Record<string, number>;
}

// mcmi

export interface ISubmitMCMI {
  userId: string;
  fields: tMCMIFields;
  gender: "male" | "female";
}

// yemsq

export interface ISubmitYEMSQ {
  userId: string;
  fields: Record<string, number>;
}

//* submit test

export interface IBuildSubmitTestById {
  submitBeckAnxiety: (
    info: ISubmitBeckAnxiety
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitBeckDepressionII: (
    info: ISubmitBeckDepressionII
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitGaryWilson: (
    info: ISubmitGaryWilson
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitMCMI: (
    info: ISubmitMCMI
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitNEOPIR: (
    info: ISubmitNEOPIR
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitMBTI: (
    info: ISubmitMBTI
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitYEMSQ: (
    info: ISubmitYEMSQ
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitHISA: (
    info: ISubmitTest
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
  submitHISD: (
    info: ISubmitTest
  ) => Promise<types.IPayloadResult<IMadeTestDataObject>>;
}

export interface ISubmitTestById {
  userId: string;
  testId: string;
  fields: Record<string, number>;
  gender: "male" | "female" | undefined;
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
