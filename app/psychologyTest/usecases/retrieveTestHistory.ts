import { httpResult } from "aba-node";
import type { usecaseTypes } from "../types";

export function buildRetrieveTestHistory(args: usecaseTypes.IBuildRetrieveTestsData) {
  const { findTestsDataByUserId } = args;
  const { ok } = httpResult.success;
  const { notFound } = httpResult.clientError;
  return async function retrieveTestHistory(userId: string) {
    const testsData = await findTestsDataByUserId(userId);
    if (!testsData) {
      return notFound({ error: "user's tests not found" });
    }
    return ok({
      payload: testsData,
    });
  };
}
