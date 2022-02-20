import { buildGetNEOPIR } from "./getNEOPIR";
import { buildGetTests } from "./getTests";
import { buildGetBeckAnxiety } from "./getBeckAnxiety";
import { buildGetBeckDepressionII } from "./getBeckDepressionII";
import { buildGetMBTI } from "./getMBTI";
import { buildGetTestsData } from "./getTestsData";
import { buildGetTestDataById } from "./getTestsDataById";
import { buildPostCreateMbti } from "./postCreateMbti";

export const getNEOPIR = buildGetNEOPIR();
export const getTests = buildGetTests();
export const getBeckAnxiety = buildGetBeckAnxiety();
export const getBeckDepressionII = buildGetBeckDepressionII();
export const getMBTI = buildGetMBTI();
export const getTestsData = buildGetTestsData();
export const getTestDataById = buildGetTestDataById();
export const postCreateMbti = buildPostCreateMbti();
