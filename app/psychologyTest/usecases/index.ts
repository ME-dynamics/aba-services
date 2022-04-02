import {
  insertTestData,
  findTestsDataByUserId,
  findTestById,
} from "../adapters";

import { buildRetrieveTestById } from "./retrieveTestById";
import { buildRetrieveTestHistory } from "./retrieveTestHistory";
import { buildRetrieveTests } from "./retrieveTests";
import { buildRetrieveTestDataById } from "./retrieveTestDataById";

import { buildSubmitMBTI } from "./submitMBTI";
import { buildSubmitBeckAnxiety } from "./submitBeckAnxiety";
import { buildSubmitBeckDepressionII } from "./submitBeckDepressionII";
import { buildSubmitGaryWilson } from "./submitGaryWilson";
import { buildSubmitNEOPIR } from "./submitNEOPIR";
import { buildSubmitMCMI } from "./submitMCMI";
import { buildSubmitYEMSQ } from "./submitYEMSQ";
import { buildSubmitHISA } from "./submitHISA";

import { buildSubmitTest } from "./submitTest";

export const retrieveTestById = buildRetrieveTestById();

export const retrieveTestHistory = buildRetrieveTestHistory({
  findTestsDataByUserId,
});
export const retrieveTestDataById = buildRetrieveTestDataById({
  findTestDataById: findTestById,
});
export const retrieveTests = buildRetrieveTests();

export const submitMBTI = buildSubmitMBTI({ insertTestData });
export const submitBeckAnxiety = buildSubmitBeckAnxiety({ insertTestData });

export const submitBeckDepressionII = buildSubmitBeckDepressionII({
  insertTestData,
});
export const submitGaryWilson = buildSubmitGaryWilson({ insertTestData });
export const submitNEOPIR = buildSubmitNEOPIR({ insertTestData });
export const submitMCMI = buildSubmitMCMI({ insertTestData });
export const submitYEMSQ = buildSubmitYEMSQ({ insertTestData });
export const submitHISA = buildSubmitHISA({ insertTestData });

export const submitTest = buildSubmitTest({
  submitBeckAnxiety,
  submitBeckDepressionII,
  submitGaryWilson,
  submitMBTI,
  submitNEOPIR,
  submitMCMI,
  submitYEMSQ,
  submitHISA,
});
