import {
  insertTestData,
  findTestsDataByUserId,
  findTestById,
} from "../adapters";

import { buildRetrieveNEOPIR } from "./retrieveNEOPIR";
import { buildRetrieveMBTI } from "./retrieveMBTI";
import { buildRetrieveBeckAnxiety } from "./retrieveBeckAnxiety";
import { buildRetrieveBeckDepressionII } from "./retrieveBeckDepressionII";
import { buildRetrieveTestsData } from "./retrieveTestsData";
import { buildRetrieveTests } from "./retrieveTests";
import { buildRetrieveTestDataById } from "./retrieveTestDataById";
import { buildSubmitMBTI } from "./submitMBTI";

export const retrieveNEOPIR = buildRetrieveNEOPIR();
export const retrieveMBTI = buildRetrieveMBTI();
export const retrieveTestsData = buildRetrieveTestsData({
  findTestsDataByUserId,
});
export const retrieveTestDataById = buildRetrieveTestDataById({
  findTestDataById: findTestById,
});
export const retrieveTests = buildRetrieveTests();
export const retrieveBeckAnxiety = buildRetrieveBeckAnxiety();
export const retrieveBeckDepressionII = buildRetrieveBeckDepressionII();

export const submitMBTI = buildSubmitMBTI({ insertTestData });
