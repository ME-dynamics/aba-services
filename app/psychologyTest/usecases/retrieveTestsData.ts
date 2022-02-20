import { httpResult } from "aba-node";
import type { usecaseTypes } from "../types";

export function buildRetrieveTestsData(args: usecaseTypes.IBuildRetrieveTestsData) {
  const { findTestsDataByUserId } = args;
  const { ok } = httpResult.success;
  const { notFound } = httpResult.clientError;
  return async function retrieveTestsData(userId: string) {
    const testsData = await findTestsDataByUserId(userId);
    if (!testsData) {
      return notFound({ error: "forms not found" });
    }
    return ok({
      payload: testsData,
    });
  };
}
