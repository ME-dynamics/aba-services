import { buildGetNEOPIR } from "./getNEOPIR";
import { buildGetTests } from "./getTests";
import { buildGetBeckAnxiety } from "./getBeckAnxiety";
import { buildGetBeckDepressionII } from "./getBeckDepressionII";
import { buildGetMBTI } from "./getMBTI";
import { buildGetFormData } from "./getFormData"
import { buildPostCreateMbti } from "./postCreateMbti";

export const getNEOPIR = buildGetNEOPIR();
export const getTests = buildGetTests();
export const getBeckAnxiety = buildGetBeckAnxiety();
export const getBeckDepressionII = buildGetBeckDepressionII();
export const getMBTI = buildGetMBTI();
export const getFormData = buildGetFormData();
export const postCreateMbti = buildPostCreateMbti();
