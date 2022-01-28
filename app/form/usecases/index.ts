import { insertFormData, findFormDataByUserId } from "../adapters";

import { buildRetrieveNEOPIR } from "./retrieveNEOPIR";
import { buildRetrieveMBTI } from "./retrieveMBTI";
import { buildRetrieveBeckAnxiety } from "./retrieveBeckAnxiety";
import { buildRetrieveBeckDepressionII } from "./retrieveBeckDepressionII";
import { buildRetrieveFormData } from "./retrieveFormData";
import { buildRetrieveTests } from "./retrieveTests";
import { buildSubmitMBTI } from "./submitMBTI";

export const retrieveNEOPIR = buildRetrieveNEOPIR();
export const retrieveMBTI = buildRetrieveMBTI();
export const retrieveFormData = buildRetrieveFormData({ findFormDataByUserId });
export const retrieveTests = buildRetrieveTests();
export const retrieveBeckAnxiety = buildRetrieveBeckAnxiety();
export const retrieveBeckDepressionII = buildRetrieveBeckDepressionII();

export const submitMBTI = buildSubmitMBTI({ insertFormData });
