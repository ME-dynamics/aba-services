import { httpResult } from "aba-node";
import type { usecaseTypes } from "../types";

export function buildRetrieveTestDataById(
  args: usecaseTypes.IBuildRetrieveTestDataById
) {
  const { findTestDataById } = args;
  const { ok } = httpResult.success;
  const { notFound, forbidden } = httpResult.clientError;
  return async function retrieveTestDataById(
    info: usecaseTypes.IRetrieveTestDataById
  ) {
    const { testId, userId } = info;
    const testData = await findTestDataById(testId);
    if (!testData) {
      return notFound({ error: "testData not found" });
    }
    if (testData.userId !== userId) {
      return forbidden({ error: "test does not belongs to you" });
    }
    return ok({
      payload: testData,
    });
  };
}
