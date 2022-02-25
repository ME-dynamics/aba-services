import { buildGetTestById } from "./getTestById";
import { buildGetTests } from "./getTests";
import { buildGetTestHistory } from "./getTestHistory";
import { buildGetTestData } from "./getTestData";

import { buildPostSubmitTest } from "./postSubmitTest";

export const getTestById = buildGetTestById();
export const getTests = buildGetTests();
export const getTestHistory = buildGetTestHistory();
export const getTestData = buildGetTestData();
// export const postCreateMbti = buildPostCreateMbti();
// export const postCreateBeckAnxiety = buildPostCreateBeckAnxiety();
// export const postCreateBeckDepressionII = buildPostCreateBeckDepressionII();
// export const postCreateGaryWilson = buildPostCreateGaryWilson();
export const postSubmitTest = buildPostSubmitTest();
